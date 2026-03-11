import { useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import {
  RoundedBox,
  MeshTransmissionMaterial,
  Environment,
  CameraControls,
} from "@react-three/drei";
import { useInView } from "../hooks/useInView";
import { Download } from "../assets/Download";

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

function ContactScene({
  mouseNorm,
}: {
  mouseNorm: React.RefObject<{ x: number; y: number }>;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const controlsRef = useRef<CameraControls>(null);
  const fitMeshRef = useRef<THREE.Mesh>(null);
  const { size } = useThree();
  const isNarrow = size.width < 768;

  useEffect(() => {
    const intro = async () => {
      if (!controlsRef.current || !fitMeshRef.current) return;
      controlsRef.current.dolly(-10);
      controlsRef.current.smoothTime = 1.3;
      await controlsRef.current.fitToBox(fitMeshRef.current, true);
    };
    intro();
  }, []);

  useEffect(() => {
    if (controlsRef.current && fitMeshRef.current) {
      controlsRef.current.fitToBox(fitMeshRef.current, true);
    }
  }, [isNarrow]);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    mouse.current.x += (mouseNorm.current.x - mouse.current.x) * 0.04;
    mouse.current.y += (mouseNorm.current.y - mouse.current.y) * 0.04;
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

      <mesh
        ref={fitMeshRef}
        scale={isNarrow ? [3, 3, 3] : [6, 4, 4]}
        position={isNarrow ? [3, 0, 0] : [0, 0, 0]}
        visible={true}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial
          wireframe
          visible={false}
          color="orange"
          opacity={0.53}
          transparent
        />
      </mesh>

      <CameraControls ref={controlsRef} enabled={false} makeDefault />
    </>
  );
}

export function Contact() {
  const { ref, inView } = useInView();
  const mouseNorm = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      mouseNorm.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseNorm.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <div className="relative overflow-hidden">
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
          className="block text-[16px] font-normal text-muted hover:text-foreground transition-colors duration-200 mb-4"
        >
          010-8217-6450
        </a>

        <p className="text-[14px] font-normal leading-normal text-muted mb-12">
          미처 담지 못한 내용은{" "}
          <span className="text-foreground font-medium">면접</span>과{" "}
          <span className="text-foreground font-medium">피그마 포트폴리오</span>
          에서 직접 보여드리겠습니다. 감사합니다.
        </p>

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
              {download && <Download />}
              {label}
            </a>
          ))}
        </div>

        <footer className="border-t border-border pt-8">
          <p className="text-[12px] font-normal leading-normal text-muted">
            © 2026 김준혁
          </p>
        </footer>
      </section>
      <div className="h-60 md:h-auto md:absolute md:inset-0 md:z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 6] }} gl={{ alpha: true }}>
          <ContactScene mouseNorm={mouseNorm} />
        </Canvas>
      </div>
    </div>
  );
}
