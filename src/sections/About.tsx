import { useInView } from "../hooks/useInView";
import { LiquidGlassButton } from "../components/LiquidGlassButton";

const SKILLS = [
  "Next.js",
  "React",
  "React Native",
  "TypeScript",
  "Tanstack Query",
  "Axios",
  "Tailwind CSS",
  "React Three Fiber",
  "Zod",
  "React Hook Form",
  "Vercel",
];

const VALUES = [
  {
    id: 1,
    headline: "사용자 피드백을 구체적인 원인 분석과 제품 개선으로 연결합니다.",
    body: "사용자가 느끼는 불편을 단순한 감상으로 두지 않고, 진입 흐름·로딩 상태·권한 분기·에러 화면처럼 실제 사용 순간으로 나누어 원인을 좁힙니다. GSMC에서는 학교 인증제 서비스의 초기 진입 경험을 Web Vitals 기준으로 분석해 첫 방문 시 콘텐츠 노출 지연과 레이아웃 흔들림을 개선했습니다.",
    metrics: ["LCP 2.8s → 0.4s", "CLS 0.294 → 0", "성능 70 → 100"],
  },
  {
    id: 2,
    headline: "팀이 같이 성장할 수 있는 개발 환경을 만듭니다.",
    body: "교내 최대 규모 프로젝트인 플러딩에서 프론트엔드 파트 리더로 활동하며 동아리·기숙사·홈베이스 등 도메인별 책임 범위를 나누고, FSD 구조와 API · 쿼리 패턴을 정리해 팀원이 같은 기준으로 기능을 개발하도록 만들었습니다. 신규 팀원을 위한 클론 코딩 온보딩 과제, 데일리 스크럼, AI 코딩 어시스턴트용 프로젝트 규칙, PR 단계 CI 품질 게이트를 운영해 협업 속도와 코드 품질을 함께 관리했습니다.",
    metrics: ["23인 팀 리딩", "FSD · 온보딩", "PR CI 품질 게이트"],
  },
];

export function About() {
  const { ref, inView } = useInView();

  return (
    <div className="overflow-hidden">
      <section
        id="about"
        ref={ref}
        className={`relative z-10 py-32 px-6 md:px-16 lg:px-24 max-w-5xl mx-auto w-full fade-up-scroll ${inView ? "is-visible" : ""}`}
      >
        <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-muted mb-4">
          About
        </p>
        <h2 className="text-[48px] font-bold leading-[1.1] text-foreground mb-10">
          프론트엔드 개발자
        </h2>

        {/* 가치 명제 — PDF의 메인 메시지 두 가지를 상단 카드로 노출 */}
        <div className="mb-16 space-y-10">
          {VALUES.map(({ id, headline, body, metrics }, i) => (
            <div
              key={id}
              className={`grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 md:gap-x-10 border-t border-border pt-8 stagger-child ${inView ? "is-visible" : ""}`}
              style={
                { "--stagger-delay": `${i * 120}ms` } as React.CSSProperties
              }
            >
              <div className="min-w-0">
                <p className="text-[clamp(1.25rem,2.5vw,1.625rem)] font-semibold leading-[1.35] text-foreground mb-3">
                  {headline}
                </p>
                <p className="text-[15px] font-normal leading-[1.7] text-muted mb-5">
                  {body}
                </p>
                <div className="flex flex-wrap gap-2">
                  {metrics.map((m) => (
                    <LiquidGlassButton
                      key={m}
                      className="px-3 py-1 text-[12px] text-accent"
                    >
                      {m}
                    </LiquidGlassButton>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-16 space-y-4">
          <p className="text-[24px] font-normal leading-[1.4] text-foreground">
            광주소프트웨어마이스터고의 3학년으로, 실사용자가 있는 서비스를 직접
            기획하고 출시한 경험을 가진 프론트엔드 개발자입니다.
          </p>
          <p className="text-[16px] font-normal leading-[1.6] text-muted">
            인터랙티브한 웹사이트에 매료되어 프론트엔드 개발자의 길을 걷기
            시작했습니다. 단순히 동작하는 코드를 넘어, 사용자가 느끼는 경험
            전체를 고민하는 개발자를 지향합니다. 개인적인 관심으로 다양한
            레퍼런스를 참고하고 AI를 활용해 직접 웹 사이트를 만들어보며 감각을
            키우고 있습니다. 이 포트폴리오 사이트도 그 과정의 일부입니다.
            학생이라 경험은 아직 부족하지만, 이 과정 하나하나가 언젠가 온전히 제
            손으로 만드는 서비스를 위한 초석이 될 거라 믿습니다.
          </p>
        </div>

        {/* 교육 블록 */}
        <div className="mb-16 border-t border-border pt-10">
          <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-muted mb-6">
            Education
          </p>
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8">
            <span className="text-[12px] font-medium text-muted shrink-0">
              2024 — 재학중
            </span>
            <div>
              <p className="text-[16px] font-semibold text-foreground leading-[1.4]">
                광주소프트웨어마이스터고등학교
              </p>
              <p className="text-[14px] font-normal text-muted mt-0.5">
                SW개발과 · 웹 개발 전공 · 2027.01 졸업 예정
              </p>
            </div>
          </div>
          <p className="text-[11px] font-normal text-muted mt-4">
            * 산업기능요원으로 복무 가능합니다.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {SKILLS.map((skill) => (
            <LiquidGlassButton key={skill}>{skill}</LiquidGlassButton>
          ))}
        </div>
      </section>
    </div>
  );
}
