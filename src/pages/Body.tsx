import { AboutMe } from "./AboutMe";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { Home } from "./Home";
import { CanvasBackground } from "../layouts/CanvasBackground"

export default function Body() {
  return (
    <>
      <div className="relative">
      <CanvasBackground />
      <section>
        <Home/>
        <AboutMe />
        <Projects />
        <Skills />
        <Contact />
      </section >
      </div>
    </>
  );
}
