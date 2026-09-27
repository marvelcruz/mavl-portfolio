const tracks = [
  {
    number: "01",
    title: "Revenue & operations systems",
    metric: "18 chapters",
    detail:
      "CRM lifecycle work, reporting, member operations, event systems, finance follow-through, and the Regional OS product concept.",
    tags: ["GoHighLevel", "Keap", "Zapier", "QuickBooks"],
  },
  {
    number: "02",
    title: "Digital experiences",
    metric: "Live builds",
    detail:
      "Brand-led websites that connect discovery, navigation, conversion paths, and the operational journey behind the interface.",
    tags: ["Next.js", "React", "Vercel", "UX"],
  },
  {
    number: "03",
    title: "Healthcare design studies",
    metric: "20+ concepts",
    detail:
      "A growing series of independent healthcare and weight-management website concepts used to explore different hero systems, journeys, and visual directions.",
    tags: ["Voy", "Juniper UK", "Felix", "Ro Body"],
  },
  {
    number: "04",
    title: "Creative product experiments",
    metric: "AI + tools",
    detail:
      "Products such as StudioGuide AI extend the same systems thinking into guided learning and utility-focused product experiences.",
    tags: ["StudioGuide AI", "Product UX", "Prototyping"],
  },
];

export default function BodyOfWork() {
  return (
    <section id="range" className="section section_px editorial-section">
      <div className="section-heading-row">
        <div>
          <p className="eyebrow">03 / The range</p>
          <h2 className="editorial-heading">One practice.<br /><em>Multiple surfaces.</em></h2>
        </div>
        <p className="section-aside">
          I design the customer experience and build the systems behind it — from the first screen to the next operational action.
        </p>
      </div>

      <div className="range-grid">
        {tracks.map((track) => (
          <article className="range-card" key={track.number}>
            <div className="range-card-top">
              <span>{track.number}</span>
              <strong>{track.metric}</strong>
            </div>
            <h3>{track.title}</h3>
            <p>{track.detail}</p>
            <div className="range-tags" aria-label={`${track.title} examples`}>
              {track.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
          </article>
        ))}
      </div>

      <p className="concept-disclosure">
        Healthcare brand concepts shown or referenced in this portfolio are independent design studies unless explicitly identified as commissioned work. Brand names remain the property of their respective owners.
      </p>
    </section>
  );
}
