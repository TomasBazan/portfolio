import personalPhoto from "../assets/images/FotoFormal.jpeg"
import { Skills } from "./Skills";

export function AboutMe() {
  return (
    <section id="About" className="p-10 flex flex-col justify-center bg-[var(--background-color-secondary)] ">
      <h1 className=" text-3xl md:text-5xl">About me</h1>
      <section className="flex flex-col w-full min-h-[calc(100vh-3rem)] lg:flex-row">
        <section className="flex flex-col justify-center content-center w-full lg:w-1/2">
          <img src={personalPhoto} alt="Tomas Bazan" className="w-40 h-40 md:w-56 md:h-56 rounded-full"></img>
          <p className="text-3xl md:text-5xl">
            I am a computer science student at FAMAF university with a passion for web development. I have
            experience with JavaScript, TypeScript, React, Python and Django. I am
            currently looking for new opportunities to grow as a developer.
          </p>
        </section>
        <Skills/>
      </section>
    </section>
  );
}
