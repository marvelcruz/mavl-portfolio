import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="hero section section_px">
      <div className="hero-copy">
        <p className="eyebrow"><span className="status-dot" /> Portfolio / Marvellous Olabode</p>
        <h1 className="hero-heading">I make ambitious<br />ideas <em>work.</em></h1>
        <p className="hero-lede">Creative websites on the outside. Thoughtful systems behind the scenes.</p>
        <p className="hero-intro">
          I’m Marvellous, a digital builder and business operations specialist.
          I create memorable web experiences and help teams run smarter through
          CRM workflows, automation, reporting, and reliable remote support.
        </p>
        <div className="hero-actions">
          <Link href="#projects" className="mustard-button">Explore my work <span aria-hidden="true">↗</span></Link>
          <Link href="#contact" className="outline-button">Let’s talk <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="hero-proof" aria-label="Experience highlights">
          <div><strong>5+</strong><span>years working remotely</span></div>
          <div><strong>18</strong><span>BNI chapters supported</span></div>
          <div><strong>03</strong><span>live websites to explore</span></div>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
        <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
        <div className="portrait-frame">
          <Image src="/images/profile1.png" alt="Marvellous Olabode" fill priority className="portrait-image" sizes="(max-width: 900px) 80vw, 40vw" />
        </div>
        <div className="hero-note hero-note-top">Design × systems<br /><strong>one curious mind.</strong></div>
        <div className="hero-note hero-note-bottom">Based in Nigeria<br /><strong>working across borders ↗</strong></div>
      </div>
    </section>
  );
}
