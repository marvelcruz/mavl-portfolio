import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const live = "https://cosmo-bar-frontend.vercel.app/";

export const metadata: Metadata = {
  metadataBase: new URL("https://mavl-portfolio-wg6f.vercel.app"),
  title: "COSMO Bar case study | Marvellous Olabode",
  description: "How Marvellous Olabode designed and built a multi-page hospitality website concept for COSMO Bar in Kano, with an interactive occasion-to-menu pairing journey.",
  openGraph: {
    title: "COSMO Bar — a hospitality website concept",
    description: "A closer look at the design, build, and interactive guest journey by Marvellous Olabode.",
    images: ["/images/cosmo-case-study.jpg"],
  },
};

const decisions = [
  {
    number: "01",
    title: "Lead with the feeling",
    detail: "A large visual introduction and COSMO’s pink identity establish the atmosphere before asking visitors to navigate a menu.",
  },
  {
    number: "02",
    title: "Make the offer easy to explore",
    detail: "Dedicated Food, Ice Cream, Drinks, Events, Bread, Ambience, and Visit pages turn a broad venue experience into clear paths.",
  },
  {
    number: "03",
    title: "Turn browsing into an enquiry",
    detail: "The occasion builder responds to choices about company, appetite, mood, and group size with a food, drink, and sweet pairing, then carries the selection into a table request.",
  },
];

export default function CosmoCaseStudy() {
  return (
    <main className={styles.page}>
      <div className={styles.wrap}>
        <Link className={styles.back} href="/#projects">← All projects</Link>
        <header className={styles.hero}>
          <div>
            <p className={styles.eyebrow}>Selected project / Hospitality website concept</p>
            <h1>COSMO<span>.</span></h1>
            <p className={styles.lede}>A venue with food, mocktails, ice cream, events, and a strong point of view needed more than a menu page. I built a digital experience that lets people feel the place, explore their options, and plan a visit.</p>
            <div className={styles.actions}>
              <Link href={live} target="_blank" rel="noopener noreferrer" className={styles.primary}>Explore live site ↗</Link>
              <Link href={`${live}#build-your-cosmo`} target="_blank" rel="noopener noreferrer" className={styles.secondary}>Try the pairing tool ↗</Link>
            </div>
          </div>
          <div className={styles.meta}>
            <div><span>My role</span><strong>Concept, design & frontend build</strong></div>
            <div><span>Experience</span><strong>Multi-page site + interactive pairing</strong></div>
            <div><span>Location represented</span><strong>Kano, Nigeria</strong></div>
          </div>
        </header>

        <figure className={styles.preview}>
          <Image src="/images/cosmo-case-study.jpg" alt="Screenshot of the live COSMO homepage with its pink branding, milkshake visual, navigation, and table request" fill priority sizes="(max-width: 800px) 100vw, 1100px" />
          <figcaption>Captured from the live concept site. The hero visual changes as visitors explore.</figcaption>
        </figure>

        <section className={styles.story} aria-labelledby="approach-heading">
          <div className={styles.storyIntro}>
            <p className={styles.eyebrow}>The brief I set</p>
            <h2 id="approach-heading">Make a visit feel possible before it happens.</h2>
            <p>COSMO has several reasons to visit. The design brings them into one journey: atmosphere first, then things to eat and do, then a practical way to enquire. The site is a live concept I created around the venue’s public-facing identity; it is not presented as a commissioned result or an official booking system.</p>
          </div>
          <div className={styles.decisions}>
            {decisions.map((item) => (
              <article key={item.number}>
                <span>{item.number}</span>
                <div><h3>{item.title}</h3><p>{item.detail}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.interaction} aria-labelledby="interaction-heading">
          <div>
            <p className={styles.eyebrow}>Interaction / Build your COSMO</p>
            <h2 id="interaction-heading">A menu that starts with the occasion.</h2>
            <p>Choose “Girls’ night” and the live tool changes its suggested food, drink, and sweet finish. The request link carries the selected occasion, group size, and mood into the enquiry journey. Availability and price still need confirmation by the venue.</p>
            <Link href={`${live}#build-your-cosmo`} target="_blank" rel="noopener noreferrer" className={styles.darkLink}>Try it on the live site ↗</Link>
          </div>
          <div className={styles.example} aria-label="Example of a COSMO pairing">
            <small>EXAMPLE SELECTION</small>
            <strong>Girls’ night</strong>
            <div><span>Eat</span><b>Chicken & Waffles</b></div>
            <div><span>Drink</span><b>Fresh & Fruity Mocktails</b></div>
            <div><span>Finish</span><b>Gourmet Soft Serve</b></div>
            <p>Example observed on the live site; the actual recommendation responds to visitor choices.</p>
          </div>
        </section>

        <footer className={styles.end}>
          <div><p className={styles.eyebrow}>What this demonstrates</p><h2>Brand expression and a useful customer path.</h2><p>This project shows visual design, multi-page information architecture, responsive frontend work, and an interactive enquiry flow. It does not claim traffic, bookings, or revenue outcomes.</p></div>
          <Link href={live} target="_blank" rel="noopener noreferrer" className={styles.primary}>Visit COSMO ↗</Link>
        </footer>
      </div>
    </main>
  );
}
