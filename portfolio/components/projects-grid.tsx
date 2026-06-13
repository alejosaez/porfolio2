'use client'

import { useState } from 'react'
import { projects, categories } from '@/lib/data/projects'
import { ProjectCard } from '@/components/project-card'
import { CategoryIcon } from '@/components/category-icon'
import { cn } from '@/lib/utils'

const filters = [
  { label: 'Todos los proyectos', value: 'all' as const },
  ...categories.map((c) => ({ label: c, value: c })),
]

export function ProjectsGrid() {
  const [active, setActive] = useState<string>('all')

  const filtered =
    active === 'all'
      ? projects
      : projects.filter((p) => p.category === active)

  return (
    <>
      <div className="mt-8 flex flex-wrap gap-2.5">
        {filters.map((filter) => {
          const isActive = active === filter.value
          return (
            <button
              key={filter.value}
              type="button"
              onClick={() => setActive(filter.value)}
              className={cn(
                'inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors',
                isActive
                  ? 'border-border bg-secondary text-foreground'
                  : 'border-border bg-card text-muted-foreground hover:bg-secondary/60 hover:text-foreground'
              )}
            >
              <CategoryIcon
                category={filter.value as never}
                className="size-4"
              />
              {filter.value === 'all' ? 'Todos los proyectos' : filter.label}
            </button>
          )
        })}
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </>
  )
}
