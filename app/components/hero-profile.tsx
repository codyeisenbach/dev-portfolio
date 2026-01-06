import Image from "next/image";

export function HeroProfile() {
  // todo add image

  return (
    <div className="flex flex-col items-center justify-center gap-6 text-center">
      <h2 className="text-md sm:text-2xl font-bold tracking-tight text-neutral-900 whitespace-nowrap">
        Cody Eisenbach
      </h2>
      <div className="relative h-[100px] w-[100px] overflow-hidden rounded-full border-4 border-white bg-neutral-100 shadow-lg">
        <Image
          src="/profile.jpg"
          alt="J. Cody Eisenbach"
          fill
          className="object-cover"
          priority
        />
      </div>
      <p className="hidden max-w-[250px] text-sm font-medium leading-relaxed text-neutral-500 lg:block">
        Austin, TX.
      </p>
    </div>
  );
}
