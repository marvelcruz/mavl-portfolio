"use client";

import { motion } from "framer-motion";
import { motionValues } from "@/lib/utils";

const workItems = [
  {
    title: "Diagnose the System",
    desc: "I start by understanding the current workflow: tools, people, handoffs, bottlenecks, repeated tasks, missed follow-ups, and where work is getting stuck.",
  },
  {
    title: "Organize the Process",
    desc: "I turn scattered work into clear operating structures: shared folders, trackers, documentation, access rules, calendars, reporting sheets, and ownership paths.",
  },
  {
    title: "Automate the Repetitive Work",
    desc: "I use CRM tools, forms, reminders, workflows, and integrations to reduce manual coordination and make follow-up more reliable.",
  },
  {
    title: "Track and Improve",
    desc: "I help teams monitor what matters: leads, events, registrations, tasks, renewals, content, reports, and recurring operational activity.",
  },
];

const Work = () => {
  return (
    <section id="work" className="section section_px section-gap">
      <main className="flex-center flex-col gap-12">
        <motion.div {...motionValues} className="flex-center flex-col gap-4">
          <h2 className="section-h2">How I Work</h2>

          <h3 className="section-h3 max-w-3xl text-center">
            My approach is simple: understand the system, organize the workflow,
            automate what repeats, and track what matters.
          </h3>
        </motion.div>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
          {workItems.map(({ title, desc }, index) => (
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

export default Work;