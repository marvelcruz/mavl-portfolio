"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/constants";
import { motionValues } from "@/lib/utils";

const Projects = () => {
  const { title, description, projects: projectItems } = projects;

  return (
    <section id="projects" className="section section_px section-gap">
      <main className="flex flex-col gap-12">
        <motion.div {...motionValues} className="flex-center flex-col gap-4">
          <h2 className="section-h2">{title}</h2>
          <h3 className="section-h3 max-w-3xl text-center">{description}</h3>
        </motion.div>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projectItems.map((project, index) => (
            <motion.article
              key={project.id}
              {...motionValues}
              className="card-soft group flex flex-col overflow-hidden rounded-2xl"
            >
              <div className="relative flex h-64 w-full items-center justify-center overflow-hidden border-b border-[#D6A400]/25 bg-white p-4">
                <Image
                  src={project.src}
                  alt={project.title}
                  fill
                  className="object-contain p-3 transition-transform duration-700 group-hover:scale-[1.03]"
                />

                <div className="absolute left-4 top-4 rounded-full border border-[#D6A400]/50 bg-black px-3 py-1 text-xs font-bold text-[#D6A400]">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-4 p-5">
                <h3 className="project-h3 text-lg leading-snug">
                  {project.title}
                </h3>

                <p className="project-p leading-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.stacks
                    .filter(Boolean)
                    .slice(0, 5)
                    .map((stack) => (
                      <span key={stack} className="mustard-pill">
                        {stack}
                      </span>
                    ))}
                </div>

                {(project.url || project.gitLink) && (
                  <div className="mt-auto flex flex-wrap gap-3 pt-2">
                    {project.url && (
                      <Link
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mustard-button"
                      >
                        View Project
                      </Link>
                    )}

                    {project.gitLink && (
                      <Link
                        href={project.gitLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="white-pill"
                      >
                        View Code
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </main>
    </section>
  );
};

export default Projects;