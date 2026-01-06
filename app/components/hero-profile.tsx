import Image from "next/image";

export function HeroProfile({ className }: { className?: string }) {
  // todo add image

  return (
    <div
      className={`flex flex-col items-center justify-center text-center ${className}`}
    >
      <div className="relative h-[75px] w-[75px] md:h-[100px] md:w-[100px] overflow-hidden rounded-full border-4 border-white bg-neutral-100 shadow-lg">
        <Image
          src="/profile.jpg"
          alt="J. Cody Eisenbach"
          fill
          className="object-cover"
          priority
        />
      </div>
      {/* <p className="hidden max-w-[250px] text-sm font-medium leading-relaxed text-neutral-500 lg:block mt-4">
        Austin, TX.
      </p> */}
    </div>
  );
}
