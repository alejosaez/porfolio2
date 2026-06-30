'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Code2, Search } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navItems } from '@/lib/data/profile'

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <span className="flex size-7 items-center justify-center text-foreground">
            <Code2 className="size-6" strokeWidth={2.5} />
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-foreground">
            Alejo
          </span>
        </Link>

      

        <nav className="flex items-center gap-1">
          {navItems.map((item) => {
            const active =
              item.href === '/'
                ? pathname === '/'
                : pathname.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'relative rounded-md px-3 py-2 text-sm font-medium transition-colors',
                  active
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {item.label}
                {active && (
                  <span className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-foreground" />
                )}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
