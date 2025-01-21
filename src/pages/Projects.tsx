import { CardProject } from "../components/CardProject/CardProject";

export function Projects() {
  return (
    <section id="Projects" 
      className="min-h-[calc(100vh-3rem)]  transition-all flex justify-around items-center flex-col">
      <h1 className="text-3xl md:text-5xl">Projects</h1>
      <section className="grid gap-4 w-full p-3 grid-cols-1 lg:w-10/12 xl:w-7/12 md:grid-cols-3">
        <CardProject 
          gridLayout="md:col-span-2 row-start-1"
          repoPath= "SimulacionSupermercado"
          name= "Simulacion de Supermercado"
          description = "Análisis de modelos de reparación en sistemas de cajas registradoras con simulación monte carlo"
        />
        <CardProject 
          gridLayout="col-span-1 md:row-start-1"
          repoPath= "TaskManager"
          name= "Task Manager"
          description = "Manejador de Tareas Web, creado con React-Django"
        />
        <CardProject 
          gridLayout="col-span-1 md:row-start-2"
          repoPath= "Weathear-API"
          name= "Weathear-API"
          description = "Api de clima conectado con api de terceros y con cache en Redis"
        />
        <CardProject 
          gridLayout="md:col-span-2 md:row-start-2"
          repoPath= "SimulacionSupermercado"
          name= "Simulacion de Supermercado"
          description = "Análisis de modelos de reparación en sistemas de cajas registradoras con simulación monte carlo"
        />
      </section>
    </section>
  );
}
