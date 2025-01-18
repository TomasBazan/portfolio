export function Header() {
  return (
    <section className="bg-transparent  h-10 flex justify-center sm:h-12 md:h-14 xl:h-16 ">
      <section className="pl-4 pr-4 flex flex-row justify-between  w-full md:w-[768px] xl:w-[1024px] 2xl:w-[1024px] ">
        <p className="text-white flex items-center text-sm font-bold sm:text-xl md:text-xl xl:text-2xl 2xl:text-3xl">
          Tomas Bazan
        </p>
        <div className="h-full flex flex-row justify-center gap-2 text-white text-sm sm:gap-4 md:gap-8 sm:text-l md:text-l xl:text-xl 2xl:text-2xl ">
          <a href="#About" className="h-full flex items-center hover:border-b border-cyan-400 text-white hover:text-cyan-400 transition-all">
            About me
          </a>
          <a href="#Projects" className="h-full flex items-center text-white hover:text-cyan-400 h-full hover:border-b border-cyan-400 transition-all">
            Projects
          </a>
          <a href="#Projects" className="h-full flex items-center text-white hover:text-cyan-400 hover:border-b border-cyan-400 transition-all">
            Skills
          </a>
          <a href="#Contact" className="h-full flex items-center text-white hover:text-cyan-400 hover:border-b border-cyan-400 transition-all">
            Contact
          </a>
        </div>
      </section>
    </section>
  );
}
