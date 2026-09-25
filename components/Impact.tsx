const systems = [
  { index: "01", title: "CRM & member journeys", description: "Visitor, member, and renewal workflows across GoHighLevel, Keap, BNI Connect, and supporting tools." },
  { index: "02", title: "Operational clarity", description: "Reporting sheets, permissions, documentation, and recurring processes that make distributed teams easier to run." },
  { index: "03", title: "Events & communication", description: "Registration flows, meetings, training, member communication, and follow-up across a busy regional network." },
];

export default function Impact() {
  return (
    <section id="impact" className="section section_px editorial-section impact-section">
      <div className="section-heading-row">
        <div><p className="eyebrow">02 / The work behind the work</p><h2 className="editorial-heading">Creative mind.<br /><em>Operational muscle.</em></h2></div>
        <p className="section-aside">A website can make a strong first impression. The systems behind a business make that impression last.</p>
      </div>
      <div className="impact-feature">
        <div className="impact-lead">
          <p className="eyebrow">Featured experience / BNI Alberta South</p>
          <h3>Making complexity feel manageable.</h3>
          <p>For more than five years, I have supported regional leaders and chapter teams remotely across CRM administration, member services, events, reporting, digital communication, and day-to-day operations.</p>
          <div className="impact-numbers"><div><strong>18</strong><span>chapters supported</span></div><div><strong>5+</strong><span>years of remote work</span></div></div>
        </div>
        <div className="impact-list">
          {systems.map((item) => <div className="impact-line" key={item.index}><span>{item.index}</span><div><h4>{item.title}</h4><p>{item.description}</p></div></div>)}
        </div>
      </div>
    </section>
  );
}
