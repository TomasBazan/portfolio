import './Home.css'

export function Home() {
  return (
    <div id="About" className="h-full overflow-hidden flex justify-center align-center min-h-screen w-full" >
      <section className="min-h-[calc(100vh-3rem)] flex flex-col justify-center items-center w-full text-center space-y-6">
        {/*<h1 className="titleHome  bg-gradient-to-r from-cyan-600 to-[#EE3D22] inline-block text-transparent bg-clip-text  text-3xl md:text-5xl xl:text-8xl">Tomas Bazan</h1>*/}
        <p className="titleHome text-balance pt-9 text-lg md:text-xl xl:text-5xl max-w-3xl">
          Hello, I'm <mark>Tomas Bazan</mark>.
        </p>
        <p className="descHome text-balance text-lg md:text-xl xl:text-5xl max-w-3xl">
        Full Stack developer and Computer Science student
        </p>
      </section>
    </div>
  );
}
