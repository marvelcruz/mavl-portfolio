import Link from "next/link";
import Image from "next/image";
import { projects } from "@/constants";

const projectDetails = [
  { number: "01", category: "Hospitality / Live concept", tone: "cosmo", image: "/images/cosmo-case-study.jpg", detail: "A venue story, a multi-page menu, and an occasion-based pairing tool." },
  { number: "02", category: "Medical aesthetics / Live concept", tone: "skye", image: "/images/skye-case-study.jpg", detail: "Treatment discovery, a short finder, and a path to consultation." },
  { number: "03", category: "Wellness / Live concept", tone: "fitlunge", image: "/images/fitlunge-case-study.jpg", detail: "A visual introduction followed by a program and application journey." },
];

export default function Projects() {
  return (
    <section id="projects" className="section section_px editorial-section">
      <div className="section-heading-row">
        <div><p className="eyebrow">02 / Things you can explore</p><h2 className="editorial-heading">Work that <em>speaks.</em></h2></div>
        <p className="section-aside">Explore the live builds or read how each visitor journey was designed.</p>
      </div>
      <div className="featured-work">
        {projects.projects.map((project, index) => {
          const detail = projectDetails[index];
          return (
            <article className={`featured-card featured-${detail.tone}`} key={project.id}>
              <Link href={project.url} target="_blank" rel="noopener noreferrer" className="featured-preview" aria-label={`Explore ${project.title} live website`}>
                <Image src={detail.image} alt={`Preview of the ${project.title} live website`} fill sizes="(max-width: 680px) 100vw, (max-width: 1100px) 50vw, 1100px" className="featured-preview-image" />
                <div className="preview-browser" aria-hidden="true"><span /><span /><span /><small>{new URL(project.url).hostname}</small></div>
                <span className="preview-foot">{detail.category}<span aria-hidden="true">↗</span></span>
              </Link>
              <div className="featured-caption">
                <div className="featured-number">{detail.number}</div>
                <div><p className="eyebrow">{detail.category}</p><h3>{project.title}</h3><p>{detail.detail}</p><Link href={`/work/${detail.tone}`} className="project-case-link">Read the case study ↗</Link></div>
                <Link href={project.url} target="_blank" rel="noopener noreferrer" className="project-open" aria-label={`Visit ${project.title} live website`}>→</Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
