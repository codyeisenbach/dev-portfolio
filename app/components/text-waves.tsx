"use client";

import { useRef, useMemo, useEffect } from "react";

export default function TextWaves({
  text = "Text Waves",
  containerWidth = 1920,
  containerHeight = 1080,
  direction = "out",
  gradient = "positive",
}: {
  text: string;
  containerWidth?: number;
  containerHeight?: number;
  direction?: "in" | "out";
  gradient?: "positive" | "negative";
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chars = useMemo(
    () => text.replace(/\s+/g, "").trim().split(""),
    [text]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = containerWidth;
    canvas.height = containerHeight;

    const CELL_SIZE = 12;
    const CIRCLE_COUNT = 8;
    const MIN_SIZE = 6;
    const MAX_SIZE = CELL_SIZE;
    const LEVELS = 8;
    const RING_MIN = CELL_SIZE * 2; // smallest thickness when the circle just begins
    const maxRadius = containerWidth / 2;
    const SPEED_FACTOR = 12;
    const SPEED =
      direction === "out"
        ? maxRadius / SPEED_FACTOR
        : -(maxRadius / SPEED_FACTOR);

    const fontSizes = Array.from({ length: LEVELS }, (_, i) => {
      const t = i / (LEVELS - 1);
      return MIN_SIZE + (MAX_SIZE - MIN_SIZE) * t;
    });

    const ringWidth = maxRadius / CIRCLE_COUNT;

    const span = maxRadius + ringWidth;
    const circles = Array.from({ length: CIRCLE_COUNT }, (_, i) => ({
      x: containerWidth / 2,
      y: containerHeight / 2,
      phase: i / CIRCLE_COUNT, // radius independent spacing
      radius: direction === "out" ? 0 : maxRadius - i * ringWidth,
      speed: SPEED, // pixels/sec
    }));

    type Cell = {
      cx: number;
      cy: number;
      char: string;
      intensity: number;
      bucket: number;
    };
    const cells: Cell[] = [];

    const initGrid = () => {
      cells.length = 0;
      const cols = Math.floor(containerWidth / CELL_SIZE);
      const rows = Math.floor(containerHeight / CELL_SIZE);
      if (!chars.length) return;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const gridIndex = row * cols + col;
          cells.push({
            cx: col * CELL_SIZE + CELL_SIZE / 2,
            cy: row * CELL_SIZE + CELL_SIZE / 2,
            char: chars[gridIndex % chars.length] ?? "0",
            intensity: 0,
            bucket: 0,
          });
        }
      }
    };

    const update = (dt: number) => {
      // advance circles
      for (const c of circles) {
        const phaseDelta = (c.speed * dt) / span;
        c.phase = (c.phase + phaseDelta) % 1;
        if (c.phase < 0) c.phase += 1;
        c.radius = c.phase * span;
      }

      // compute intensity from nearest ring edge
      for (const cell of cells) {
        let intensity = 0;
        for (const c of circles) {
          const effectiveRadius = Math.abs(c.radius);
          const thickness = Math.max(
            RING_MIN,
            Math.min(ringWidth, (effectiveRadius / ringWidth) * ringWidth)
          );
          const edgeDist = Math.hypot(cell.cx - c.x, cell.cy - c.y) - c.radius;
          if (edgeDist >= 0 && edgeDist <= thickness) {
            const local = 1 - edgeDist / thickness;
            intensity = Math.max(intensity, local);
          }
        }
        cell.intensity = intensity;

        const idx = Math.min(LEVELS - 1, Math.floor(cell.intensity * LEVELS));
        cell.bucket = idx;
      }
    };

    const render = () => {
      const buckets: number[][] = Array.from({ length: LEVELS }, () => []);
      for (let i = 0; i < cells.length; i++) {
        buckets[cells[i].bucket]?.push(i);
      }

      ctx.fillStyle = "#000";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let b = 0; b < LEVELS; b++) {
        const fontSize =
          gradient === "positive" ? fontSizes[b] : fontSizes[LEVELS - 1 - b];
        ctx.font = `${fontSize}px monospace`;
        ctx.fillStyle = "#fff";
        for (const idx of buckets[b]) {
          const cell = cells[idx];
          ctx.fillText(cell?.char, cell?.cx, cell?.cy);
        }
      }
    };

    initGrid();

    let lastTime = 0;
    let running = true;

    const frame = (now: number) => {
      if (!running) return;
      if (!lastTime) lastTime = now;
      const dt = (now - lastTime) / 1000;
      lastTime = now;

      update(dt);
      render();
      requestAnimationFrame(frame);
    };

    requestAnimationFrame(frame);

    return () => {
      running = false;
    };
  }, [chars, containerWidth, containerHeight]);

  return (
    <canvas
      ref={canvasRef}
      id="text-wave-canvas"
      style={{
        display: "block",
        width: `${containerWidth}px`,
        height: `${containerHeight}px`,
      }}
    />
  );
}
