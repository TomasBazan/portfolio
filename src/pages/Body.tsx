import { AboutMe } from "../components/AboutMe";
import { Projects } from "./Projects";
import { Contact } from "../components/Contact";


export function Body() {
  return (
    <section>
      <AboutMe />
      <Projects />
      <Contact />
    </section >
  );
}