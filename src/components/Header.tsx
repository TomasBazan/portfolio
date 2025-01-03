export function Header() {
  return (
    <section className="bg-red-900 h-12 shadow-sm flex justify-center">
      <section className="pl-4 pr-4 flex flex-row justify-between items-center w-full 2xl:w-[1024px] xl:w-[1024px] lg:w-[768px] md:w-[576px]">
        <p>
          Header
        </p>
        <div className="h-12 flex flex-row gap-8 items-center">
          <a href="#About" className="text-white">
            About me
          </a>
          <a href="#Projects" className="text-white">
            Projects
          </a>
          <a href="#Skills" className="text-white">
            Skills
          </a>
          <a href="#Contact" className="text-white">
            Contact
          </a>
        </div>
      </section>
    </section >
  );
}