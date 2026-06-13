import { Triangle } from 'lucide-react'
import { profile } from '@/lib/data/profile'

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 py-8">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-4 text-sm text-muted-foreground sm:px-6">
        <Triangle className="size-3.5 fill-current" />
        <span className="font-mono">~</span>
        <a
          href={`mailto:${profile.email}`}
          className="font-mono transition-colors hover:text-foreground"
        >
          {profile.email}
        </a>
      </div>
    </footer>
  )
}
