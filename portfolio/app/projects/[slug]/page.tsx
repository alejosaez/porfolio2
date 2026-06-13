import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  ArrowLeft,
  Globe,
  Code2,
  UserCog,
  Clock,
  Building2,
  Cpu,
  CheckCircle2,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ProjectGallery } from '@/components/project-gallery'
import { getProject, projects } from '@/lib/data/projects'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProject(slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-bg grid-bg-mask" />
      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Volver a Proyectos
        </Link>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          {/* Main */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-accent">
              <Code2 className="size-3.5" />
              {project.category}
            </span>
            <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl">
              {project.title}
            </h1>
            <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {project.liveUrl && (
                <Button asChild variant="secondary" className="rounded-lg">
                  <a href={project.liveUrl} target="_blank" rel="noreferrer">
                    <Globe className="size-4" />
                    Live Demo
                  </a>
                </Button>
              )}
              {project.repoUrl && (
                <Button asChild variant="secondary" className="rounded-lg">
                  <a href={project.repoUrl} target="_blank" rel="noreferrer">
                    <Code2 className="size-4" />
                    GitHub Repo
                  </a>
                </Button>
              )}
            </div>

            <div className="mt-8">
              <ProjectGallery images={project.images} title={project.title} />
            </div>
          </div>

          {/* Sidebar */}
          <aside className="rounded-2xl border border-border bg-card p-6 sm:p-7">
            <dl className="flex flex-col gap-6">
              <InfoBlock icon={UserCog} label="Mi Rol">
                <p className="font-semibold text-foreground">{project.role}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {project.roleDescription}
                </p>
              </InfoBlock>
              <Divider />
              <InfoBlock icon={Clock} label="Duración">
                <p className="text-sm text-muted-foreground">
                  {project.duration}
                </p>
              </InfoBlock>
              <Divider />
              <InfoBlock icon={Building2} label="Cliente">
                <p className="text-sm text-muted-foreground">
                  {project.client}
                </p>
              </InfoBlock>
              <Divider />
              <InfoBlock icon={Cpu} label="Tecnologías">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border bg-secondary/60 px-2.5 py-1 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </InfoBlock>
              <Divider />
              <InfoBlock icon={CheckCircle2} label="Características">
                <ul className="flex flex-col gap-2.5">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </InfoBlock>
            </dl>
          </aside>
        </div>

        {/* Bottom sections */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <section className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <h2 className="font-display text-xl font-bold text-foreground">
              Sobre el proyecto
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {project.about}
            </p>
          </section>
          <section className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <h2 className="font-display text-xl font-bold text-foreground">
              Lo que construí
            </h2>
            <ul className="mt-4 flex flex-col gap-3">
              {project.built.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-muted-foreground"
                >
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </main>
  )
}

function InfoBlock({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ElementType
  label: string
  children: React.ReactNode
}) {
  return (
    <div>
      <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
        <Icon className="size-4 text-accent" />
        {label}
      </div>
      <div className="mt-2.5">{children}</div>
    </div>
  )
}

function Divider() {
  return <div className="h-px w-full bg-border" />
}
