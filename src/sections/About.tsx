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
            시작했습니다. 단순히 동작하는 코드를 넘어, 화면을 직접 설계하고 직접
            구현하는 개발자가 되고 싶습니다. 디자인과 개발이 별개의 영역이라는
            걸 알면서도, 그 경계를 스스로 넘고 싶은 욕망이 있거든요. 아직은
            아무리 고민해도 머릿속의 그림이 화면에 그대로 옮겨지지 않을 때가
            많습니다. 그래서 요즘은 AI와 다양한 레퍼런스를 활용해 디자인을
            익히고, 직접 웹사이트를 만들어보며 감각을 키워가고 있습니다.
            학생이라 경험은 아직 부족하지만, 이 과정 하나하나가 언젠가 온전히 내
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
