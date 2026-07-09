import { profile } from ".././data/portfolioData";

export default function Footer() {
  return (
    <footer className="border-t border-border">
  <div className="mx-auto max-w-6xl px-5 sm:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
    <div className="text-center md:text-left">
      <p className="text-sm font-medium text-white">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </p>
      <p className="text-xs text-muted mt-1">
        Senior Full Stack Developer • MERN Stack • React • Next.js • Node.js
      </p>
    </div>

    <p className="text-xs text-muted text-center md:text-right">
      Passionately building modern, scalable & user-focused web applications.
    </p>
  </div>
</footer>
  );
}
