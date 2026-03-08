import { useInView } from "../hooks/useInView";

const AWARDS = [
  { title: "과학기술정보통신부 장관상", count: 1 },
  { title: "우수상", count: 2 },
  { title: "장려상", count: 2 },
];

export function Awards() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-32 px-6 md:px-16 lg:px-24 max-w-5xl mx-auto w-full fade-up-scroll ${inView ? "is-visible" : ""}`}
    >
      <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-muted mb-4">
        Awards
      </p>
      <h2 className="text-[48px] font-bold leading-[1.1] text-foreground mb-16">
        수상
      </h2>

      <div className="divide-y divide-border">
        {AWARDS.map(({ title, count }) => (
          <div
            key={title}
            className="flex items-center justify-between py-6"
          >
            <span className="text-[18px] font-normal leading-[1.6] text-foreground">
              {title}
            </span>
            {count > 1 && (
              <span className="text-[14px] font-medium text-muted">
                × {count}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
