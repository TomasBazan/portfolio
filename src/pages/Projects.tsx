import { CardProject } from "../components/CardProject/CardProject";

export function Projects() {
  return (
    <section id="Projects" className="min-h-[calc(100vh-3rem)] transition-all flex justify-around items-center flex-col">
      <h1 className="mb-10 text-5xl">Projects</h1>
      <section className="w-7/12 grid grid-cols-3 gap-4">
        <CardProject 
          gridLayout="col-span-2 row-start-1"
          repoPath= "SimulacionSupermercado"
          name= "Simulacion de Supermercado"
          desc = "Análisis de modelos de reparación en sistemas de cajas registradoras con simulación monte carlo"
        />
        <CardProject 
          gridLayout="col-span-1 row-start-1"
          repoPath= "TaskManager"
          name= "Task Manager"
          desc = "Manejador de Tareas Web, creado con React-Django"
        />
        <CardProject 
          gridLayout="col-span-1 row-start-2"
          repoPath= "Weathear-API"
          name= "Weathear-API"
          desc = "Api de clima conectado con api de terceros y con cache en Redis"
        />
        <CardProject 
          gridLayout="col-span-2 row-start-2"
          repoPath= "SimulacionSupermercado"
          name= "Simulacion de Supermercado"
          desc = "Análisis de modelos de reparación en sistemas de cajas registradoras con simulación monte carlo"
        />
      </section>
    </section>
  );
}
