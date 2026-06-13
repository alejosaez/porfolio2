import {
  LayoutGrid,
  Code2,
  Sparkles,
  Server,
  Smartphone,
} from 'lucide-react'
import type { ProjectCategory } from '@/lib/data/projects'
import { cn } from '@/lib/utils'

const iconMap = {
  'Fullstack Development': Code2,
  'IA – n8n': Sparkles,
  'Backend Development': Server,
  'Mobile Development': Smartphone,
}

export function CategoryIcon({
  category,
  className,
}: {
  category: ProjectCategory | 'all'
  className?: string
}) {
  const Icon = category === 'all' ? LayoutGrid : iconMap[category]
  return <Icon className={cn('size-4', className)} />
}
