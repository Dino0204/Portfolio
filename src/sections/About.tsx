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

export function About() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-32 px-6 md:px-16 lg:px-24 max-w-5xl mx-auto w-full fade-up-scroll ${inView ? "is-visible" : ""}`}
    >
      <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-muted mb-4">
        About
      </p>
      <h2 className="text-[48px] font-bold leading-[1.1] text-foreground mb-10">
        프론트엔드 개발자
      </h2>

      <div className="mb-16 space-y-4 max-w-2xl">
        <p className="text-[18px] font-normal leading-[1.6] text-foreground">
          17세 고등학생으로, 실사용자가 있는 서비스를 직접 기획하고 출시한
          경험을 가진 프론트엔드 개발자입니다.
        </p>
        <p className="text-[16px] font-normal leading-[1.6] text-muted">
          학교 인증 플랫폼부터 IoT 시스템까지, 다양한 도메인에서 팀을 이끌며
          실질적인 문제를 해결해왔습니다.
        </p>
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
