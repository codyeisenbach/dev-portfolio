import TextWaves from "app/components/text-waves";
import { readFile } from "fs/promises";
import path from "path";

export default async function TextWavesProject() {
  const text = await readFile(
    path.join(process.cwd(), "public", "genesis-simplified.txt"),
    "utf8"
  );

  return (
    <div className="flex h-[100mvh] md:h-full max-h-[750px] w-[100mvw] md:w-full items-center justify-center overflow-hidden md:max-w-none md:items-center">
      <TextWaves text={text} />
    </div>
  );
}
