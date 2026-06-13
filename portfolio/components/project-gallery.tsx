'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export function ProjectGallery({
  images,
  title,
}: {
  images: string[]
  title: string
}) {
  const [index, setIndex] = useState(0)
  const total = images.length

  const go = (dir: number) => {
    setIndex((prev) => (prev + dir + total) % total)
  }

  return (
    <div>
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
        <Image
          src={images[index] || '/placeholder.svg'}
          alt={`${title} — captura ${index + 1}`}
          width={1280}
          height={720}
          className="aspect-video w-full object-cover"
          priority
        />
        {total > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Imagen anterior"
              className="absolute left-3 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center rounded-lg border border-border bg-background/80 text-foreground backdrop-blur transition-colors hover:bg-secondary"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Imagen siguiente"
              className="absolute right-3 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center rounded-lg border border-border bg-background/80 text-foreground backdrop-blur transition-colors hover:bg-secondary"
            >
              <ChevronRight className="size-5" />
            </button>
          </>
        )}
      </div>

      {total > 1 && (
        <div className="mt-4 grid grid-cols-4 gap-4">
          {images.map((img, i) => (
            <button
              key={img}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Ver captura ${i + 1}`}
              className={cn(
                'overflow-hidden rounded-xl border transition-colors',
                i === index
                  ? 'border-accent ring-1 ring-accent'
                  : 'border-border opacity-70 hover:opacity-100'
              )}
            >
              <Image
                src={img || '/placeholder.svg'}
                alt={`${title} miniatura ${i + 1}`}
                width={320}
                height={180}
                className="aspect-video w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
