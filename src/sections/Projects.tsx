import { useInView } from "../hooks/useInView";

const PROJECTS = [
  {
    num: "01",
    name: "GSMC",
    description: "학교 인증 플랫폼",
    period: "2025.03 — 2025.12",
    role: "PM · Frontend Part Leader",
    team: "FE 5 · BE 5 · Design 3 · DevOps 2",
    metric: "160+ 사용자 · 92% 시간 단축",
    github: "https://github.com/Team-Incube/GSMC-client",
    tags: ["Next.js 15", "React 19", "TypeScript", "Tanstack Query", "Tailwind CSS", "Zod"],
  },
  {
    num: "02",
    name: "돈돈이",
    description: "게이미피케이션 기반 청소년 금융 지식 관리 플랫폼",
    period: "2024.09 — 2024.11",
    role: "Frontend Developer",
    team: "FE 2 · BE 2 · Design 1",
    metric: "80+ 사용자",
    github: "https://github.com/Team-NFTEEN",
    tags: ["React", "TypeScript", "Tanstack Query", "Tailwind CSS"],
  },
  {
    num: "03",
    name: "DARAM",
    description: "통합 학교 관리 시스템",
    period: "2024.03 — 진행중",
    role: "CPO · Frontend Developer",
    team: "FE 3 · BE 4 · Design 2",
    metric: "기획 + 개발 리드",
    github: "https://github.com/DSM-DARAM",
    tags: ["Next.js", "TypeScript", "Tanstack Query", "Axios"],
  },
  {
    num: "04",
    name: "SSD",
    description: "IoT 기반 고독사 방지 시스템",
    period: "2024.06 — 2024.08",
    role: "Frontend Developer",
    team: "FE 1 · BE 1 · HW 1",
    metric: "한전 빛가람 우수상",
    github: "https://github.com/Team-SSD",
    tags: ["React Native", "Python", "Raspberry Pi"],
  },
];

export function Projects() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-32 px-6 md:px-16 lg:px-24 max-w-5xl mx-auto w-full fade-up-scroll ${inView ? "is-visible" : ""}`}
    >
      <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-muted mb-4">
        Projects
      </p>
      <h2 className="text-[48px] font-bold leading-[1.1] text-foreground mb-16">
        만든 것들
      </h2>

      <div className="divide-y divide-border">
        {PROJECTS.map(({ num, name, description, period, role, team, metric, github, tags }, i) => (
          <div
            key={name}
            className={`group flex gap-6 md:gap-10 py-8 md:py-10 stagger-child ${inView ? "is-visible" : ""}`}
            style={{ "--stagger-delay": `${i * 60}ms` } as React.CSSProperties}
          >
            {/* 번호 컬럼 */}
            <span className="text-[11px] font-medium tracking-[0.15em] text-muted pt-2 shrink-0 w-6">
              {num}
            </span>

            {/* 콘텐츠 */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-none text-foreground group-hover:text-accent transition-colors duration-300">
                  {name}
                </h3>
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 mt-1 text-muted hover:text-foreground transition-colors duration-200"
                  aria-label={`${name} GitHub`}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
              <p className="text-[14px] font-normal text-muted mb-1">
                {description}
              </p>
              <p className="text-[13px] font-medium text-muted mb-1">
                {period} · {role}
              </p>
              <p className="text-[13px] font-normal text-muted mb-2">
                {team}
              </p>
              <p className="text-[14px] font-medium text-accent mb-4">
                {metric}
              </p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-[4px] border border-border text-[11px] font-medium text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
