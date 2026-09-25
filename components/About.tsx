import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="hero section section_px">
      <div className="hero-copy">
        <p className="eyebrow"><span className="status-dot" /> Portfolio / Marvellous Olabode</p>
        <h1 className="hero-heading">The experience.<br />The <em>engine.</em></h1>
        <p className="hero-lede">I build websites people want to explore and the CRM, automations, and operations that keep the journey moving.</p>
        <p className="hero-intro">
          I’m Marvellous Olabode. For more than five years, I’ve helped a regional
          network run its member and revenue workflows. I also design and build
          live digital experiences. Explore both sides of my work below.
        </p>
        <div className="hero-actions">
          <Link href="#case-studies" className="mustard-button">Explore the systems <span aria-hidden="true">→</span></Link>
          <Link href="#projects" className="outline-button">See live projects <span aria-hidden="true">→</span></Link>
          <Link href="/resume/Marvellous-Olabode-Resume.pdf" target="_blank" rel="noopener noreferrer" className="outline-button">View résumé <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="hero-proof" aria-label="Experience highlights">
          <div><strong>5+</strong><span>years working remotely</span></div>
          <div><strong>18</strong><span>BNI chapters supported</span></div>
          <div><strong>CRM</strong><span>pipelines and automation</span></div>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
        <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
        <div className="portrait-frame">
          <Image src="/images/profile1.png" alt="Marvellous Olabode" fill priority className="portrait-image" sizes="(max-width: 900px) 80vw, 40vw" />
        </div>
        <div className="candid-frame">
          <Image src="/images/marvellous-candid.jpg" alt="A candid portrait of Marvellous" fill className="candid-image" sizes="(max-width: 680px) 110px, 150px" />
          <span>Off the clock →</span>
        </div>
        <div className="hero-note hero-note-top">Design × systems<br /><strong>one curious mind.</strong></div>
        <div className="hero-note hero-note-bottom">Based in Nigeria<br /><strong>working across borders →</strong></div>
      </div>
    </section>
  );
}
