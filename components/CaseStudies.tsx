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

const regionalOsFeatures = [
  { number: "01", title: "Role-based workspaces", detail: "Separate routes and protected views for regional staff, chapter leaders, and members." },
  { number: "02", title: "Weekly evidence cycle", detail: "Report slots track the reporting period, required uploads, validation state, and missing evidence." },
  { number: "03", title: "Actions from reports", detail: "The report service consolidates findings into follow-up actions with supporting evidence and task links." },
  { number: "04", title: "Finance exception review", detail: "QuickBooks transaction classification and receipt matching surface uncertain items for human review." },
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
      <div className="workflow-example" aria-labelledby="regional-os-heading">
        <div className="workflow-intro">
          <div>
            <p className="eyebrow">Built project / Regional OS</p>
            <h3 id="regional-os-heading">An operating system for a regional network.</h3>
          </div>
          <p>I built a multi-workspace application to connect report evidence, operational tasks, member and chapter views, and finance review in one system.</p>
        </div>
        <ol className="workflow-steps">
          {regionalOsFeatures.map((step) => (
            <li key={step.number}>
              <span className="workflow-number">{step.number}</span>
              <h4>{step.title}</h4>
              <p>{step.detail}</p>
            </li>
          ))}
        </ol>
        <p className="workflow-note">Feature descriptions verified against my private frontend and backend repositories. This is a code-backed project summary; deployment, user adoption, and business impact are not claimed here.</p>
      </div>
      <div className="revenue-example" aria-labelledby="revenue-heading">
        <div className="revenue-heading">
          <p className="eyebrow">A deeper look / revenue operations</p>
          <h3 id="revenue-heading">The path from interest to membership revenue.</h3>
          <p>Revenue depended on several teams and systems working together. My contribution was to keep the CRM, follow-up, administrative handoffs, and payment support connected so opportunities and renewals did not lose their next step.</p>
        </div>
        <div className="revenue-map">
          <div className="revenue-entry">
            <span>01 / Intake and routing</span>
            <h4>Make the opportunity visible</h4>
            <p>Bring visitor inquiries and member records into a usable pipeline; check chapter, status, and ownership before follow-up.</p>
            <small>My work: forms, CRM records, pipeline stages</small>
          </div>
          <div className="revenue-branches" aria-label="Two revenue paths">
            <div>
              <span>02A / New membership</span>
              <h4>Support the conversion path</h4>
              <p>Track visitor follow-up and application status, flag unanswered requests, and hand the right action to the chapter or regional team.</p>
              <small>My work: follow-up tasks, status checks, handoffs</small>
            </div>
            <div>
              <span>02B / Existing membership</span>
              <h4>Protect the renewal path</h4>
              <p>Keep renewal records and open questions visible so members receive timely support before administrative issues stall progress.</p>
              <small>My work: renewal pipeline, inquiries, access support</small>
            </div>
          </div>
          <div className="revenue-close">
            <span>03 / Close the loop</span>
            <h4>Reconcile, resolve, report</h4>
            <p>Support payment and QuickBooks reconciliation, investigate exceptions with the responsible team, and maintain recurring reporting for leadership.</p>
            <small>My work: finance support, exception follow-through, reporting</small>
          </div>
        </div>
        <div className="revenue-outcome">
          <strong>How this supported revenue</strong>
          <p>A visible pipeline and clear handoffs helped teams pursue new memberships, support renewals, and resolve payment questions. The example shows my operational contribution; it does not attribute a revenue figure or conversion increase to my work.</p>
        </div>
        <p className="revenue-disclosure">Reconstructed from my BNI Alberta South CRM and operations responsibilities. The paths summarize the work; they are not an export of the organization’s production process or member data.</p>
      </div>
    </section>
  );
}
