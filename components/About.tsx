"use client";

import Image from "next/image";
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
    stat: "2024",
    label: "supported regional operations during #1 Canada and #1 global recognition",
  },
  {
    stat: "40%",
    label: "faster concept-to-launch workflow through Triskelion content systems",
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
              I build the operational systems behind business growth: CRM
              workflows, marketing operations, website updates, reporting
              dashboards, event processes, and remote team systems that keep
              organizations moving.
            </p>

            <p
              className="about-desc mb-4"
              style={{
                color: "rgba(255,255,255,0.85)",
                lineHeight: "1.75",
              }}
            >
              For the last 5+ years, I have supported Canadian business teams
              remotely from Nigeria, working across CRM administration, workflow
              automation, digital operations, event systems, reporting, website
              updates, social media coordination, QuickBooks support, and member
              services.
            </p>

            <p
              className="about-desc mb-5"
              style={{
                color: "rgba(255,255,255,0.85)",
                lineHeight: "1.75",
              }}
            >
              My strongest work happens behind the scenes. I organize messy
              systems, document repeatable workflows, connect tools, support
              leaders, manage digital assets, and help teams move from scattered
              manual work to structured execution.
            </p>

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
              className="about-desc mb-4"
              style={{
                color: "rgba(255,255,255,0.85)",
                lineHeight: "1.75",
              }}
            >
              Core systems I work with include GoHighLevel, Zapier, Google
              Workspace, BNI Connect, QuickBooks, WordPress, Eventbrite, Asana,
              ClickUp, Notion, Canva, Meta Business Suite, HubSpot, Zoho CRM,
              React, Vercel, SQL, and Tableau.
            </p>

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
              src="/images/profile.png"
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