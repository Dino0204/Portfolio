import { ThemeToggle } from "../components/ThemeToggle";

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/Dino0204",
    colorClass: "text-github border-github hover:bg-github",
  },
  {
    label: "Tistory",
    href: "https://dino0204.tistory.com/",
    colorClass: "text-tistory border-tistory hover:bg-tistory",
  },
  {
    label: "Velog",
    href: "https://velog.io/@dino0204/posts",
    colorClass: "text-velog border-velog hover:bg-velog",
  },
];

export function Hero() {
  return (
    <>
      {/* Fixed nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-end px-6 py-4">
        <ThemeToggle />
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 max-w-5xl mx-auto pt-16 w-full">
        {/* Name block */}
        <div
          className="mb-6"
          style={{
            animation: "fade-up 0.6s cubic-bezier(0.16,1,0.3,1) both",
            animationDelay: "0ms",
          }}
        >
          <h1 className="text-[clamp(2.5rem,8vw,5rem)] font-bold leading-[0.95] tracking-tight text-foreground">
            김준혁
          </h1>
          <p className="text-[24px] font-semibold leading-[1.3] text-muted mt-1">
            Kim Joonhyeok
          </p>
        </div>

        {/* Role block */}
        <div
          className="mb-10"
          style={{
            animation: "fade-up 0.6s cubic-bezier(0.16,1,0.3,1) both",
            animationDelay: "80ms",
          }}
        >
          <p className="text-[32px] font-semibold leading-[1.2] text-foreground">
            Frontend Developer
          </p>
          <p className="text-[14px] font-normal leading-[1.5] text-muted mt-1">
            광주소프트웨어마이스터고등학교
          </p>
        </div>

        {/* Social links */}
        <div
          className="flex flex-wrap gap-3"
          style={{
            animation: "fade-up 0.6s cubic-bezier(0.16,1,0.3,1) both",
            animationDelay: "160ms",
          }}
        >
          {SOCIAL_LINKS.map(({ label, href, colorClass }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center px-4 py-1.5 rounded-full border text-sm font-medium transition-colors duration-200 hover:text-surface ${colorClass}`}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <div
          className="mt-20 text-muted"
          style={{
            animation:
              "fade-up 0.6s cubic-bezier(0.16,1,0.3,1) 240ms both, pulse-down 1.8s ease-in-out 840ms infinite",
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </section>
    </>
  );
}
