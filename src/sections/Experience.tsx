import { useInView } from "../hooks/useInView";

const ACTIVITIES = [
  {
    title: "제 28회 앱잼",
    period: "2024",
    description:
      "“교외의 개발은 어떻게 진행될까?”라는 호기심에서 참여한 앱잼은 많은 경험을 얻을 수 있는 해커톤이였습니다. 다양한 나이, 직무의 개발자분들을 만나며 많은 소통을 할 수 있는 좋은 기회였습니다.",
  },
  {
    title: "Frontend Study",
    period: "2024 — 진행중",
    description:
      "광주소마고 프론트엔드 스터디 참여  · 졸업생 선배, 후배들과 함께 프론트엔드 소식을 공유하고 매주 블로그 발표 활동을 합니다.",
  },
  {
    title: "대한민국 SW 융합 해커톤 대회",
    period: "2025",
    description:
      "GSMC 프로젝트에 학생들의 활동을 바탕으로 포트폴리오 초안을 작성해주는 Multi Agent 기반의 AI를 구축하였습니다.",
  },
  {
    title: "R3F로 배우는 인터렉티브 3D 웹 개발",
    period: "2025",
    description:
      "한태재님의 React Three fiber(R3F)로 배우는 인터렉티브 3D 웹 개발 강의를 수료하였습니다.",
  },
  {
    title: "AI TECH+",
    period: "2025",
    description:
      "기업체, 일반인분 등을 대상으로 GSMC 프로젝트에 대한 설명과 발표를 맡았습니다.",
  },
];

const CERTIFICATIONS = [
  {
    title: "TOEIC",
    score: "750점 (LC 415 · RC 335)",
  },
  {
    title: "YBM IT Coding Specialist Professional 1급",
    score: "606점 · Python",
  },
  {
    title: "정보처리산업기사",
    score: "92.1점 · 과정형평가",
  },
];

const OPEN_SOURCE = [
  {
    title: "백준허브",
    detail: "이슈 보고 #309",
    url: "https://github.com/BaekjoonHub/BaekjoonHub/issues/309",
  },
];

export function Experience() {
  const { ref, inView } = useInView();

  return (
    <section
      id="experience"
      ref={ref}
      className={`py-32 px-6 md:px-16 lg:px-24 max-w-5xl mx-auto w-full fade-up-scroll ${inView ? "is-visible" : ""}`}
    >
      <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-muted mb-4">
        Experience
      </p>
      <h2 className="text-[48px] font-bold leading-[1.1] text-foreground mb-16">
        활동 & 자격증
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* 좌: Activities */}
        <div>
          <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-muted mb-6">
            Activities
          </p>
          <div className="divide-y divide-border">
            {ACTIVITIES.map(({ title, period, description }, i) => (
              <div
                key={title}
                className={`py-5 stagger-child ${inView ? "is-visible" : ""}`}
                style={
                  { "--stagger-delay": `${i * 60}ms` } as React.CSSProperties
                }
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-[15px] font-semibold text-foreground leading-[1.4]">
                      {title}
                    </p>
                    <p className="text-[13px] font-normal text-muted mt-0.5">
                      {description}
                    </p>
                  </div>
                  <span className="text-[11px] font-medium text-muted shrink-0 mt-0.5">
                    {period}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 우: Certifications + Open Source */}
        <div className="flex flex-col gap-12">
          <div>
            <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-muted mb-6">
              Open Source
            </p>
            <div className="divide-y divide-border">
              {OPEN_SOURCE.map(({ title, detail, url }, i) => (
                <div
                  key={title}
                  className={`py-5 stagger-child ${inView ? "is-visible" : ""}`}
                  style={
                    {
                      "--stagger-delay": `${(i + ACTIVITIES.length + CERTIFICATIONS.length) * 60}ms`,
                    } as React.CSSProperties
                  }
                >
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 hover:text-accent transition-colors duration-200"
                  >
                    <div>
                      <p className="text-[15px] font-semibold text-foreground group-hover:text-accent leading-[1.4] transition-colors duration-200">
                        {title}
                      </p>
                      <p className="text-[13px] font-normal text-muted mt-0.5">
                        {detail}
                      </p>
                    </div>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-muted shrink-0"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-muted mb-6">
              Certifications
            </p>
            <div className="divide-y divide-border">
              {CERTIFICATIONS.map(({ title, score }, i) => (
                <div
                  key={title}
                  className={`py-5 stagger-child ${inView ? "is-visible" : ""}`}
                  style={
                    {
                      "--stagger-delay": `${(i + ACTIVITIES.length) * 60}ms`,
                    } as React.CSSProperties
                  }
                >
                  <p className="text-[15px] font-semibold text-foreground leading-[1.4]">
                    {title}
                  </p>
                  <p className="text-[13px] font-normal text-muted mt-0.5">
                    {score}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
