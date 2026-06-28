export type ProjectCategory =
  | 'Fullstack Development'
  | 'IA – n8n'
  | 'Backend Development'
  | 'Mobile Development'

export interface Project {
  slug: string
  title: string
  category: ProjectCategory
  shortDescription: string
  description: string
  tags: string[]
  liveUrl?: string
  repoUrl?: string
  role: string
  roleDescription: string
  duration: string
  client: string
  images: string[]
  features: string[]
  about: string
  built: string[]
}