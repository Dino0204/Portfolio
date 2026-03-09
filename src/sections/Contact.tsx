import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import {
  RoundedBox,
  MeshTransmissionMaterial,
  Environment,
} from "@react-three/drei";
import { useInView } from "../hooks/useInView";

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/Dino0204",
    colorClass: "text-github border-github hover:bg-github",
  },
  {
    label: "Tistory",
    href: "https://dino0204.tistory.com/",
    colorClass: "text-tistory border-tistory hover:bg-tistory",
  },
  {
    label: "Velog",
    href: "https://velog.io/@dino0204/posts",
    colorClass: "text-velog border-velog hover:bg-velog",
  },
  {
    label: "Portfolio · Download",
    href: "/portfolio.pdf",
    colorClass:
      "text-red-500 border-red-500 hover:bg-red-500 hover:text-red-500",
    download: "김준혁포트폴리오.pdf",
  },
];

function DownloadIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        fill="currentColor"
        d="m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11zm-6 4q-.825 0-1.412-.587T4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413T18 20z"
      />
    </svg>
  );
}

function ContactScene() {
  const meshRef = useRef<THREE.Mesh>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useFrame(({ clock, pointer }) => {
    const t = clock.elapsedTime;
    mouse.current.x += (pointer.x - mouse.current.x) * 0.04;
    mouse.current.y += (pointer.y - mouse.current.y) * 0.04;
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.04 + mouse.current.y * 0.25;
      meshRef.current.rotation.y = t * 0.07 + mouse.current.x * 0.25;
    }
  });

  return (
    <>
      <Environment preset="city" background={false} />
      <RoundedBox
        ref={meshRef}
        position={[3, 0, 0]}
        rotation={[2, 0, 3]}
        scale={2}
        castShadow
      >
        <MeshTransmissionMaterial
          transmission={1}
          thickness={2.5}
          roughness={0}
          chromaticAberration={0.15}
          anisotropicBlur={0.05}
          ior={1.8}
          metalness={0.1}
          envMapIntensity={2}
          samples={8}
          resolution={512}
          backside
          backsideThickness={-1}
        />
      </RoundedBox>
    </>
  );
}

export function Contact() {
  const { ref, inView } = useInView();

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 6] }} gl={{ alpha: true }}>
          <ContactScene />
        </Canvas>
      </div>
      <section
        id="contact"
        ref={ref as React.RefObject<HTMLElement>}
        className={`relative z-10 py-32 px-6 md:px-16 lg:px-24 max-w-5xl mx-auto w-full fade-up-scroll ${inView ? "is-visible" : ""}`}
      >
        <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-muted mb-12">
          Contact
        </p>

        {/* 이메일 헤드라인 */}
        <a
          href="mailto:kimjoonhyeok.dino@gmail.com"
          className="block text-[clamp(1.5rem,4vw,3rem)] font-bold leading-[1.1] text-foreground hover:text-accent transition-colors duration-300 mb-4 break-all"
        >
          kimjoonhyeok.dino@gmail.com
        </a>

        <a
          href="tel:01082176450"
          className="block text-[16px] font-normal text-muted hover:text-foreground transition-colors duration-200 mb-12"
        >
          010-8217-6450
        </a>

        <div className="flex flex-wrap gap-3 mb-32">
          {SOCIAL_LINKS.map(({ label, href, colorClass, download }) => (
            <a
              key={label}
              href={href}
              {...(download
                ? { download }
                : { target: "_blank", rel: "noopener noreferrer" })}
              className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border text-sm font-medium transition-colors duration-200 hover:text-surface ${colorClass}`}
            >
              {download && <DownloadIcon />}
              {label}
            </a>
          ))}
        </div>

        <footer className="border-t border-border pt-8">
          <p className="text-[12px] font-normal leading-normal text-muted">
            © 2026 김준혁 · Co-Authored-By: Claude Code
          </p>
        </footer>
      </section>
    </div>
  );
}
