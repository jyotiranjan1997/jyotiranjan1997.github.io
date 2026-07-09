import { FaChevronRight, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from ".././data/portfolioData";
import ProjectMockup from "./ProjectMockup";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projects" className="section-wrap">
      <Reveal>
        <p className="section-eyebrow">Projects</p>
        <h2 className="section-title">Things I&apos;ve built</h2>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 80}>
            <div className="card flex h-full flex-col !p-0 overflow-hidden">
              <div className="p-3 sm:p-4">
                <ProjectMockup
                  domain={project.domain}
                  theme={project.theme}
                  mockIcon={project.mockIcon}
                />
              </div>

              <div className="flex flex-1 flex-col px-5 pb-5 sm:px-7 sm:pb-7">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-lg font-bold text-white">{project.title}</h3>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="icon-badge !h-9 !w-9 shrink-0 hover:text-accent hover:border-accent/50"
                      aria-label={project.linkLabel || "Visit live site"}
                    >
                      <FaExternalLinkAlt className="text-sm" />
                    </a>
                  )}
                </div>

                <ul className="space-y-2.5 mb-5 grow">
                  {project.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <FaChevronRight className="mt-1 shrink-0 text-accent text-xs" />
                      <span className="text-sm text-gray-300 leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border mb-4">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-surface2/70 px-2.5 py-1 text-xs font-medium text-accent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary !w-full"
                  >
                    {project.linkLabel || "Visit Live Site"}
                    <FaExternalLinkAlt className="text-xs" />
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
