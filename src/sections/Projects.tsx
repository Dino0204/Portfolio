import { Github } from "../assets/Github";
import { LiquidGlassButton } from "../components/LiquidGlassButton";
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
    name: "돈돈이",
    description: "게이미피케이션 기반 청소년 금융 지식 관리 플랫폼",
    period: "2024.09 — 2024.11",
    role: "Frontend Developer",
    team: "FE 3 · BE 2 · Design 1",
    metric: "80+ 사용자",
    github: "https://github.com/Team-NFTEEN",
    skills: ["React", "TypeScript", "Tanstack Query", "Tailwind CSS"],
  },
  {
    num: "03",
    name: "DARAM",
    description: "통합 학교 관리 시스템",
    period: "2024.03 — 진행중",
    role: "CPO · Frontend Developer",
    team: "FE 6 · BE 6 · Design 1 · App 3 · DevOps 2 · AI 2 · PM 3",
    metric: "기획 + 개발 리드",
    github: "https://github.com/DSM-DARAM",
    skills: ["Next.js", "TypeScript", "Tanstack Query", "Axios"],
  },
  {
    num: "04",
    name: "SSD",
    description: "IoT 기반 고독사 방지 시스템",
    period: "2024.06 — 2024.08",
    role: "HW  Developer",
    team: "FE 1 · BE 1 · Design 1 · HW 1",
    metric: "한전 빛가람 우수상",
    github: "https://github.com/Team-SSD",
    skills: ["React Native", "Python", "Raspberry Pi"],
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
            className={`group flex gap-6 md:gap-10 py-8 md:py-10 sskillger-child ${inView ? "is-visible" : ""}`}
            style={
              { "--sskillger-delay": `${i * 60}ms` } as React.CSSProperties
            }
          >
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
    </section>
  );
}
