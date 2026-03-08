import { useInView } from "../hooks/useInView";

const PROJECTS = [
  {
    name: "GSMC",
    description: "학교 인증 플랫폼 · 160+ 사용자, 92% 시간 단축",
    tags: ["Next.js", "TypeScript", "Tanstack Query"],
  },
  {
    name: "돈돈이",
    description: "청소년 금융 리터러시 · 게임화 · 80+ 사용자",
    tags: ["React", "TypeScript"],
  },
  {
    name: "DARAM",
    description: "통합 학교 관리 시스템 · CPO + Frontend",
    tags: ["Next.js", "TypeScript"],
  },
  {
    name: "SSD",
    description: "IoT 독거노인 고독사 예방 · React Native + Raspberry Pi",
    tags: ["React Native"],
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((project) => (
          <div
            key={project.name}
            className="bg-surface border border-border rounded-[8px] p-8"
            style={{ boxShadow: "var(--shadow-sm)" }}
          >
            <h3 className="text-[24px] font-semibold leading-[1.3] text-foreground mb-3">
              {project.name}
            </h3>
            <p className="text-[14px] font-normal leading-[1.5] text-muted mb-6">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-[4px] border border-border text-[11px] font-medium text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
