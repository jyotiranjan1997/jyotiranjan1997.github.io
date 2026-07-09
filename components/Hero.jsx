import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaArrowRight, FaBriefcase } from "react-icons/fa";
import { profile } from ".././data/portfolioData";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_60%,transparent_100%)]" />
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-accent2/20 blur-3xl animate-blob [animation-delay:3s]" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-accent3/10 blur-3xl animate-blob [animation-delay:6s]" />

      <div className="section-wrap py-10 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:items-center">
          {/* Text column */}
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface2/60 px-4 py-1.5 text-xs sm:text-sm text-gray-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent3 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent3" />
                </span>
                Open to new opportunities
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight text-white">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-accent via-accent2 to-accent3 bg-clip-text text-transparent">
                  {profile.name}
                </span>
              </h1>
            </Reveal>

            <Reveal delay={140}>
              <p className="mt-4 text-xl sm:text-2xl font-semibold text-gray-200">
                {profile.title} <span className="text-muted font-normal">— {profile.tagline}</span>
              </p>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-5 max-w-2xl text-base sm:text-lg text-muted leading-relaxed">
                {profile.summary}
              </p>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
                <a href="#contact" className="btn-primary">
                  Hire Me <FaArrowRight className="text-sm" />
                </a>
                <a href={profile.resumeFile} download className="btn-secondary">
                  <FaDownload /> Download Resume
                </a>
                <div className="flex items-center gap-2 pl-1">
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="icon-badge hover:text-accent hover:border-accent/50"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="icon-badge hover:text-accent hover:border-accent/50"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href={`mailto:${profile.email}`}
                    aria-label="Email"
                    className="icon-badge hover:text-accent hover:border-accent/50"
                  >
                    <FaEnvelope />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Photo column */}
          <Reveal delay={120} className="order-first lg:order-last">
            <div className="relative mx-auto w-56 sm:w-72 lg:w-full lg:max-w-sm">
              <div className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-accent/25 via-accent2/20 to-accent3/20 blur-2xl animate-pulseSlow" />

              <div className="relative rounded-[2rem] bg-gradient-to-br from-accent via-accent2 to-accent3 p-[3px] shadow-2xl shadow-accent/20">
                <div className="overflow-hidden rounded-[calc(2rem-3px)] bg-surface">
                  <img
                    src={profile.photo}
                    alt={profile.name}
                    className="aspect-square w-full object-cover"
                  />
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-6 flex items-center gap-2 rounded-2xl border border-border bg-surface/90 backdrop-blur-md px-3.5 py-2.5 shadow-xl">
                <span className="icon-badge !h-9 !w-9 !text-base">
                  <FaBriefcase />
                </span>
                <div className="leading-tight">
                  <div className="text-sm font-bold text-white">3+ Years</div>
                  <div className="text-[11px] text-muted">Full Stack Dev</div>
                </div>
              </div>

              <div className="absolute -top-4 -right-3 sm:-top-5 sm:-right-5 rounded-2xl border border-border bg-surface/90 backdrop-blur-md px-3.5 py-2 shadow-xl">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-accent3">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent3 opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent3" />
                  </span>
                  Available
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={320}>
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-3xl">
            {profile.heroHighlights.map((stat) => (
              <div key={stat.label} className="card !p-4 sm:!p-5 text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-extrabold text-white">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs sm:text-sm text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
