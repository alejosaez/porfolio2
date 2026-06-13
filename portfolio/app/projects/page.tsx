import { ProjectsGrid } from '@/components/projects-grid'

export default function ProjectsPage() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-bg grid-bg-mask" />
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <header>
          <h1 className="font-display text-5xl font-extrabold tracking-tight text-foreground sm:text-7xl">
            Proyectos
          </h1>
          <p className="mt-3 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Una selección de trabajos destacados en distintas tecnologías y
            dominios.
          </p>
        </header>

        <ProjectsGrid />
      </div>
    </main>
  )
}
