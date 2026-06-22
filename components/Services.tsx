"use client";

import { motion } from "framer-motion";
import { services } from "@/constants";
import { motionValues } from "@/lib/utils";

const Services = () => {
  const { title, subtitle, values } = services;

  return (
    <section id="services" className="section section_px section-gap">
      <main className="flex-center flex-col gap-12">
        <motion.div {...motionValues} className="flex-center flex-col gap-4">
          <h2 className="section-h2">{title}</h2>

          {subtitle && (
            <h3 className="section-h3 max-w-3xl text-center">
              {subtitle}
            </h3>
          )}
        </motion.div>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="flex flex-col gap-5 rounded-xl p-6"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "0.5px solid rgba(255,255,255,0.15)",
              }}
              {...motionValues}
            >
              <div className="flex items-start gap-4">
                <span
                  className="font-montserrat text-sm font-bold"
                  style={{
                    background: "rgba(255,255,255,0.12)",
                    border: "1px solid rgba(255,255,255,0.25)",
                    borderRadius: "6px",
                    padding: "2px 10px",
                    color: "#fff",
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="flex flex-col gap-2">
                  <h3 className="section-h3__">{value.title}</h3>

                  <p
                    className="section-p__"
                    style={{
                      color: "rgba(255,255,255,0.75)",
                      lineHeight: "1.7",
                    }}
                  >
                    {value.desc}
                  </p>
                </div>
              </div>

              {value.tools && (
                <div className="flex flex-wrap gap-2">
                  {value.tools.map((tool: string) => (
                    <span
                      key={tool}
                      className="font-montserrat text-xs font-medium"
                      style={{
                        background: "rgba(255,255,255,0.08)",
                        border: "0.5px solid rgba(255,255,255,0.15)",
                        borderRadius: "999px",
                        color: "rgba(255,255,255,0.75)",
                        padding: "6px 10px",
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </main>
    </section>
  );
};

export default Services;