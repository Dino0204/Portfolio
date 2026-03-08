import { useInView } from "../hooks/useInView";

const AWARDS = [
  {
    tier: "최고상",
    title: "과학기술정보통신부 장관상",
    event: "2025 SW 마이스터고 연합 해커톤",
    team: "Team All-Around",
    description: "AI 브라우저의 프롬프트 인젝션 공격을 사전에 탐지하기 위한 서비스",
    featured: true,
  },
  {
    tier: "우수상",
    title: "우수상",
    event: "한전 빛가람 에너지밸리 소프트웨어 작품대회",
    team: "Team SSD",
    description: "Raspberry Pi·Python·React Native를 이용한 고독사 방지 시스템",
    featured: false,
  },
  {
    tier: "우수상",
    title: "우수상",
    event: "광주소프트웨어마이스터고 IDEA.FESTIVAL",
    team: "Team NFTEEN",
    description: "게이미피케이션 기반 청소년 금융 지식 관리 플랫폼 돈돈이",
    featured: false,
  },
  {
    tier: "장려상",
    title: "장려상",
    event: "광주소프트웨어마이스터고 DEV.FESTIVAL",
    team: "Team INCUBE",
    description: "GSM 인증제 디지털화 플랫폼 GSMC",
    featured: false,
  },
  {
    tier: "장려상",
    title: "장려상",
    event: "광주소프트웨어마이스터고 C언어 코딩 콘테스트",
    team: "개인",
    description: "파일 입출력 기반 전적 검색 기능을 가진 2D 도트 턴제 게임",
    featured: false,
  },
];

export function Awards() {
  const { ref, inView } = useInView();

  return (
    <section
      id="awards"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-32 px-6 md:px-16 lg:px-24 max-w-5xl mx-auto w-full fade-up-scroll ${inView ? "is-visible" : ""}`}
    >
      {/* 헤더 + 총 수상 횟수 */}
      <div className="flex items-end justify-between mb-16">
        <div>
          <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-muted mb-4">
            Awards
          </p>
          <h2 className="text-[48px] font-bold leading-[1.1] text-foreground">
            수상
          </h2>
        </div>
        <div className="text-right">
          <p className="text-[clamp(3rem,8vw,6rem)] font-bold leading-none text-accent tabular-nums">
            5
          </p>
          <p className="text-[12px] font-medium tracking-wide text-muted uppercase">
            수상
          </p>
        </div>
      </div>

      <div className="divide-y divide-border">
        {AWARDS.map(({ tier, title, event, team, description, featured }, i) =>
          featured ? (
            <div
              key={event}
              className={`border-l-2 border-accent pl-6 py-8 stagger-child ${inView ? "is-visible" : ""}`}
              style={{ "--stagger-delay": `${i * 80}ms` } as React.CSSProperties}
            >
              <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-accent mb-2">
                {tier}
              </p>
              <p className="text-[clamp(1.25rem,3vw,1.75rem)] font-bold leading-[1.2] text-foreground mb-2">
                {title}
              </p>
              <p className="text-[13px] font-medium text-muted mb-1">
                {event} · {team}
              </p>
              <p className="text-[13px] font-normal text-muted">
                {description}
              </p>
            </div>
          ) : (
            <div
              key={event}
              className={`py-6 stagger-child ${inView ? "is-visible" : ""}`}
              style={{ "--stagger-delay": `${i * 80}ms` } as React.CSSProperties}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-muted mb-1">
                    {tier}
                  </p>
                  <p className="text-[16px] font-semibold text-foreground mb-1">
                    {event}
                  </p>
                  <p className="text-[13px] font-normal text-muted mb-1">
                    {team}
                  </p>
                  <p className="text-[13px] font-normal text-muted">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}
