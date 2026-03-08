import { useInView } from "../hooks/useInView";

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

const METRICS = [
  { value: "160+", label: "실사용자" },
  { value: "92%", label: "시간 단축" },
  { value: "80+", label: "서비스 사용자" },
];

export function About() {
  const { ref, inView } = useInView();

  return (
    <section
      id="about"
      ref={ref}
      className={`py-32 px-6 md:px-16 lg:px-24 max-w-5xl mx-auto w-full fade-up-scroll ${inView ? "is-visible" : ""}`}
    >
      <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-muted mb-4">
        About
      </p>
      <h2 className="text-[48px] font-bold leading-[1.1] text-foreground mb-10">
        프론트엔드 개발자
      </h2>

      <div className="mb-16 space-y-4 max-w-2xl">
        <p className="text-[24px] font-normal leading-[1.4] text-foreground">
          17세 고등학생으로, 실사용자가 있는 서비스를 직접 기획하고 출시한
          경험을 가진 프론트엔드 개발자입니다.
        </p>
        <p className="text-[16px] font-normal leading-[1.6] text-muted">
          협업을 통해 성장하며, 사용자 경험을 최우선으로 생각합니다. 문제의
          본질을 학습하고, 기술을 도구로 활용합니다.
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

      <div className="flex gap-12 mb-16 border-t border-b border-border py-10">
        {METRICS.map(({ value, label }, i) => (
          <div
            key={label}
            className={`stagger-child ${inView ? "is-visible" : ""}`}
            style={{ "--stagger-delay": `${i * 80}ms` } as React.CSSProperties}
          >
            <p className="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-none text-accent tabular-nums">
              {value}
            </p>
            <p className="text-[12px] font-medium tracking-wide text-muted mt-2 uppercase">
              {label}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {SKILLS.map((skill) => (
          <span
            key={skill}
            className="inline-flex items-center px-3 py-1 rounded-full border border-border text-[12px] font-medium text-foreground"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
