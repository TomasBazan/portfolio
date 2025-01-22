import { AboutMe } from "./AboutMe";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { Home } from "./Home";
import { CanvasBackground } from "../layouts/CanvasBackground"

export default function Body() {
  return (
    <main className="relative">
      <CanvasBackground />
      <section>
        <Home/>
        <AboutMe />
        <Projects />
        <Contact />
      </section >
    </main>
  );
}
