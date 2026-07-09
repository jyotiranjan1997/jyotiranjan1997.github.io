import { skillGroups, extraSkills } from ".././data/portfolioData";
import { SkillIcon } from "./icons";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="section-wrap">
      <Reveal>
        <p className="section-eyebrow">Skills</p>
        <h2 className="section-title">Technologies I work with</h2>
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 60}>
            <div className="card h-full">
              <div className="flex items-center gap-3 mb-4">
                <span className="icon-badge">
                  <SkillIcon name={group.icon} />
                </span>
                <h3 className="text-base font-semibold text-white">
                  {group.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill.name} className="pill">
                    <SkillIcon name={skill.icon} className="text-accent" />
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={240}>
        <div className="mt-6 card">
          <h3 className="text-base font-semibold text-white mb-4">
            Tools &amp; Additional Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            {extraSkills.map((skill) => (
              <span key={skill.name} className="pill">
                <SkillIcon name={skill.icon} className="text-accent2" />
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
