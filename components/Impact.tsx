const systems = [
  { index: "01", title: "Revenue operations & CRM", description: "Built and maintained lead, visitor, member, and renewal pipelines, including a Keap to GoHighLevel migration and follow-up workflows." },
  { index: "02", title: "Automation & reporting", description: "Connected forms, CRM actions, dashboards, and recurring reports to reduce manual handoffs and give leaders clearer visibility." },
  { index: "03", title: "Service delivery & support", description: "Coordinated inquiries, access requests, events, training, finance support, and documented processes across a busy regional network." },
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
          <p>For more than five years, I have supported regional leaders and chapter teams remotely across CRM and revenue workflows, automation, member services, events, reporting, digital communication, and daily operations.</p>
          <div className="impact-numbers"><div><strong>18</strong><span>chapters supported</span></div><div><strong>5+</strong><span>years of remote work</span></div></div>
        </div>
        <div className="impact-list">
          {systems.map((item) => <div className="impact-line" key={item.index}><span>{item.index}</span><div><h4>{item.title}</h4><p>{item.description}</p></div></div>)}
        </div>
      </div>
    </section>
  );
}
