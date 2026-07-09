import { FaGraduationCap, FaCertificate } from "react-icons/fa";
import { education, certifications } from ".././data/portfolioData";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <section id="education" className="section-wrap">
      <Reveal>
        <p className="section-eyebrow">Education &amp; Certifications</p>
        <h2 className="section-title">Foundation &amp; continuous learning</h2>
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal delay={80}>
          <div className="card h-full">
            <div className="flex items-center gap-3 mb-5">
              <span className="icon-badge">
                <FaGraduationCap />
              </span>
              <h3 className="text-base font-semibold text-white">Education</h3>
            </div>
            <ul className="space-y-4">
              {education.map((edu) => (
                <li
                  key={edu.degree}
                  className="border-l-2 border-border pl-4 py-0.5"
                >
                  <p className="text-sm font-semibold text-white">
                    {edu.degree}
                  </p>
                  <p className="text-sm text-muted">{edu.school}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="card h-full">
            <div className="flex items-center gap-3 mb-5">
              <span className="icon-badge">
                <FaCertificate />
              </span>
              <h3 className="text-base font-semibold text-white">
                Training &amp; Certifications
              </h3>
            </div>
            <ul className="space-y-4">
              {certifications.map((cert) => (
                <li
                  key={cert.title}
                  className="border-l-2 border-border pl-4 py-0.5"
                >
                  <p className="text-sm font-semibold text-white">
                    {cert.title}
                  </p>
                  <p className="text-xs text-accent mb-1">{cert.issuer}</p>
                  <p className="text-sm text-muted leading-relaxed">
                    {cert.detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
