export function Header() {
  return (
    <section className="bg-red-900 h-12 flex flex-row place-content-around shadow-sm items-center">
      <p>
        Header
      </p>
      <div className="h-12 flex flex-row gap-8 items-center">
        <a href="#About" className="text-sky-400">
          Acerca de mi
        </a>
        <p>
          Contacto
        </p>
        <p>
          Skills
        </p>
      </div>
    </section >
  );
}