import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resume | Marvellous Olabode",
  description: "Marvellous Olabode - Email Marketing, CRM Strategy, Revenue Operations and Digital Systems.",
};

const bullets = [
  "Planned, wrote, and designed branded email campaigns across welcome, promotional, newsletter, member, and renewal communications for BNI Alberta South.",
  "Segmented email lists for targeted sends, scheduled campaigns, managed the email calendar, and coordinated messaging with CRM stages, events, and regional priorities.",
  "Tracked open rates, click rates, and conversions, then optimized subject lines, content, calls to action, timing, and future sends based on performance data.",
  "Supported visitor, member, and renewal workflows across 18 chapters, maintaining CRM records, follow-up processes, forms, and operational handoffs.",
  "Supported the Keap to GoHighLevel transition and member-facing CRM workflows using Zapier and Alchemer.",
  "Reconciled contact exports across Keap and HubSpot, checking matched records, source-only records, duplicates, and missing keys before producing a unified working list.",
];

export default function ResumePage() {
  return (
    <main className="bni-case-page">
      <div className="section section_px bni-case-intro">
        <Link href="/" className="bni-case-back">← Back to portfolio</Link>
        <p className="eyebrow">Résumé / Marvellous Olabode</p>
        <h1>Email marketing.<br /><em>CRM. Growth systems.</em></h1>
        <p>Email marketing, CRM, and digital systems specialist with 5+ years of remote experience supporting BNI Alberta South across 18 chapters. I plan, write, design, schedule, and optimize lifecycle campaigns across welcome, promotional, newsletter, member, and renewal communications, alongside CRM administration, segmentation, automation, reporting, and digital experience design.</p>
        <div className="bni-case-facts">
          <span><strong>5+</strong> years email + lifecycle work</span>
          <span><strong>18</strong> chapters supported</span>
          <span><strong>Email → CRM</strong> connected journeys</span>
        </div>
      </div>

      <section className="section section_px editorial-section">
        <div className="section-heading-row">
          <div><p className="eyebrow">Professional experience</p><h2 className="editorial-heading">BNI Alberta <em>South.</em></h2></div>
          <p className="section-aside">Executive Administrative Assistant / Digital Operations Support · Remote, Calgary, Canada · Nov 2021-present</p>
        </div>
        <div className="case-grid">
          <article className="case-card">
            <p className="eyebrow">Email marketing & lifecycle</p>
            <h3>Campaign strategy from audience to optimization.</h3>
            <ul>{bullets.slice(0,3).map((item) => <li key={item}>{item}</li>)}</ul>
            <p className="case-tools">Campaign strategy · Email design · Segmentation · Email calendars · Performance optimization</p>
          </article>
          <article className="case-card">
            <p className="eyebrow">CRM & operations</p>
            <h3>The systems behind the customer journey.</h3>
            <ul>{bullets.slice(3).map((item) => <li key={item}>{item}</li>)}</ul>
            <p className="case-tools">GoHighLevel · Keap · HubSpot · Salesforce · Zapier · Alchemer · BNI Connect</p>
          </article>
        </div>
      </section>

      <section className="section section_px editorial-section">
        <div className="section-heading-row">
          <div><p className="eyebrow">Selected work</p><h2 className="editorial-heading">Marketing + <em>systems.</em></h2></div>
        </div>
        <div className="case-grid">
          <article className="case-card"><h3>Email marketing & lifecycle</h3><p>Built repeatable campaign processes connecting audience segmentation, branded templates, campaign flows, scheduling, CRM status, performance tracking, and optimization.</p></article>
          <article className="case-card"><h3>Member lifecycle & CRM</h3><p>Organized pipeline stages, follow-up tasks, forms, automation, and team handoffs for visitor, member, and renewal activity.</p></article>
          <article className="case-card"><h3>Digital experience</h3><p>Designed and built live website concepts across hospitality, healthcare, and wellness, including COSMO Bar, Skye Medical Aesthetics, and FitLunge.</p></article>
        </div>
      </section>

      <section className="section section_px bni-case-end">
        <p><strong>Tools:</strong> GoHighLevel, Keap, HubSpot, Salesforce, Zapier, Alchemer, BNI Connect, Google Workspace, Asana, ClickUp, Eventbrite, QuickBooks Online, React, Next.js, WordPress, Vercel, SQL, Tableau.</p>
        <p><strong>Education:</strong> University of Ilorin · Bachelor of Science (B.Sc.) · 2023</p>
        <Link href="/#contact" className="mustard-button">Get in touch →</Link>
      </section>
    </main>
  );
}
