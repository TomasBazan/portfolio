import { AboutMe } from "./AboutMe";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { Home } from "./Home";


export default function Body() {
  return (
    <section>
      <Home/>
      <Projects />
      <Skills />
      <AboutMe />
      <Contact />
    </section >
  );
}
