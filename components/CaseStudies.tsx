const studies = [
  {
    label: "01 / CRM & member lifecycle",
    title: "Making every follow-up easier to own.",
    context: "BNI Alberta South · 18 chapters",
    challenge: "Visitor, member, and renewal activity involved different teams and tools. Keeping records and next steps clear was a recurring operational need.",
    contribution: "I supported CRM administration, helped organize pipeline stages and follow-up tasks, worked with forms and automations, and documented processes for regional and chapter teams.",
    result: "A more structured way to track who needed attention, what happened next, and where a handoff needed support.",
    tools: "GoHighLevel · Keap · Zapier · Alchemer",
  },
  {
    label: "02 / Regional operations",
    title: "Keeping a busy network coordinated.",
    context: "BNI Alberta South · remote operations",
    challenge: "Chapter meetings, events, access requests, reporting, and member communication had to work across a distributed leadership team.",
    contribution: "I coordinated calendars and event logistics, supported member inquiries and permissions, maintained reporting routines, and resolved technical and administrative requests.",
    result: "Repeatable workflows and clearer information for leaders and chapter teams carrying out day-to-day work.",
    tools: "Google Workspace · BNI Connect · Eventbrite · Zoom · QuickBooks",
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="section section_px editorial-section">
      <div className="section-heading-row">
        <div><p className="eyebrow">A closer look / selected work</p><h2 className="editorial-heading">What I actually <em>did.</em></h2></div>
        <p className="section-aside">The situation, my contribution, and what the work made possible.</p>
      </div>
      <div className="case-grid">
        {studies.map((study) => (
          <article className="case-card" key={study.label}>
            <p className="eyebrow">{study.label}</p>
            <h3>{study.title}</h3>
            <p className="case-context">{study.context}</p>
            <dl>
              <div><dt>The need</dt><dd>{study.challenge}</dd></div>
              <div><dt>My contribution</dt><dd>{study.contribution}</dd></div>
              <div><dt>What changed</dt><dd>{study.result}</dd></div>
            </dl>
            <p className="case-tools">{study.tools}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
