import Image from "next/image";
import Link from "next/link";

type Project = {
  title: string;
  description: string;
  href: string;
  tech: string[];
  imageSrc: string;
  imageAlt: string;
};

const projects: Project[] = [
  {
    title: "Text Waves",
    description:
      "A real-time generative typography system that animates grid-based text using concentric waves and distance-based falloff using HTML Canvas.",
    href: "/text-waves",
    tech: [
      "TypeScript",
      "React",
      "Next.js",
      "HTML Canvas",
      "Math & Geometry",
      "requestAnimationFrame",
    ],
    imageSrc: "/text-waves-thumbnail.png",
    imageAlt: "Text Waves generative typography animation",
  },
];

export function FeaturedProjects() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {projects.map((project) => (
        <Link
          key={project.title}
          href={project.href}
          className="group flex flex-col overflow-hidden rounded-lg border border-neutral-100 bg-white transition-all hover:border-neutral-200 hover:bg-neutral-50 hover:shadow-sm"
        >
          <div className="relative h-72 w-full overflow-hidden bg-neutral-100">
            <Image
              src={project.imageSrc}
              alt={project.imageAlt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-1 flex-col justify-between gap-4 p-6">
            <div className="space-y-3">
              <h3 className="font-semibold text-neutral-900 group-hover:text-black">
                {project.title}
              </h3>
              <p className="text-sm leading-relaxed text-neutral-600 line-clamp-7">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-md bg-neutral-100 px-2 py-1 text-xs font-medium text-neutral-600"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
