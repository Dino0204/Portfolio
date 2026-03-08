import { useInView } from "../hooks/useInView";

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

export function Contact() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-32 px-6 md:px-16 lg:px-24 max-w-5xl mx-auto w-full fade-up-scroll ${inView ? "is-visible" : ""}`}
    >
      <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-muted mb-4">
        Contact
      </p>
      <h2 className="text-[48px] font-bold leading-[1.1] text-foreground mb-16">
        연락하기
      </h2>

      <div className="space-y-3 mb-12">
        <a
          href="mailto:kimjoonhyeok.dino@gmail.com"
          className="block text-[18px] font-normal leading-[1.6] text-foreground hover:text-accent transition-colors duration-200"
        >
          kimjoonhyeok.dino@gmail.com
        </a>
        <a
          href="tel:01082176450"
          className="block text-[18px] font-normal leading-[1.6] text-muted hover:text-foreground transition-colors duration-200"
        >
          010-8217-6450
        </a>
      </div>

      <div className="flex flex-wrap gap-3 mb-32">
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

      <footer className="border-t border-border pt-8">
        <p className="text-[12px] font-normal leading-[1.5] text-muted">
          © 2026 김준혁
        </p>
      </footer>
    </section>
  );
}
