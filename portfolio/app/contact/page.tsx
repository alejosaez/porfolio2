import {
  Mail,
  MessageCircle,
  ArrowUpRight,
  MessageSquare,
  Clock,
  MapPin,
  CalendarCheck,
  Lock,
} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { ContactForm } from '@/components/contact-form'
import { profile } from '@/lib/data/profile'

const channels = [
  {
    icon: Mail,
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: profile.linkedin,
    href: profile.linkedinUrl,
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    value: profile.github,
    href: profile.githubUrl,
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: profile.whatsapp,
    href: profile.whatsappUrl,
  },
]

const infoCards = [
  {
    icon: Clock,
    title: 'Tiempo de respuesta',
    description: 'Normalmente respondo en menos de 24 horas',
  },
  {
    icon: MapPin,
    title: 'Ubicación',
    description: profile.location,
  },
  {
    icon: CalendarCheck,
    title: 'Disponibilidad',
    description: 'Abierto a full-time, freelance y colaboraciones',
  },
]

export default function ContactPage() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-bg grid-bg-mask" />
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          {/* Left */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground">
              <Mail className="size-3.5" />
              Ponte en contacto
            </span>
            <h1 className="mt-6 font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-balance text-foreground sm:text-7xl">
              Trabajemos
              <br />
              juntos<span className="text-accent">.</span>
            </h1>
            <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
              Actualmente estoy abierto a nuevas oportunidades, proyectos
              interesantes o colaboraciones. ¡No dudes en escribirme!
            </p>

            <ul className="mt-8 flex flex-col gap-3">
              {channels.map((channel) => (
                <li key={channel.label}>
                  <a
                    href={channel.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-accent/50"
                  >
                    <span className="flex size-11 items-center justify-center rounded-lg border border-border bg-secondary/60text-gray-400">
                      <channel.icon className="size-5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-foreground">
                        {channel.label}
                      </p>
                      <p className="truncate text-sm text-muted-foreground">
                        {channel.value}
                      </p>
                    </div>
                    <ArrowUpRight className="size-4 text-muted-foreground transition-colors group-hover:text-accent" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - form */}
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary/60text-gray-400">
                <MessageSquare className="size-5" />
              </span>
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground">
                  Envía un mensaje
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Completá el formulario y te responderé lo antes posible.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <ContactForm />
            </div>

            <p className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <Lock className="size-3.5" />
              Respeto tu privacidad. Tu información nunca será compartida.
            </p>
          </div>
        </div>

        {/* Info cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {infoCards.map((card) => (
            <div
              key={card.title}
              className="flex items-center gap-4 rounded-xl border border-border bg-card p-5"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary/60text-gray-400">
                <card.icon className="size-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {card.title}
                </p>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
