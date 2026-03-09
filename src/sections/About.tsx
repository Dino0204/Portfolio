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
            광주소프트웨어마이스터고의 17세 학생으로, 실사용자가 있는 서비스를
            직접 기획하고 출시한 경험을 가진 프론트엔드 개발자입니다.
          </p>
          <p className="text-[16px] font-normal leading-[1.6] text-muted">
            인터렉티브한 웹사이트를 좋아합니다.
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
