import { Github } from "../assets/Github";
import { LiquidGlassButton } from "../components/LiquidGlassButton";
import { useInView } from "../hooks/useInView";

const SIDE_PROJECTS = [
  {
    name: "Portfolio",
    description: "개인 포트폴리오 웹사이트",
    role: "Frontend Developer",
    github: "https://github.com/Dino0204/Portfolio",
    skills: ["React Three Fiber", "Tailwind CSS"],
  },
  {
    name: "SSD",
    description: "IoT 기반 독거노인 고립 방지 시스템",
    role: "Frontend Developer",
    github: "https://github.com/HangeonCare",
    skills: ["React Native", "Raspberry Pi", "TypeScript"],
  },
  {
    name: "RE-World",
    description: "Web Based BattleRoyale FPS",
    role: "FullStack Developer",
    github: "https://github.com/Dino0204/RE-World",
    skills: ["React Three Fiber", "Elysia.js", "Zod"],
  },
];

const PROJECTS = [
  {
    num: "01",
    name: "GSMC",
    description: "학교 인증 플랫폼",
    period: "2025.03 — 2025.12",
    role: "PM · Frontend Part Leader",
    team: "FE 5 · BE 5 · Design 3 · DevOps 2",
    metric: "160+ 사용자 · 92% 시간 단축",
    github: "https://github.com/Team-Incube/GSMC-client-V3",
    skills: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tanstack Query",
      "Tailwind CSS",
      "Zod",
    ],
  },
  {
    num: "02",
    name: "DONDON",
    description: "게이미피케이션 기반 청소년 금융 지식 관리 플랫폼",
    period: "2024.09 — 2024.11",
    role: "Frontend Developer",
    team: "FE 3 · BE 2 · Design 1",
    metric: "광주소프트웨어마이스터고 IDEA.FESTIVAL 우수상 수상",
    github: "https://github.com/NFTeenn/FE",
    skills: ["React", "TypeScript", "Tanstack Query", "Tailwind CSS"],
  },
  {
    num: "03",
    name: "DARAM",
    description: "통합 학교 관리 시스템",
    period: "2024.03 — 진행중",
    role: "CPO · Frontend Developer",
    team: "FE 6 · BE 6 · Design 1 · App 3 · DevOps 2 · AI 2 · PM 3",
    metric: "23+명 개발팀 리드",
    github: "https://github.com/Team-Incube/Flooding-Client-V2",
    skills: ["Next.js", "TypeScript", "Tanstack Query", "Axios"],
  },
];

export function Projects() {
  const { ref, inView } = useInView();

  return (
    <section
      id="projects"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-32 px-6 md:px-16 lg:px-24 max-w-5xl mx-auto w-full fade-up-scroll ${inView ? "is-visible" : ""}`}
    >
      <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-muted mb-4">
        Projects
      </p>
      <h2 className="text-[48px] font-bold leading-[1.1] text-foreground mb-16">
        프로젝트
      </h2>

      <div className="divide-y divide-border">
        {PROJECTS.map((project, i) => (
          <div
            key={project.name}
            className={`relative group flex gap-6 md:gap-10 py-8 md:py-10 sskillger-child ${inView ? "is-visible" : ""}`}
            style={
              { "--sskillger-delay": `${i * 60}ms` } as React.CSSProperties
            }
          >
            <div className="absolute inset-0 -z-10 pointer-events-none">
              <img
                className="transform-3d drop-shadow-lg h-40 absolute -rotate-z-5 translate-x-1/2 translate-y-1/2 right-30 hidden sm:block"
                src={`${project.name}_logo.svg`}
              />
            </div>

            {/* 번호 컬럼 */}
            <span className="text-[11px] font-medium tracking-[0.15em] text-muted pt-2 shrink-0 w-6">
              {project.num}
            </span>

            {/* 콘텐츠 */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-none text-foreground group-hover:text-accent transition-colors duration-300">
                  {project.name}
                </h3>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 mt-1 text-muted hover:text-foreground transition-colors duration-200"
                  aria-label={`${project.name} GitHub`}
                >
                  <Github />
                </a>
              </div>
              <p className="text-[14px] font-normal text-muted mb-1">
                {project.description}
              </p>
              <p className="text-[13px] font-medium text-muted mb-1">
                {project.period} · {project.role}
              </p>
              <p className="text-[13px] font-normal text-muted mb-2">
                {project.team}
              </p>
              <p className="text-[14px] font-medium text-accent mb-4">
                {project.metric}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <LiquidGlassButton
                    key={skill}
                    className="px-2 py-0.5 text-[12px]"
                  >
                    {skill}
                  </LiquidGlassButton>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 사이드 프로젝트 서브 섹션 */}
      <div className="border-t border-border mt-16 pt-10">
        <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-muted mb-8">
          Other Projects
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {SIDE_PROJECTS.map((project, i) => (
            <div
              key={project.name}
              className={`border border-border rounded-lg p-5 group hover:border-accent/40 transition-colors stagger-child ${inView ? "is-visible" : ""}`}
              style={
                {
                  "--stagger-delay": `${(PROJECTS.length + i) * 60}ms`,
                } as React.CSSProperties
              }
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="text-[18px] font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                  {project.name}
                </h3>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-muted hover:text-foreground transition-colors duration-200"
                    aria-label={`${project.name} GitHub`}
                  >
                    <Github />
                  </a>
                )}
              </div>
              <p className="text-[13px] text-muted mb-1">
                {project.description}
              </p>
              <p className="text-[12px] text-muted mb-3">{project.role}</p>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <LiquidGlassButton
                    key={skill}
                    className="px-2 py-0.5 text-[12px]"
                  >
                    {skill}
                  </LiquidGlassButton>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
