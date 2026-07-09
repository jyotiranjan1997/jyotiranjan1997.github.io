import { profile } from ".././data/portfolioData";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm text-muted text-center sm:text-left">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p className="text-xs text-muted">Built with Next.js &amp; Tailwind CSS</p>
      </div>
    </footer>
  );
}
