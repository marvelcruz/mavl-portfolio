import type { Metadata } from "next";
import Link from "next/link";
import CaseStudies from "@/components/CaseStudies";

export const metadata: Metadata = {
  title: "BNI Alberta South operations case study | Marvellous Olabode",
  description: "Marvellous Olabode's work across CRM, member lifecycle, regional operations, revenue support, and the Regional OS project for BNI Alberta South.",
  alternates: { canonical: "/work/bni-operations" },
};

export default function BniOperationsPage() {
  return (
    <main className="bni-case-page">
      <div className="section section_px bni-case-intro">
        <Link href="/#case-studies" className="bni-case-back">← Back to portfolio</Link>
        <p className="eyebrow">Operations case study / BNI Alberta South</p>
        <h1>Systems for a<br /><em>regional network.</em></h1>
        <p>My role connected CRM follow-up, member support, reporting, events, and finance coordination across 18 chapters. Below is the work I can describe and the Regional OS system I built from that operational context.</p>
        <div className="bni-case-facts"><span><strong>18</strong> chapters supported</span><span><strong>5+</strong> years of remote work</span><span><strong>CRM → operations</strong> connected handoffs</span></div>
      </div>
      <CaseStudies full />
      <div className="section section_px bni-case-end"><Link href="/#contact" className="mustard-button">Talk about an operations project →</Link></div>
    </main>
  );
}
