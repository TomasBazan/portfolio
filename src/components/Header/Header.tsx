import { useEffect } from "react";
import "./Header.css"

export function Header() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".headerConditional");
      if (window.pageYOffset > 0) {
        header?.classList.add("visible");
      } else {
        header?.classList.remove("visible");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="headerConditional">
      <section className="pl-4 pr-4 flex flex-row justify-between  w-full md:w-[768px] xl:w-[1024px] 2xl:w-[1024px] ">
        <p className="text-white flex items-center text-sm font-bold sm:text-xl md:text-xl xl:text-2xl 2xl:text-3xl">
          Tomas Bazan
        </p>
        <ul className="h-full flex flex-row justify-center gap-2 text-white text-sm sm:gap-4 md:gap-8 sm:text-l md:text-l xl:text-xl 2xl:text-2xl ">
          <li>
            <a href="#About" className="h-full flex items-center hover:border-b border-cyan-400 text-white hover:text-cyan-400 transition-all">
              About me
            </a>
          </li>
          <li>
            <a href="#Projects" className="h-full flex items-center text-white hover:text-[#EE3D22] h-full hover:border-b border-[#EE3D22] transition-all">
              Projects
            </a>
          </li>
          <li>
            <a href="#Contact" className="h-full flex items-center text-white hover:text-cyan-400 hover:border-b border-cyan-400 transition-all">
              Contact
            </a>
          </li>
        </ul>
      </section>
    </nav>
  );
}
