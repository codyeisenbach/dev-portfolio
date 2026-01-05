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
    title: "Production Systems",
    description:
      "Maintaining complex production systems with thousands of business rules and tens of thousands of product variants.",
    href: "/projects/production-systems",
    tech: ["TypeScript", "System Design", "Node.js"],
    imageSrc: "/projects/production-systems.svg",
    imageAlt: "Production Systems",
  },
  {
    title: "Headless Storefront",
    description:
      "Migrating a large-scale production storefront from the BigCommerce Stencil Framework to a modern, Next.js based, headless architecture.",
    href: "/projects/headless-storefront",
    tech: ["Next.js", "BigCommerce", "React"],
    imageSrc: "/projects/headless-storefront.svg",
    imageAlt: "Headless Storefront",
  },
  {
    title: "Interactive 3D",
    description:
      "Creating interactive 3D experiences with a strong focus on performance and scalability.",
    href: "/projects/interactive-3d",
    tech: ["WebGL", "Three.js", "Shaders"],
    imageSrc: "/projects/interactive-3d.svg",
    imageAlt: "Interactive 3D",
  },
];

export function FeaturedProjects() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {projects.map((project) => (
        <Link
          key={project.title}
          href={project.href}
          className="group flex flex-col overflow-hidden rounded-lg border border-neutral-100 bg-white transition-all hover:border-neutral-200 hover:bg-neutral-50 hover:shadow-sm"
        >
          <div className="relative h-48 w-full overflow-hidden bg-neutral-100">
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
              <p className="text-sm leading-relaxed text-neutral-600 line-clamp-3">
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
