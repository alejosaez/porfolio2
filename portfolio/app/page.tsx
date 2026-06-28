import Link from "next/link";
import { FileDown, User, MessageCircle, Triangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";
import { profile } from "@/lib/data/profile";

const heroStats = [
  { value: "20+", label: "Proyectos en GitHub", icon: GithubIcon },
  { value: "1200+", label: "Seguidores en LinkedIn", icon: LinkedinIcon },
  { value: "24×7", label: "WhatsApp", icon: MessageCircle },
];

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-bg grid-bg-mask" />
      <section className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-5xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6">
        <h1 className="font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-balance text-foreground sm:text-7xl md:text-8xl">
          {profile.name}
        </h1>
        <p className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
          {profile.tagline}
        </p>
        <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          {profile.shortBio}
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
      <a href="/projects/alejo.pdf" download="Alejo-Saez-CV.pdf">
  <Button size="lg" className="rounded-full px-6 font-semibold">
    <FileDown className="size-4" />
    Descargar CV
  </Button>
</a>
        <Link href="/about">
  <Button
    size="lg"
    variant="secondary"
    className="rounded-full px-6 font-semibold"
  >
    <User className="size-4" />
    Sobre mí
  </Button>
</Link>
        </div>

        <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
          <Triangle className="size-3.5 fill-current" />
          <a
            href={`mailto:${profile.email}`}
            className="font-mono transition-colors hover:text-foreground"
          >
            {profile.email}
          </a>
        </div>

        <div className="mt-16 grid w-full max-w-2xl grid-cols-3 gap-6">
          {heroStats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-2">
              <stat.icon className="size-6 text-muted-foreground" />
              <span className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                {stat.value}
              </span>
              <span className="text-xs text-muted-foreground sm:text-sm">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
