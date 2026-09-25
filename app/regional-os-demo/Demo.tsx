"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./demo.module.css";

type Stage = "report" | "action" | "finance";
type Classification = "review" | "renewal";

const steps: { id: Stage; number: string; title: string; caption: string }[] = [
  { id: "report", number: "01", title: "Verify the evidence", caption: "Weekly report cycle" },
  { id: "action", number: "02", title: "Give the work an owner", caption: "Follow-up action" },
  { id: "finance", number: "03", title: "Resolve an exception", caption: "Separate finance review" },
];

export default function Demo() {
  const [stage, setStage] = useState<Stage>("report");
  const [validated, setValidated] = useState(false);
  const [classification, setClassification] = useState<Classification>("review");

  const reset = () => {
    setStage("report");
    setValidated(false);
    setClassification("review");
  };

  return (
    <main className={styles.page}>
      <div className={styles.wrap}>
        <div className={styles.topline}>
          <Link href="/#case-studies" className={styles.back}>← Back to case study</Link>
          <span>MARVELLOUS OLABODE / SELECTED SYSTEMS WORK</span>
        </div>

        <header className={styles.intro}>
          <p className={styles.eyebrow}>REGIONAL OS / INTERACTIVE WALKTHROUGH</p>
          <h1>One system.<br /><em>Clearer next steps.</em></h1>
          <p>See how a weekly evidence cycle becomes an owned follow-up action, then explore a separate finance exception review. This public walkthrough uses fictional data and does not connect to BNI systems.</p>
        </header>

        <div className={styles.demoShell}>
          <aside className={styles.rail} aria-label="Walkthrough stages">
            <div className={styles.railBrand}><span className={styles.brandMark}>R</span><div><strong>Regional OS</strong><small>Sample workspace</small></div></div>
            <p className={styles.railLabel}>THE WALKTHROUGH</p>
            <nav>
              {steps.map((step) => (
                <button key={step.id} type="button" onClick={() => setStage(step.id)} className={`${styles.stageButton} ${stage === step.id ? styles.active : ""}`} aria-current={stage === step.id ? "step" : undefined}>
                  <span>{step.number}</span><div><strong>{step.title}</strong><small>{step.caption}</small></div>
                </button>
              ))}
            </nav>
            <div className={styles.railFoot}>EXAMPLE DATA ONLY<br />NO MEMBER RECORDS</div>
          </aside>

          <section className={styles.workspace} aria-live="polite">
            <div className={styles.workspaceTop}><span>REGIONAL OPERATIONS <span className={styles.slash}>/</span> {steps.find((step) => step.id === stage)?.caption.toUpperCase()}</span><span className={styles.sampleBadge}>SAMPLE SCENARIO</span></div>

            {stage === "report" && (
              <div className={styles.scene}>
                <div className={styles.sceneHeading}><p>STEP 01 / REPORT EVIDENCE</p><h2>Start with a trusted week.</h2><span>Regional staff upload verified source reports. The system tracks the expected period and required evidence before actions are reviewed.</span></div>
                <div className={styles.period}><span>REPORTING PERIOD</span><strong>Sample week · Monday to Sunday</strong><span className={validated ? styles.good : styles.neutral}>{validated ? "Validated" : "Awaiting one report"}</span></div>
                <div className={styles.reportGrid}>
                  <div><span className={styles.fileIcon}>↗</span><strong>Membership report</strong><small>Sample export · received</small><span className={styles.good}>Validated</span></div>
                  <div><span className={styles.fileIcon}>↗</span><strong>Visitor report</strong><small>Sample export · received</small><span className={styles.good}>Validated</span></div>
                  <div><span className={styles.fileIcon}>＋</span><strong>Weekly activity report</strong><small>{validated ? "Sample export · received" : "Required for this example"}</small><span className={validated ? styles.good : styles.neutral}>{validated ? "Validated" : "Missing"}</span></div>
                </div>
                <div className={styles.actionBar}><p>{validated ? "Sample report checked. This example is ready to show an action." : "One required report is missing. The action view will show the sample result after validation."}</p><button type="button" onClick={() => validated ? setStage("action") : setValidated(true)}>{validated ? "See generated action →" : "Validate sample report →"}</button></div>
              </div>
            )}

            {stage === "action" && (
              <div className={styles.scene}>
                <div className={styles.sceneHeading}><p>STEP 02 / FOLLOW-UP ACTION</p><h2>Turn evidence into ownership.</h2><span>The code consolidates report findings into actions with evidence references and task links. This fictional item shows the decision a staff member would see.</span></div>
                <div className={styles.actionCard}><div className={styles.cardHeader}><span>MEMBER SUPPORT / SAMPLE ACTION</span><span className={styles.neutral}>Needs review</span></div><h3>Check a renewal follow-up</h3><p>A sample record appears in the current reporting cycle with a renewal question requiring a regional staff review.</p><dl><div><dt>Owner</dt><dd>Regional operations team</dd></div><div><dt>Evidence</dt><dd>Sample weekly report · current cycle</dd></div><div><dt>Next step</dt><dd>Review status and record the outcome</dd></div></dl></div>
                <div className={styles.actionBar}><p>The task gives a person, source, and next step to a finding. The finance example is a separate workflow.</p><button type="button" onClick={() => setStage("finance")}>Explore finance review →</button></div>
              </div>
            )}

            {stage === "finance" && (
              <div className={styles.scene}>
                <div className={styles.sceneHeading}><p>STEP 03 / FINANCE EXCEPTION</p><h2>Keep uncertain payments human-reviewed.</h2><span>The finance code can flag an unclear transaction or receipt match for review. A person confirms the classification before it counts as membership revenue.</span></div>
                <div className={styles.financeCard}><div className={styles.cardHeader}><span>SAMPLE TRANSACTION / NO LIVE CONNECTION</span><span className={classification === "renewal" ? styles.good : styles.neutral}>{classification === "renewal" ? "Human confirmed" : "Review required"}</span></div><div className={styles.financeAmount}>CA$420.00 <small>fictional amount</small></div><p>Purpose is unclear in the sample description. This item stays in a review queue until someone checks the source and confirms the correct category.</p><div className={styles.choice}><button type="button" className={classification === "renewal" ? styles.selected : ""} onClick={() => setClassification("renewal")}>Confirm renewal in sample</button><button type="button" className={classification === "review" ? styles.selected : ""} onClick={() => setClassification("review")}>Keep in review</button></div></div>
                <div className={styles.actionBar}><p>{classification === "renewal" ? "Sample classification confirmed. The live system would record a decision and update the review queue." : "The sample remains outside confirmed membership revenue until a reviewer resolves it."}</p><button type="button" onClick={reset}>Restart walkthrough ↺</button></div>
              </div>
            )}
          </section>
        </div>

        <footer className={styles.explanation}><strong>What this demonstrates</strong><p>The private project code includes role-based views, weekly report readiness, consolidated actions, and a finance exception flow. This is a simplified, fictional simulation for portfolio review. It is not a live login, a production screenshot, or evidence of a measured business result.</p><Link href="/#contact">Discuss a similar system ↗</Link></footer>
      </div>
    </main>
  );
}
