"use client";

import { motion } from "framer-motion";
import { motionValues } from "@/lib/utils";

const workPlans = [
  {
    title: "Audit",
    desc: "Review the current tools, workflows, handoffs, bottlenecks, and repeated manual tasks.",
  },
  {
    title: "Organize",
    desc: "Create clear structures for documentation, folders, trackers, access, calendars, reporting, and ownership.",
  },
  {
    title: "Automate",
    desc: "Use CRM workflows, forms, reminders, integrations, and templates to reduce manual coordination.",
  },
  {
    title: "Improve",
    desc: "Track what matters, review performance, clean up weak points, and make the system easier to maintain.",
  },
];

const WorkPlans = () => {
  return (
    <section id="work-plans" className="section section_px section-gap">
      <main className="flex-center flex-col gap-12">
        <motion.div {...motionValues} className="flex-center flex-col gap-4">
          <h2 className="section-h2">How I Improve Systems</h2>

          <h3 className="section-h3 max-w-3xl text-center">
            My process is simple: audit the system, organize the work, automate
            what repeats, and improve what matters.
          </h3>
        </motion.div>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
          {workPlans.map(({ title, desc }, index) => (
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
                {String(index + 1).padStart(2, "0")}
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

export default WorkPlans;