"use client";

import { motion } from "framer-motion";
import { motionValues } from "@/lib/utils";

const impactItems = [
  {
    metric: "5+ Years",
    title: "Remote Business Operations Experience",
    desc: "Supported Canadian business teams remotely across CRM administration, workflow automation, reporting, event operations, social media coordination, and member support.",
  },
  {
    metric: "18 Chapters",
    title: "Multi-Chapter Operations Support",
    desc: "Supported active BNI chapters through leadership coordination, event setup, member workflows, reporting sheets, access management, and digital communication.",
  },
  {
    metric: "#1 Region",
    title: "Regional Recognition Support",
    desc: "Supported BNI Alberta South’s regional operations during a period when the leadership team achieved #1 region in Canada and #1 globally in 2024.",
  },
  {
    metric: "3 Live Sites",
    title: "Website & Digital Experience",
    desc: "Built web experiences for hospitality, healthcare, and wellness projects. Explore the live work below.",
  },
];

const Impact = () => {
  return (
    <section id="impact" className="section section_px section-gap">
      <main className="flex-center flex-col gap-12">
        <motion.div {...motionValues} className="flex-center flex-col gap-4">
          <h2 className="section-h2">Impact</h2>

          <h3 className="section-h3 max-w-3xl text-center">
            A snapshot of the operational, digital, and systems work I have
            supported across remote teams, business networks, and small business
            growth projects.
          </h3>
        </motion.div>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
          {impactItems.map(({ metric, title, desc }) => (
            <motion.div
              key={title}
              {...motionValues}
              className="flex flex-col gap-4 rounded-xl p-6"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "0.5px solid rgba(255,255,255,0.15)",
              }}
            >
              <span
                className="font-montserrat text-sm font-bold"
                style={{
                  width: "fit-content",
                  background: "rgba(255,255,255,0.12)",
                  border: "1px solid rgba(255,255,255,0.25)",
                  borderRadius: "6px",
                  padding: "4px 10px",
                  color: "#fff",
                }}
              >
                {metric}
              </span>

              <h3 className="section-h3__">{title}</h3>

              <p
                className="section-p__"
                style={{
                  color: "rgba(255,255,255,0.75)",
                  lineHeight: "1.7",
                }}
              >
                {desc}
              </p>
            </motion.div>
          ))}
        </div>
      </main>
    </section>
  );
};

export default Impact;
