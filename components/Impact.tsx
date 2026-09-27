const systems = [
  { index: "01", title: "Revenue operations & CRM", description: "Maintained visitor, member, renewal, and payment workflows; consolidated archived and current Keap CRM records into a usable contact dataset for bulk communication." },
  { index: "02", title: "Reporting & operating rhythm", description: "Managed recurring regional reporting, including Traffic Lights communication across all 18 chapters and scoreboard reorganisation for leadership visibility." },
  { index: "03", title: "Finance & reconciliation", description: "Handled QuickBooks categorisation and reconciliation, membership payment reconciliation, and bookkeeping support, including a bank-account reconciliation spanning September 2024 to August 2025." },
  { index: "04", title: "Access, systems & escalation", description: "Administered BNI Connect permissions, chapter social-media access, leadership-role changes, and support escalations with documented screenshots and follow-through." },
  { index: "05", title: "SOPs & enablement", description: "Built and maintained repeatable operating guidance, including onboarding requirements for chapter leadership, training, confidentiality agreements, and system access." },
];

const evidence = [
  { metric: "18", label: "chapters in recurring reporting scope" },
  { metric: "9", label: "chapters updated for one presentation cycle" },
  { metric: "12 mo", label: "bank reconciliation period completed" },
  { metric: "5+", label: "years supporting remote operations" },
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
          <p>For more than five years, I have supported regional leaders and chapter teams remotely across CRM and revenue workflows, automation, member services, events, reporting, digital communication, finance operations, and daily systems administration.</p>
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
      <p className="evidence-note">Scope figures are drawn from documented operating records and work reports. They describe responsibilities completed, not unverified revenue or conversion impact.</p>
    </section>
  );
}
