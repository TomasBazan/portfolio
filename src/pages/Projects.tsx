import { CardProject } from "../components/CardProject";

export function Projects() {
  return (
    <>
      <section>
        <h1>Projects</h1>
        <section className="flex gap-2">
          <CardProject />
          <CardProject />
          <CardProject />
        </section>
      </section>
    </>
  );
}