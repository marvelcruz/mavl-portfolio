import { Fragment } from "react";
import About from "@/components/About";
import Impact from "@/components/Impact";
import Projects from "@/components/Projects";
import Recognition from "@/components/Recognition";
import Services from "@/components/Services";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <Fragment>
      <About />
      <Projects />
      <Impact />
      <Services />
      <Recognition />
      <Contact />
    </Fragment>
  );
}
