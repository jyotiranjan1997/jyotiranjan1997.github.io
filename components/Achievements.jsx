import { FaTrophy } from "react-icons/fa";
import { achievements } from "@/data/portfolioData";
import Reveal from "./Reveal";

export default function Achievements() {
  return (
    <section id="achievements" className="section-wrap">
      <Reveal>
        <p className="section-eyebrow">Achievements</p>
        <h2 className="section-title">Milestones along the way</h2>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2">
        {achievements.map((item, i) => (
          <Reveal key={item} delay={i * 60}>
            <div className="card flex items-start gap-4 h-full">
              <span className="icon-badge !text-accent3">
                <FaTrophy />
              </span>
              <p className="text-sm text-gray-300 leading-relaxed pt-1.5">
                {item}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
