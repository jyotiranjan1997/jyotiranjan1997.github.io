import { FaBriefcase, FaCheckCircle } from "react-icons/fa";
import { experience } from ".././data/portfolioData";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="section-wrap">
      <Reveal>
        <p className="section-eyebrow">Experience</p>
        <h2 className="section-title">Where I&apos;ve made an impact</h2>
      </Reveal>

      <div className="space-y-8">
        {experience.map((job, i) => (
          <Reveal key={job.role + job.period} delay={i * 80}>
            <div className="card">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                <div className="flex items-start gap-3">
                  <span className="icon-badge">
                    <FaBriefcase />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-white">{job.role}</h3>
                    <p className="text-sm text-accent font-medium">{job.company}</p>
                  </div>
                </div>
                <span className="pill self-start sm:self-auto whitespace-nowrap">
                  {job.period}
                </span>
              </div>

              <p className="text-sm text-muted leading-relaxed mb-5">{job.note}</p>

              <ul className="grid gap-3 sm:grid-cols-2">
                {job.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2.5">
                    <FaCheckCircle className="mt-1 shrink-0 text-accent3 text-sm" />
                    <span className="text-sm text-gray-300 leading-relaxed">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
