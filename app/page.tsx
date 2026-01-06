import { FeaturedProjects } from "app/components/featured-projects";
import { Accordion } from "app/components/accordion";
import { HeroProfile } from "app/components/hero-profile";

export default function Page() {
  return (
    <main className="mx-auto px-16 py-8">
      {/* --- Hero Section --- */}
      <section className="mb-16 flex flex-col gap-12 sm:items-center">
        <div className="order-2 w-full sm:order-1 justify-between">
          <div className="flex justify-between flex-col">
            <div className="flex justify-between w-full">
              <div className="flex flex-col gap-y-2 mb-8">
                <div className="flex w-full justify-start ">
                  <p className="sm:text-lg mb-8 mt-2 text-xs self-start font-bold uppercase tracking-[0.25em] text-neutral-500">
                    Software Developer
                  </p>
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-neutral-800 sm:text-5xl">
                  Building reliable systems <br className="hidden sm:block" />
                  with Next.js & TypeScript.
                </h1>
              </div>
              {/* <div className="flex items-start ml-8  md:hidden">
                <HeroProfile />
              </div> */}
            </div>
            <div className="max-w-2xl mt-4 space-y-6 text-lg leading-relaxed text-neutral-500">
              <p>
                I’m a software developer based in Austin focused on
                performance-minded web applications. I work primarily on large,
                user-facing systems where clarity, maintainability, and
                correctness matter as much as shipping features.
              </p>
              <p>
                Specializing in long-lived production systems, ensuring changes
                are introduced without breaking existing behavior, performance,
                or SEO across thousands of rules and variants.
              </p>
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex mt-8 flex-wrap gap-2 text-sm font-medium text-neutral-600">
            {["Next.js", "TypeScript", "React", "Node.js", "Tailwind CSS"].map(
              (tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-neutral-100 px-3 py-1 text-neutral-800"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* --- Featured Projects --- */}
      <section className="mb-24 space-y-8">
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-800">
            Selected Work
          </h2>
          {/* <span className="text-xs font-medium uppercase tracking-wider text-neutral-500">
            2022 — Present
          </span> */}
        </div>

        {/* Re-using your existing component */}
        <FeaturedProjects />
      </section>

      {/* --- Experience Section --- */}
      <section className="mb-24 border-t border-neutral-100 pt-12">
        <Accordion
          mainHeading="Experience"
          style="default"
          items={[
            {
              subHeading: "Large-Scale Production",
              copy: "Engineered and maintained high-scale production systems, supporting thousands of business rules and tens of thousands of product variants.",
            },
            {
              subHeading: "Architecture Migration",
              copy: "Contributed to migrating a large-scale production storefront from the BigCommerce Stencil Framework to a modern, Next.js based, headless architecture.",
            },
            {
              subHeading: "Full Stack & Algorithms",
              copy: "Building full-stack features, ranking algorithms, and interactive 3D experiences with a focus on scalability.",
            },
          ]}
        />
      </section>
    </main>
  );
}
