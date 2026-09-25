import type { Metadata } from "next";
import Demo from "./Demo";

export const metadata: Metadata = {
  title: "Regional OS walkthrough | Marvellous Olabode",
  description: "Explore a sample-data walkthrough of Regional OS report evidence, follow-up actions, and finance review.",
};

export default function RegionalOsDemoPage() {
  return <Demo />;
}
