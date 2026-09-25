import type { Metadata } from "next";
import ProjectCaseStudy from "@/components/ProjectCaseStudy";

export const metadata: Metadata = {
  title: "FitLunge case study | Marvellous Olabode",
  description: "A live wellness website concept by Marvellous Olabode, presenting a lifestyle-led introduction, program journey, plans, and an application path.",
};

export default function FitLungeCaseStudy() {
  return <ProjectCaseStudy project={{
    name: "FitLunge",
    theme: "fitlunge",
    category: "Wellness program",
    lead: "A lifestyle-led introduction to a women’s wellness program, followed by a clearer explanation of the journey, plan options, and how to apply.",
    screenshot: "/images/fitlunge-case-study.jpg",
    screenshotAlt: "Screenshot of the live FitLunge website showing a woman and the lifestyle-led program introduction",
    live: "https://fitlunge-frontend-kappa.vercel.app/",
    explore: "https://fitlunge-frontend-kappa.vercel.app/program",
    exploreLabel: "Explore program journey",
    role: "Concept, experience design & frontend",
    experience: "Visual introduction + program journey",
    brief: "Give an abstract program a visible journey.",
    context: "A wellness program can sound like a collection of promises. The experience instead shows the rhythm of participation, what is included, and where a visitor can learn more before applying.",
    choices: [
      { number: "01", title: "Start with a person, not a product list", detail: "The opening visual presents a lifestyle context before the visitor sees program details or pricing." },
      { number: "02", title: "Explain the structure", detail: "The program page lays out supervision, meal planning, community support, check-ins, and the staged journey." },
      { number: "03", title: "Make the next step legible", detail: "Plan information and an application route follow the explanation, with separate client and admin sign-in links." },
    ],
    journeyTitle: "From a first impression to a plan.",
    journeyIntro: "The site lets a visitor learn what participation is meant to involve before deciding whether to contact the provider. Medical suitability and outcomes are not determined by the website.",
    journey: [
      { stage: "01 / Feel", title: "See the lifestyle story", detail: "A visual introduction frames the program around day-to-day life and supported change." },
      { stage: "02 / Understand", title: "Read the program", detail: "The journey page explains what is included and how the weeks are structured." },
      { stage: "03 / Decide", title: "Review plans and apply", detail: "Visitors can compare the published options and use the application or contact route." },
    ],
    closing: "A wellness offer made easier to understand and navigate.",
    next: { href: "/work/cosmo", label: "COSMO" },
  }} />;
}
