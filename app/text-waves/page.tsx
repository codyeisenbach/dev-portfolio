import TextWaves from "app/components/text-waves";
import { readFile } from "fs/promises";
import path from "path";

export default async function TextWavesProject() {
  const text = await readFile(
    path.join(process.cwd(), "public", "genesis-simplified.txt"),
    "utf8"
  );

  return (
    <div className="flex h-[100dvh] w-screen items-center justify-center overflow-hidden bg-zinc-950 text-zinc-200 md:h-full md:max-h-[750px] md:w-full md:max-w-none md:items-center">
      <TextWaves text={text} />
    </div>
  );
}
