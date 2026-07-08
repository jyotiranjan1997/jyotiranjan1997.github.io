import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaLanguage } from "react-icons/fa";
import { profile, languages } from "@/data/portfolioData";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="section-wrap">
      <Reveal>
        <p className="section-eyebrow">About Me</p>
        <h2 className="section-title">Building reliable products, end to end</h2>
      </Reveal>

      <div className="grid gap-8 lg:grid-cols-5">
        <Reveal className="lg:col-span-3" delay={80}>
          <p className="text-muted text-base sm:text-lg leading-relaxed">
            {profile.summary}
          </p>
          <p className="mt-4 text-muted text-base sm:text-lg leading-relaxed">
            At Search Education Pvt. Ltd., I own the full lifecycle of our
            flagship CRM and web platforms — from requirement analysis and
            backend architecture to deployment, monitoring, and production
            support. I care about clean APIs, fast databases, and shipping
            things that hold up under real traffic.
          </p>
        </Reveal>

        <Reveal className="lg:col-span-2" delay={140}>
          <div className="card space-y-4">
            <div className="flex items-center gap-3">
              <span className="icon-badge">
                <FaMapMarkerAlt />
              </span>
              <div>
                <div className="text-xs text-muted">Location</div>
                <div className="text-sm font-medium text-white">{profile.location}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="icon-badge">
                <FaPhoneAlt />
              </span>
              <div>
                <div className="text-xs text-muted">Phone</div>
                <div className="text-sm font-medium text-white">{profile.phone}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="icon-badge">
                <FaEnvelope />
              </span>
              <div>
                <div className="text-xs text-muted">Email</div>
                <div className="text-sm font-medium text-white break-all">
                  {profile.email}
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="icon-badge">
                <FaLanguage />
              </span>
              <div>
                <div className="text-xs text-muted mb-1">Languages</div>
                <div className="flex flex-wrap gap-1.5">
                  {languages.map((lang) => (
                    <span key={lang.name} className="pill !py-1 !px-2.5 !text-xs">
                      {lang.name} · {lang.level}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
