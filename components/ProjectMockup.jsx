import {
  FaGlobeAmericas,
  FaBriefcase,
  FaGraduationCap,
  FaMobileAlt,
  FaApple,
} from "react-icons/fa";

const mockIconMap = {
  globe: FaGlobeAmericas,
  briefcase: FaBriefcase,
  graduation: FaGraduationCap,
  mobile: FaMobileAlt,
};

const themeMap = {
  cyan: "from-accent/25 via-surface2 to-surface",
  violet: "from-accent2/25 via-surface2 to-surface",
  emerald: "from-accent3/25 via-surface2 to-surface",
  amber: "from-amber-400/25 via-surface2 to-surface",
};

const iconThemeMap = {
  cyan: "text-accent",
  violet: "text-accent2",
  emerald: "text-accent3",
  amber: "text-amber-400",
};

export default function ProjectMockup({ domain, theme = "cyan", mockIcon }) {
  const Icon = mockIconMap[mockIcon] || FaGlobeAmericas;
  const isAppStore = domain === "App Store";

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface2/60">
      <div className="flex items-center gap-1.5 border-b border-border bg-surface2/80 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
        <span className="ml-2 truncate rounded-md bg-base/60 px-2.5 py-0.5 text-[11px] text-muted">
          {isAppStore ? "apps.apple.com" : domain}
        </span>
      </div>
      <div
        className={`relative flex aspect-[16/10] items-center justify-center bg-gradient-to-br ${themeMap[theme]}`}
      >
        <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-[size:24px_24px] opacity-40" />
        {isAppStore ? (
          <div className="relative flex flex-col items-center gap-2">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-ink shadow-lg">
              <FaApple className={`text-3xl ${iconThemeMap[theme]}`} />
            </div>
            <span className="text-xs font-semibold text-gray-300">App Store</span>
          </div>
        ) : (
          <Icon className={`relative text-5xl ${iconThemeMap[theme]}`} />
        )}
      </div>
    </div>
  );
}
