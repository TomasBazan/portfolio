import { CardProject } from "../components/CardProject";

export function Projects() {
  return (
    <>
      <section id="Projects">
        <h1>Projects</h1>
        <section className="flex gap-2">
          <CardProject repoPath={"Weathear-API"} />
          <CardProject repoPath={"SimulacionSupermercado"} />
          <CardProject repoPath={"TaskManager"} />
        </section>
      </section>
    </>
  );
}