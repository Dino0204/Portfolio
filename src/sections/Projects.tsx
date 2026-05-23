import { useState } from "react";
import { Github } from "../assets/Github";
import { LiquidGlassButton } from "../components/LiquidGlassButton";
import { useInView } from "../hooks/useInView";

type CaseStudy = {
  title: string;
  tags: string[];
  problem: string;
  cause: string;
  solution: string;
  metrics?: string[];
};

type Project = {
  num: string;
  name: string;
  description: string;
  period: string;
  role: string;
  team: string;
  metric: string;
  github: string;
  skills: string[];
  cases?: CaseStudy[];
};

const SIDE_PROJECTS = [
  {
    name: "DONDON",
    description: "게이미피케이션 기반 청소년 금융 지식 관리 플랫폼",
    role: "Frontend Developer",
    github: "https://github.com/NFTeenn/FE",
    skills: ["React", "TypeScript", "Tanstack Query", "Tailwind CSS"],
  },
  {
    name: "Portfolio",
    description: "개인 포트폴리오 웹사이트",
    role: "Frontend Developer",
    github: "https://github.com/Dino0204/Portfolio",
    skills: ["React Three Fiber", "Tailwind CSS"],
  },
  {
    name: "HALO",
    description: "스크롤 애니메이션 기반 5.18 전개 과정 시뮬레이션",
    role: "Frontend Developer",
    github: "https://github.com/Dino0204/HALO",
    skills: ["React", "Scroll Animation"],
  },
  {
    name: "SSD",
    description: "IoT 기반 독거노인 고립 방지 시스템",
    role: "IOT",
    github: "https://github.com/HangeonCare",
    skills: ["Raspberry Pi", "Python", "React Native", "TypeScript"],
  },
  {
    name: "RE-World",
    description: "Web Based BattleRoyale FPS",
    role: "FullStack Developer",
    github: "https://github.com/Dino0204/RE-World",
    skills: ["React Three Fiber", "Elysia.js", "Zod"],
  },
];

const PROJECTS: Project[] = [
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
    cases: [
      {
        title: "초기 진입 경험 개선을 위한 Web Vitals 최적화",
        tags: ["교내 인증 관리 활용도 높이기", "성능 개선 및 모니터링"],
        problem:
          "학생이 인증 현황을 판단하기 위해 실시간으로 확인해야 하는 점수와 활동 정보가 첫 화면 로딩 지연으로 즉시 표시되지 않는 문제가 있었습니다.",
        cause:
          "Lighthouse 측정 결과 LCP와 CLS가 낮게 나타났고, 두 지표를 우선 개선 대상으로 선정했습니다. CLS는 데이터 도착 후 화면 구조가 크게 바뀌는 것이 원인이라 판단했고, 로딩 중 콘텐츠 영역을 고정할 fallback UI가 없다는 점을 문제로 특정했습니다. LCP는 클라이언트 렌더링 이후에야 데이터 요청이 시작되어 콘텐츠가 늦게 표시되는 구조임을 확인했습니다.",
        solution:
          "fallback으로 스켈레톤 UI가 콘텐츠 영역을 유지하도록 구성해 CLS를 0.294에서 0으로 개선했습니다. prefetch로 첫 화면 데이터를 서버에서 미리 가져오도록 변경해 LCP를 2.8s에서 2.0s로 개선했습니다. 이후 Lighthouse JSON을 분석한 결과 변동 폭이 큰 원인이 2MB 로컬 Pretendard 폰트임을 확인했고, CDN 기반 가변 웹폰트로 전환해 해당 병목을 제거하며 LCP를 2.0s에서 0.4s로 추가 개선했습니다.",
        metrics: ["LCP 2.8s → 0.4s", "CLS 0.294 → 0", "성능 70 → 100"],
      },
    ],
  },
  {
    num: "02",
    name: "FLOODING",
    description: "통합 학교 관리 시스템",
    period: "2025.03 — 2025.12",
    role: "CPO · Frontend Part Leader",
    team: "FE 6 · BE 6 · App 3 · DevOps 2 · AI 2 · Design 1 · PM 3 (23인)",
    metric: "분산된 학교 서비스 → 단일 플랫폼으로 통합",
    github: "https://github.com/team-incube/Flooding-Client-V2",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Axios",
      "Tanstack Query",
      "Tailwind CSS",
    ],
    cases: [
      {
        title: "Next.js 페이지 전환 시 a11y focus 부작용 제거",
        tags: ["OAuth 콜백 이후 App Router 자동 포커스 제거"],
        problem:
          "로그인 완료 후 메인 페이지 진입 시, 화면 상단에 파란색과 흰색 줄이 나타나는 문제가 있었습니다.",
        cause:
          '초기에는 헤더 컴포넌트의 outline 스타일 또는 전역 CSS 문제로 추정했으나, 헤더를 제거해도 줄이 사라지지 않고 다른 컴포넌트로 줄이 옮겨졌습니다. Next.js App Router 클라이언트 번들(layout-router.js)을 분석한 결과, router.replace("/") 같은 soft navigation 완료 후 새 페이지의 첫 DOM 요소에 프로그래밍 방식으로 .focus()를 자동 호출하는 동작을 확인했습니다. 브라우저 기본 focus outline이 이 호출로 렌더링되어 시각적으로 드러난 것이 원인이었습니다.',
        solution:
          'router.replace("/", { scroll: false })로 변경해 Next.js가 내부적으로 묶어 관리하는 포커스/스크롤 처리에서 자동 포커스를 함께 비활성화했습니다.',
      },
      {
        title: "SSE 연결 누수로 인한 전체 API 중단 문제 해결",
        tags: ["자습 일대일 신청 처리 및 SSE 연결 오류 수정"],
        problem:
          "자습 출석 현황을 SSE로 실시간 반영하는 기능에서, 페이지를 이동하거나 새로고침할 때마다 SSE 서버 연결이 닫히지 않고 누적되어 API 전체가 응답하지 않는 문제가 발생했습니다.",
        cause:
          "기존 구조는 Node.js Readable 스트림을 Readable.toWeb()으로 브라우저 표준 스트림으로 변환해 응답으로 내보내는 방식이었습니다. 이 방식은 클라이언트 연결이 끊겨도 업스트림을 정리하는 로직이 내장되어 있지 않아, 프록시 서버와 SSE 서버 간의 연결이 그대로 유지됐습니다. EventSource는 연결이 끊기면 3초 간격으로 자동 재연결하므로 매 업스트림이 계속 쌓였고, 누적된 업스트림이 DB 커넥션을 점유하면서 Hikari 커넥션 풀이 고갈되어 API 전체가 응답 불능 상태에 빠졌습니다.",
        solution:
          "Readable.toWeb() 대신 new ReadableStream으로 직접 구성해, cancel() 콜백과 AbortSignal의 abort 리스너 양쪽에서 upstream.destroy()를 호출하도록 했습니다. 이를 통해 브라우저로부터 끊김 신호가 전달되면 즉시 업스트림 연결이 중단되며 SSE 누수 문제가 해결됐습니다.",
      },
    ],
  },
];

const hasGithub = (p: { github?: string }) => Boolean(p.github);

export function Projects() {
  const { ref, inView } = useInView();
  const [openProject, setOpenProject] = useState<string | null>(null);

  return (
    <section
      id="projects"
      ref={ref}
      className={`py-32 px-6 md:px-16 lg:px-24 max-w-5xl mx-auto w-full fade-up-scroll ${inView ? "is-visible" : ""}`}
    >
      <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-muted mb-4">
        Projects
      </p>
      <h2 className="text-[48px] font-bold leading-[1.1] text-foreground mb-16">
        프로젝트
      </h2>

      <div className="divide-y divide-border">
        {PROJECTS.map((project, i) => {
          const isOpen = openProject === project.name;
          const cases = project.cases ?? [];
          const hasCases = cases.length > 0;

          return (
            <div
              key={project.name}
              className={`relative group flex gap-6 md:gap-10 py-8 md:py-10 stagger-child ${inView ? "is-visible" : ""}`}
              style={
                { "--stagger-delay": `${i * 60}ms` } as React.CSSProperties
              }
            >
              <div className="absolute inset-0 -z-10 pointer-events-none">
                <img
                  className="transform-3d drop-shadow-lg h-40 absolute -rotate-z-5 translate-x-1/2 translate-y-1/2 right-30 hidden sm:block"
                  src={`${project.name}_logo.svg`}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display =
                      "none";
                  }}
                />
              </div>

              {/* 번호 컬럼 */}
              <span className="text-[11px] font-medium tracking-[0.15em] text-muted pt-2 shrink-0 w-6">
                {project.num}
              </span>

              {/* 콘텐츠 */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4 mb-3">
                  {hasGithub(project) ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[clamp(2rem,5vw,3.5rem)] font-bold leading-none text-foreground group-hover:text-accent transition-colors duration-300"
                    >
                      {project.name}
                      <svg
                        width="0.5em"
                        height="0.5em"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all duration-300"
                      >
                        <path d="M7 17L17 7M17 7H7M17 7v10" />
                      </svg>
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-[clamp(2rem,5vw,3.5rem)] font-bold leading-none text-foreground">
                      {project.name}
                    </span>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 mt-1 text-muted hover:text-foreground transition-colors duration-200"
                      aria-label={`${project.name} GitHub`}
                    >
                      <Github />
                    </a>
                  )}
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

                {/* 케이스 스터디 토글 */}
                {hasCases && (
                  <div className="mt-6">
                    <button
                      type="button"
                      onClick={() =>
                        setOpenProject(isOpen ? null : project.name)
                      }
                      aria-expanded={isOpen}
                      aria-controls={`cases-${project.name}`}
                      className="inline-flex items-center gap-2 text-[12px] font-medium tracking-[0.05em] uppercase text-muted hover:text-foreground transition-colors duration-200"
                    >
                      <span>
                        케이스 스터디 {cases.length}건{" "}
                        {isOpen ? "닫기" : "보기"}
                      </span>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>

                    <div
                      id={`cases-${project.name}`}
                      className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100 mt-6" : "grid-rows-[0fr] opacity-0"}`}
                    >
                      <div className="overflow-hidden">
                        <div className="space-y-6">
                          {cases.map((c) => (
                            <article
                              key={c.title}
                              className="border border-border rounded-lg p-5 md:p-6 bg-surface/40"
                            >
                              <header className="mb-5">
                                <h3 className="text-[clamp(1.05rem,1.8vw,1.25rem)] font-semibold leading-[1.3] text-foreground mb-3">
                                  {c.title}
                                </h3>
                                {c.tags.length > 0 && (
                                  <div className="flex flex-wrap gap-2">
                                    {c.tags.map((t) => (
                                      <LiquidGlassButton
                                        key={t}
                                        className="px-2 py-0.5 text-[11px]"
                                      >
                                        {t}
                                      </LiquidGlassButton>
                                    ))}
                                  </div>
                                )}
                              </header>

                              <div className="space-y-5">
                                <CaseBlock label="문제 상황" body={c.problem} />
                                <CaseBlock label="원인 파악" body={c.cause} />
                                <CaseBlock label="해결" body={c.solution} />
                              </div>

                              {c.metrics && c.metrics.length > 0 && (
                                <div className="flex flex-wrap gap-2 mt-6">
                                  {c.metrics.map((m) => (
                                    <LiquidGlassButton
                                      key={m}
                                      className="px-3 py-1 text-[12px] text-accent"
                                    >
                                      {m}
                                    </LiquidGlassButton>
                                  ))}
                                </div>
                              )}
                            </article>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
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
                {hasGithub(project) ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[18px] font-semibold text-foreground group-hover:text-accent transition-colors duration-300"
                  >
                    {project.name}
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all duration-300"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-[18px] font-semibold text-foreground">
                    {project.name}
                  </span>
                )}
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

function CaseBlock({ label, body }: { label: string; body: string }) {
  return (
    <div>
      <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-muted mb-2">
        {label}
      </p>
      <p className="text-[14px] font-normal leading-[1.7] text-foreground/90 whitespace-pre-line">
        {body}
      </p>
    </div>
  );
}
