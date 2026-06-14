import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/lib/data/projects'
import { CategoryIcon } from './category-icon'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/50 hover:bg-card/80"
    >
      <div className="flex items-start justify-between">
        <span className="flex size-12 items-center justify-center rounded-xl border border-border bg-secondary/60text-gray-400">
          <CategoryIcon category={project.category} className="size-5" />
        </span>
        <span className="rounded-md border border-border bg-secondary/60 px-2 py-1 text-[11px] font-medium text-muted-foreground">
          {project.category === 'Fullstack Development'
            ? 'Fullstack'
            : project.category === 'Backend Development'
              ? 'Backend'
              : project.category === 'Mobile Development'
                ? 'Mobile'
                : 'IA – n8n'}
        </span>
      </div>

      <h3 className="mt-5 font-display text-xl font-bold text-foreground">
        {project.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {project.shortDescription}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-border bg-secondary/40 px-2 py-0.5 text-[11px] text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors group-hover:text-accent">
        Ver proyecto
        <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Link>
  )
}
