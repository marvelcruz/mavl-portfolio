import type { Metadata } from "next";
import ProjectCaseStudy from "@/components/ProjectCaseStudy";

export const metadata: Metadata = {
  title: "Skye Medical Aesthetics case study | Marvellous Olabode",
  description: "A live clinic website concept by Marvellous Olabode, connecting treatment discovery, a finder, consultation entry, and separate client and staff access.",
};

export default function SkyeCaseStudy() {
  return <ProjectCaseStudy project={{
    name: "Skye",
    theme: "skye",
    category: "Medical aesthetics",
    lead: "A visual clinic experience that helps a visitor move from curiosity to a more informed consultation, while giving clients and staff distinct entry points.",
    screenshot: "/images/skye-case-study.jpg",
    screenshotAlt: "Screenshot of the live Skye website showing a cinematic beauty and science introduction",
    live: "https://skye-weight-loss-clinic-frontend.vercel.app/",
    explore: "https://skye-weight-loss-clinic-frontend.vercel.app/treatments#treatment-finder",
    exploreLabel: "Explore treatment finder",
    role: "Concept, experience design & frontend",
    experience: "Treatment discovery + consultation path",
    brief: "Make a complex treatment menu approachable.",
    context: "A visitor may know their concern without knowing which service to look for. The interface needs to help them explore the menu, understand options, and reach the clinic for a professional assessment.",
    choices: [
      { number: "01", title: "An editorial first impression", detail: "A cinematic opening establishes the visual language, then directs the visitor toward treatments." },
      { number: "02", title: "Browse by need", detail: "Treatment categories and a focus-area finder help visitors narrow a large menu before a clinician assesses suitability." },
      { number: "03", title: "Give each audience a clear route", detail: "Consultation, client portal, and staff login links are visible as separate entry points. Their private workflows are outside this public case study." },
    ],
    journeyTitle: "From interest to a consultation path.",
    journeyIntro: "The public experience is organized around discovery, comparison, and a deliberate next step. The finder suggests catalog matches; it does not diagnose or determine treatment eligibility.",
    journey: [
      { stage: "01 / Discover", title: "Enter through the story", detail: "The homepage introduces the clinic’s aesthetic and links to treatment exploration." },
      { stage: "02 / Narrow", title: "Explore a focus area", detail: "The treatment page groups services and offers a short finder based on the visitor’s concern." },
      { stage: "03 / Connect", title: "Move to consultation", detail: "Treatment and membership paths lead toward a consultation request, with clinical suitability left to the provider." },
    ],
    closing: "A complex service menu with a clearer route through it.",
    next: { href: "/work/fitlunge", label: "FitLunge" },
  }} />;
}
