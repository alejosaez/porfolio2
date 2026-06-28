import Image from 'next/image'
import {
  Code2,
  Users,
  MessageCircle,
  MapPin,
  Mail,
  Link2,
  Phone,
  GraduationCap,
  Briefcase,
  Sparkles,
  UserRound,
} from 'lucide-react'
import { LinkedinIcon } from '@/components/brand-icons'
import { profile, education, experience, skillGroups } from '@/lib/data/profile'

const heroStats = [
  { value: '20+', label: 'Proyectos en GitHub', icon: Code2 },
  { value: '1200+', label: 'Contactos en LinkedIn', icon: Users },
  { value: '24×7', label: 'WhatsApp', icon: MessageCircle },
]

const contactRows = [
  { icon: MapPin, value: profile.location },
  { icon: Mail, value: profile.email },
  { icon: Link2, value: profile.github },
  { icon: LinkedinIcon, value: profile.linkedin },
  { icon: Phone, value: profile.whatsapp },
]

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        {/* Intro */}
        <div className="flex flex-col justify-center">
          <span className="inline-flex w-fit text-gray-400 items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium ">
            <UserRound className="size-3.5" />
            Sobre mí
          </span>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-balance text-foreground sm:text-6xl">
            Hola, soy {profile.name}
          </h1>
          <p className="mt-2 font-display text-2xl font-medium text-muted-foreground sm:text-3xl">
            Diseño y código para la web.
          </p>
          <p className="mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Desarrollador de software especializado en desarrollo Full Stack.
            Construyo aplicaciones web escalables y de alto rendimiento con
            tecnologías modernas y código limpio.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-4">
            {heroStats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1.5">
               <stat.icon className="size-5 text-gray-400" />
                <span className="font-display text-2xl font-bold text-foreground">
                  {stat.value}
                </span>
                <span className="text-xs text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Profile card */}
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <div className="flex items-center gap-4">
            <Image
              src={profile.avatar || '/placeholder.svg'}
              alt={`Foto de ${profile.name}`}
              width={80}
              height={80}
              className="size-20 rounded-full object-cover"
            />
            <div>
              <h2 className="font-display text-xl font-bold text-foreground">
                {profile.name}
              </h2>
              <p className="text-sm text-gray-500 font-medium ">{profile.role}</p>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            {profile.longBio}
          </p>
          <div className="mt-6 border-t border-border pt-6">
            <ul className="flex flex-col gap-3.5">
              {contactRows.map((row, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-sm text-muted-foreground"
                >
                  <row.icon className="size-4 shrink-0text-gray-400" />
                  <span className="truncate">{row.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Education / Experience / Skills */}
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {/* Education */}
        <section className="rounded-2xl border border-border bg-card p-6 sm:p-7">
          <h3 className="flex items-center gap-2.5 font-display text-lg font-bold text-foreground">
            <GraduationCap className="size-5text-gray-400" />
            Educación
          </h3>
          <ol className="mt-6 flex flex-col gap-7">
            {education.map((item) => (
              <li key={item.title} className="relative pl-5">
                <span className="absolute left-0 top-1.5 size-2.5 rounded-full bg-accent ring-4 ring-accent/15" />
                <span className="text-xs text-muted-foreground">
                  {item.period}
                </span>
                <h4 className="mt-1 text-sm font-semibold leading-snug text-foreground">
                  {item.title}
                </h4>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {item.institution}
                </p>
                <span className="mt-2 inline-block rounded-md border border-border bg-secondary/60 px-2 py-1 text-xs text-muted-foreground">
                  {item.detail}
                </span>
              </li>
            ))}
          </ol>
        </section>

        {/* Experience */}
        <section className="rounded-2xl border border-border bg-card p-6 sm:p-7">
          <h3 className="flex items-center gap-2.5 font-display text-lg font-bold text-foreground">
            <Briefcase className="size-5text-gray-400" />
            Experiencia
          </h3>
          <ol className="mt-6 flex flex-col gap-7">
            {experience.map((item) => (
              <li key={item.title} className="relative pl-5">
                <span className="absolute left-0 top-1.5 size-2.5 rounded-full bg-accent ring-4 ring-accent/15" />
                <span className="text-xs text-muted-foreground">
                  {item.period}
                </span>
                <h4 className="mt-1 text-sm font-semibold leading-snug text-foreground">
                  {item.title}
                </h4>
                <p className="text-xs font-mediumtext-gray-400">{item.company}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                <span className="mt-2 inline-block rounded-md border border-border bg-secondary/60 px-2 py-1 text-xs text-muted-foreground">
                  {item.duration}
                </span>
              </li>
            ))}
          </ol>
        </section>

        {/* Skills */}
        <section className="rounded-2xl border border-border bg-card p-6 sm:p-7">
          <h3 className="flex items-center gap-2.5 font-display text-lg font-bold text-foreground">
            <Sparkles className="size-5text-gray-400" />
            Skills y Tecnologías
          </h3>
          <div className="mt-6 flex flex-col gap-5">
            {skillGroups.map((group) => (
              <div key={group.category}>
                <h4 className="text-sm font-semibold text-foreground">
                  {group.category}
                </h4>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-border bg-secondary/60 px-2.5 py-1 text-xs text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
