import personalPhoto from "../assets/images/FotoFormal.jpeg"

export function AboutMe() {
  return (
    <div id="About" className="flex justify-center bg-[var(--background-color-secondary)] ">
      <section className=" min-h-[calc(100vh-3rem)] justify-center justify-items-center content-center max-w-full 2xl:max-w-5xl xl:max-w-5xl lg:max-w-3xl md:max-w-xl">
        <h1>Tomas Bazan</h1>
        <p>
          I am a computer science student at FAMAF university with a passion for web development. I have
          experience with JavaScript, TypeScript, React, Python and Django. I am
          currently looking for new opportunities to grow as a developer.
        </p>
        <div className='justify-center content-center w-1/2'>
         <img src={personalPhoto} alt="Tomas Bazan" className="w-40 h-40 md:w-56 md:h-56 rounded-full"></img>
        </div>
      </section>
    </div>
  );
}
