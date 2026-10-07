import type { Metadata } from "next";
import Link from "next/link";
import CaseStudies from "@/components/CaseStudies";

export const metadata: Metadata = {
  title: "BNI Alberta South email marketing & operations case study | Marvellous Olabode",
  description: "Marvellous Olabode's work across email marketing, lifecycle strategy, CRM, member operations, revenue support, and the Regional OS project for BNI Alberta South.",
  alternates: { canonical: "/work/bni-operations" },
};

export default function BniOperationsPage() {
  return (
    <main className="bni-case-page">
      <div className="section section_px bni-case-intro">
        <Link href="/#case-studies" className="bni-case-back">← Back to portfolio</Link>
        <p className="eyebrow">Email marketing + operations case study / BNI Alberta South</p>
        <h1>Systems for a<br /><em>regional network.</em></h1>
        <p>My role connected email marketing strategy, campaign design, audience segmentation, CRM follow-up, member support, reporting, events, and finance coordination across 18 chapters. For 5+ years I have planned and written campaign flows, managed email calendars and targeted sends, tracked performance, and optimized campaigns alongside the wider regional operation.</p>
        <div className="bni-case-facts"><span><strong>18</strong> chapters supported</span><span><strong>5+</strong> years email + lifecycle work</span><span><strong>Email → CRM</strong> connected journeys</span></div>
      </div>
      <CaseStudies full />
      <div className="section section_px bni-case-end"><Link href="/#contact" className="mustard-button">Talk about email, CRM or growth →</Link></div>
    </main>
  );
}
