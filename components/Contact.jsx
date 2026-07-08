import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa";
import { profile } from "@/data/portfolioData";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="section-wrap">
      <Reveal>
        <div className="card relative overflow-hidden text-center !py-14 sm:!py-20">
          <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-accent2/10 blur-3xl" />

          <p className="section-eyebrow justify-center">Contact</p>
          <h2 className="text-2xl sm:text-4xl font-bold text-white max-w-2xl mx-auto">
            Like what you see? Let&apos;s talk about your next hire.
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-muted text-base sm:text-lg">
            I&apos;m open to full-time roles and freelance opportunities.
            Reach out and I&apos;ll get back to you within a day.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a href={`mailto:${profile.email}`} className="btn-primary">
              <FaEnvelope /> Email Me
            </a>
            <a href={profile.resumeFile} download className="btn-secondary">
              <FaDownload /> Download Resume
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3 max-w-2xl mx-auto text-left">
            <a
              href={`mailto:${profile.email}`}
              className="pill !justify-start !py-3 !px-4"
            >
              <FaEnvelope className="text-accent" />
              <span className="truncate">{profile.email}</span>
            </a>
            <a href={`tel:${profile.phone}`} className="pill !justify-start !py-3 !px-4">
              <FaPhoneAlt className="text-accent" />
              <span>{profile.phone}</span>
            </a>
            <span className="pill !justify-start !py-3 !px-4">
              <FaMapMarkerAlt className="text-accent" />
              <span>{profile.location}</span>
            </span>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
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
          </div>
        </div>
      </Reveal>
    </section>
  );
}
