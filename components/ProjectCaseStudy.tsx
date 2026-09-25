import Image from "next/image";
import Link from "next/link";
import styles from "./ProjectCaseStudy.module.css";

type Project = {
  name: string;
  theme: "skye" | "fitlunge";
  category: string;
  lead: string;
  screenshot: string;
  screenshotAlt: string;
  live: string;
  explore: string;
  exploreLabel: string;
  role: string;
  experience: string;
  brief: string;
  choices: { number: string; title: string; detail: string }[];
  journeyTitle: string;
  journeyIntro: string;
  journey: { stage: string; title: string; detail: string }[];
  closing: string;
  next: { href: string; label: string };
};

export default function ProjectCaseStudy({ project }: { project: Project }) {
  return (
    <main className={`${styles.page} ${styles[project.theme]}`}>
      <div className={styles.wrap}>
        <Link href="/#projects" className={styles.back}>← All projects</Link>
        <header className={styles.hero}>
          <div>
            <p className={styles.eyebrow}>{project.category} / Live website concept</p>
            <h1>{project.name}<span>.</span></h1>
            <p className={styles.lead}>{project.lead}</p>
            <div className={styles.actions}>
              <Link href={project.live} target="_blank" rel="noopener noreferrer" className={styles.primary}>Explore live site ↗</Link>
              <Link href={project.explore} target="_blank" rel="noopener noreferrer" className={styles.secondary}>{project.exploreLabel} ↗</Link>
            </div>
          </div>
          <div className={styles.meta}>
            <div><span>My role</span><strong>{project.role}</strong></div>
            <div><span>Experience</span><strong>{project.experience}</strong></div>
            <div><span>Project type</span><strong>Independent website concept</strong></div>
          </div>
        </header>

        <figure className={styles.preview}>
          <Image src={project.screenshot} alt={project.screenshotAlt} fill priority sizes="(max-width: 800px) 100vw, 1200px" />
          <figcaption>Screenshot captured from the live site.</figcaption>
        </figure>

        <section className={styles.approach} aria-labelledby="approach-heading">
          <div className={styles.intro}>
            <p className={styles.eyebrow}>Design approach</p>
            <h2 id="approach-heading">{project.brief}</h2>
            <p>This is a live concept built around the brand and its public-facing offer. The case study describes the design and frontend experience, without implying a commissioned engagement or measured customer results.</p>
          </div>
          <div className={styles.choices}>
            {project.choices.map((choice) => (
              <article key={choice.number}>
                <span>{choice.number}</span>
                <div><h3>{choice.title}</h3><p>{choice.detail}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.journey} aria-labelledby="journey-heading">
          <p className={styles.eyebrow}>Experience map</p>
          <h2 id="journey-heading">{project.journeyTitle}</h2>
          <p className={styles.journeyIntro}>{project.journeyIntro}</p>
          <div className={styles.stages}>
            {project.journey.map((item) => (
              <article key={item.stage}>
                <span>{item.stage}</span>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
          <Link href={project.explore} target="_blank" rel="noopener noreferrer" className={styles.primary}>{project.exploreLabel} ↗</Link>
        </section>

        <footer className={styles.end}>
          <div><p className={styles.eyebrow}>What this demonstrates</p><h2>{project.closing}</h2><p>The live site shows the visitor-facing paths described here. Portal links are entry points; this case study does not claim user adoption, clinical outcomes, bookings, or revenue impact.</p></div>
          <Link href={project.next.href} className={styles.next}>Next project: {project.next.label} →</Link>
        </footer>
      </div>
    </main>
  );
}
