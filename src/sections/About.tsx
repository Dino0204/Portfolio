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

        <div className="mb-16 space-y-4 max-w-2xl">
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
