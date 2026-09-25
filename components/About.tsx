"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { motionValues } from "@/lib/utils";

const proofPoints = [
  {
    stat: "5+",
    label: "years supporting Canadian business teams remotely",
  },
  {
    stat: "18",
    label: "active chapters supported across operations, events, systems, and reporting",
  },
  {
    stat: "CRM",
    label: "workflows, member systems, reporting, and automations",
  },
  {
    stat: "Web",
    label: "live projects across hospitality, healthcare, and wellness",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="section section_px mt-[90px] h-fit lg:h-hero text-white"
    >
      <main className="about">
        <div className="flex flex-col gap-5 sm:gap-7">
          <motion.h1 className="about-title" {...motionValues}>
            Marvellous Olabode
          </motion.h1>

          <motion.h2 className="about-subtitle" {...motionValues}>
            <span>{"[ "}</span>
            Business Operations & Growth Systems Specialist
            <span>{" ]"}</span>
          </motion.h2>

          <motion.div {...motionValues}>
            <p
              className="about-desc mb-4"
              style={{
                color: "rgba(255,255,255,0.9)",
                lineHeight: "1.75",
              }}
            >
              I build websites people can explore and the systems that help
              businesses run. My work spans digital experiences, CRM workflows,
              automation, reporting, and remote operations.
            </p>

            <p
              className="about-desc mb-4"
              style={{
                color: "rgba(255,255,255,0.85)",
                lineHeight: "1.75",
              }}
            >
              For 5+ years I have supported Canadian business teams remotely
              from Nigeria, including operations across 18 BNI chapters. I also
              create websites for hospitality, healthcare, and wellness brands.
            </p>

            <div className="mb-6 flex flex-wrap gap-3">
              <Link href="#projects" className="mustard-button">Explore live projects</Link>
              <Link href="#impact" className="white-pill">See my operations impact</Link>
            </div>

            <ul className="mb-5 ml-0 flex flex-col gap-2">
              {proofPoints.map(({ stat, label }, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    style={{
                      minWidth: "58px",
                      background: "rgba(255,255,255,0.12)",
                      border: "1px solid rgba(255,255,255,0.25)",
                      borderRadius: "6px",
                      padding: "2px 8px",
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      color: "#ffffff",
                      textAlign: "center",
                      letterSpacing: "0.03em",
                      fontFamily: "var(--font-montserrat, sans-serif)",
                    }}
                  >
                    {stat}
                  </span>

                  <span
                    className="about-desc"
                    style={{
                      color: "rgba(255,255,255,0.8)",
                      lineHeight: "1.6",
                    }}
                  >
                    {label}
                  </span>
                </li>
              ))}
            </ul>

            <p
              className="about-desc italic"
              style={{
                color: "rgba(255,255,255,0.65)",
                borderLeft: "2px solid rgba(255,255,255,0.3)",
                paddingLeft: "12px",
                lineHeight: "1.75",
              }}
            >
              Open to remote roles in business operations, marketing operations,
              CRM administration, digital operations, growth operations, and
              remote systems coordination.
            </p>
          </motion.div>
        </div>

        <div className="flex-center h-full w-full">
          <motion.div className="img-container" {...motionValues}>
            <Image
              src="/images/profile1.png"
              alt="Portrait of Marvellous Olabode"
              width={500}
              height={500}
              priority
            />
          </motion.div>
        </div>
      </main>
    </section>
  );
};

export default About;
