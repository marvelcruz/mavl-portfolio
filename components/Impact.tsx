const systems = [
  { index: "01", title: "Lead & visitor operations", description: "Handled the front of the lifecycle: visitor follow-up, chapter routing, application readiness, registration questions, and handoffs so each inquiry had a clear next step." },
  { index: "02", title: "Member lifecycle & CRM", description: "Supported applications, approvals, renewals, transfers, seat and classification changes, resignations, offboarding, CRM records, and member-data corrections across the regional network." },
  { index: "03", title: "Systems, access & enablement", description: "Administered BNI Connect and BNI+ permissions, leadership and committee roles, training assignments, dashboard access, social-platform access, and support escalations." },
  { index: "04", title: "Reporting, finance & reconciliation", description: "Managed Traffic Lights and scoreboard workflows, QuickBooks categorisation, payment reconciliation, bookkeeping support, and a bank-account reconciliation covering September 2024 to August 2025." },
  { index: "05", title: "Events, communications & process", description: "Coordinated Eventbrite and Zoom workflows, meeting and presentation updates, venue and gala support, digital communications, SOPs, onboarding guidance, and recurring operating procedures." },
];

const evidence = [
  { metric: "18", label: "chapters supported across regional operations" },
  { metric: "5+", label: "years of documented remote operations work" },
  { metric: "12 mo", label: "bank reconciliation period completed" },
  { metric: "E2E", label: "visitor-to-member lifecycle responsibility" },
];

export default function Impact() {
  return (
    <section id="impact" className="section section_px editorial-section impact-section">
      <div className="section-heading-row">
        <div><p className="eyebrow">01 / Revenue & operations</p><h2 className="editorial-heading">Creative mind.<br /><em>Operational muscle.</em></h2></div>
        <p className="section-aside">I work across the full journey: attracting interest, managing relationships, and making delivery reliable.</p>
      </div>
      <div className="impact-feature">
        <div className="impact-lead">
          <p className="eyebrow">Featured experience / BNI Alberta South</p>
          <h3>Making complexity feel manageable.</h3>
          <p>For more than five years, I have supported regional leaders and chapter teams remotely across lead and visitor operations, CRM and member lifecycle, payments, reporting, systems access, events, digital communications, finance operations, and process documentation.</p>
          <div className="impact-numbers">
            <div><strong>18</strong><span>chapters supported</span></div>
            <div><strong>5+</strong><span>years of remote work</span></div>
          </div>
        </div>
        <div className="impact-list">
          {systems.map((item) => <div className="impact-line" key={item.index}><span>{item.index}</span><div><h4>{item.title}</h4><p>{item.description}</p></div></div>)}
        </div>
      </div>

      <div className="evidence-strip" aria-label="Selected evidence-backed operating scope">
        {evidence.map((item) => (
          <div key={item.label}>
            <strong>{item.metric}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
      <p className="evidence-note">Scope statements are based on documented operating records across five years of BNI Admin work. They describe responsibilities completed, not unverified revenue or conversion impact.</p>
    </section>
  );
}
