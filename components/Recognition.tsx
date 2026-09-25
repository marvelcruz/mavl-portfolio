"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Recognition as recognitionData } from "@/constants";
import { motionValues } from "@/lib/utils";

const Recognition = () => {
  const { title, description, projects: recognitionItems } = recognitionData;

  return (
    <section id="recognition" className="section section_px section-gap">
      <main className="flex flex-col gap-12">
        <motion.div {...motionValues} className="flex-center flex-col gap-4">
          <h2 className="section-h2">{title}</h2>
          <h3 className="section-h3 max-w-3xl text-center">{description}</h3>
        </motion.div>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recognitionItems.map((item, index) => (
            <motion.article
              key={`${item.id}-${index}`}
              {...motionValues}
              className="card-soft group flex flex-col overflow-hidden rounded-2xl"
            >
              <div className="relative flex h-72 w-full items-center justify-center overflow-hidden border-b border-[#D6A400]/25 bg-white p-4">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-contain p-3 transition-transform duration-700 group-hover:scale-[1.03]"
                />

              </div>

              <div className="flex flex-1 flex-col gap-4 p-5">
                <h3 className="project-h3 text-lg leading-snug">
                  {item.title}
                </h3>

                {item.description && (
                  <p className="project-p leading-6">
                    {item.description}
                  </p>
                )}

                {item.stacks?.filter(Boolean).length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {item.stacks
                      .filter(Boolean)
                      .slice(0, 4)
                      .map((stack) => (
                        <span key={stack} className="mustard-pill">
                          {stack}
                        </span>
                      ))}
                  </div>
                )}

                {(item.url || item.gitLink) && (
                  <div className="mt-auto flex flex-wrap gap-3 pt-2">
                    {item.url && (
                      <Link
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mustard-button"
                      >
                        View Proof
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

export default Recognition;
