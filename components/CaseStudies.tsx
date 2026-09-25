const studies = [
  {
    label: "01 / CRM & member lifecycle",
    title: "Making every follow-up easier to own.",
    context: "BNI Alberta South · 18 chapters",
    challenge: "Visitor inquiries, member updates, and renewals needed clear ownership across chapter and regional teams.",
    contribution: "I supported the move from Keap to GoHighLevel, organized CRM pipeline stages and follow-up tasks, and worked with forms, Zapier, and Alchemer to support the member lifecycle. I also documented handoffs for the teams using those systems.",
    result: "The work gave teams a clearer record of each person’s stage, the next follow-up, and who was responsible for it.",
    tools: "GoHighLevel · Keap · Zapier · Alchemer",
  },
  {
    label: "02 / Regional operations",
    title: "Keeping a busy network coordinated.",
    context: "BNI Alberta South · remote operations",
    challenge: "A distributed leadership team needed reliable meeting logistics, member support, access management, and recurring reports across 18 chapters.",
    contribution: "I coordinated registrations, calendars, Zoom and Eventbrite logistics, and post-event communication. I handled member inquiries and permissions, maintained reporting routines, and supported QuickBooks reconciliation work.",
    result: "Leaders and chapter teams had consistent coordination and an identified point of support for events, access, and reporting.",
    tools: "Google Workspace · BNI Connect · Eventbrite · Zoom · QuickBooks",
  },
];

const workflow = [
  { number: "01", stage: "Capture", detail: "A visitor or member submits an inquiry or form. The record enters the CRM for review.", role: "Forms & CRM setup" },
  { number: "02", stage: "Qualify", detail: "Check the record, its chapter and lifecycle stage, and the information needed for a useful response.", role: "Record hygiene & stages" },
  { number: "03", stage: "Hand off", detail: "Make the next action and owner visible so a regional or chapter team member can follow up.", role: "Tasks & handoff notes" },
  { number: "04", stage: "Review", detail: "Use the pipeline and recurring reports to spot open items, renewals, or requests needing attention.", role: "Reporting & support" },
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
      <div className="workflow-example" aria-labelledby="workflow-heading">
        <div className="workflow-intro">
          <div>
            <p className="eyebrow">Inside the work / CRM handoff</p>
            <h3 id="workflow-heading">From an inquiry to a clear next step.</h3>
          </div>
          <p>One practical example of the kind of visitor and member lifecycle work I support: capture the request, clarify its status, assign the next action, and keep it visible.</p>
        </div>
        <ol className="workflow-steps">
          {workflow.map((step) => (
            <li key={step.number}>
              <span className="workflow-number">{step.number}</span>
              <h4>{step.stage}</h4>
              <p>{step.detail}</p>
              <span className="workflow-role">My focus: {step.role}</span>
            </li>
          ))}
        </ol>
        <p className="workflow-note">Reconstructed example based on my CRM and member operations work. It is an illustration of the approach, not a screenshot of BNI’s systems or a claim about a specific measured result.</p>
      </div>
    </section>
  );
}
