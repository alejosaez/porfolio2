'use client'

import { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ContactForm() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSent(true)
    e.currentTarget.reset()
    setTimeout(() => setSent(false), 4000)
  }

  const labelClass = 'mb-2 block text-sm font-medium text-foreground'
  const fieldClass =
    'w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent'

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Tu nombre
          </label>
          <input
            id="name"
            name="name"
            required
            placeholder="Ingresá tu nombre"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Tu email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="Ingresá tu email"
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className={labelClass}>
          Asunto
        </label>
        <input
          id="subject"
          name="subject"
          required
          placeholder="Ingresá el asunto"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Escribí tu mensaje..."
          className={`${fieldClass} resize-none`}
        />
      </div>

      <Button type="submit" size="lg" className="w-full rounded-lg font-semibold">
        {sent ? (
          <>
            <CheckCircle2 className="size-4" />
            ¡Mensaje enviado!
          </>
        ) : (
          <>
            <Send className="size-4" />
            Enviar mensaje
          </>
        )}
      </Button>
    </form>
  )
}
