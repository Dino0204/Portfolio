import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import {
  Dodecahedron,
  Icosahedron,
  TorusKnot,
  MeshTransmissionMaterial,
  Environment,
} from "@react-three/drei";
import { ThemeToggle } from "../components/ThemeToggle";

function HeroScene({
  scrollProgress,
}: {
  scrollProgress: React.RefObject<number>;
}) {
  const mainRef = useRef<THREE.Mesh>(null);
  const wireRef = useRef<THREE.Mesh>(null);
  const knotRef = useRef<THREE.Mesh>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useFrame(({ clock, pointer }) => {
    const t = clock.elapsedTime;
    const s = scrollProgress.current;

    mouse.current.x += (pointer.x - mouse.current.x) * 0.04;
    mouse.current.y += (pointer.y - mouse.current.y) * 0.04;

    if (mainRef.current) {
      mainRef.current.rotation.x = t * 0.03 + mouse.current.y * 0.2;
      mainRef.current.rotation.y = t * 0.05 + mouse.current.x * 0.2;
      mainRef.current.position.y +=
        (-s * 3 - mainRef.current.position.y) * 0.05;
      mainRef.current.position.x +=
        (2.8 + s * 1.5 - mainRef.current.position.x) * 0.05;
    }
    if (wireRef.current) {
      wireRef.current.rotation.x = -t * 0.025;
      wireRef.current.rotation.y = t * 0.04 + mouse.current.x * 0.1;
      wireRef.current.position.y +=
        (-s * 1.5 - 1.4 - wireRef.current.position.y) * 0.04;
      wireRef.current.position.x +=
        (1.6 + s * 0.8 - wireRef.current.position.x) * 0.04;
    }
    if (knotRef.current) {
      knotRef.current.rotation.x = t * 0.06;
      knotRef.current.rotation.z = t * 0.04;
      knotRef.current.position.y +=
        (-s * 3 - knotRef.current.position.y) * 0.05;
      knotRef.current.position.x +=
        (2.8 + s * 1.5 - knotRef.current.position.x) * 0.05;
    }
  });

  return (
    <>
      <Environment preset="city" background={false} />
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={0.6} />

      <Dodecahedron ref={mainRef} position={[2.5, 0, 0]} scale={1.4}>
        <MeshTransmissionMaterial
          transmission={1}
          thickness={2.0}
          roughness={0.05}
          chromaticAberration={0.08}
          anisotropicBlur={0.03}
          ior={1.5}
          metalness={0}
          envMapIntensity={1.5}
          samples={6}
          resolution={1024}
          backside={false}
          backsideThickness={-0.5}
        />
      </Dodecahedron>

      <Icosahedron ref={wireRef} position={[1.6, -1.4, -1.5]} scale={0.55}>
        <meshStandardMaterial
          color={"#60a5fa"}
          wireframe
          wireframeLinewidth={5}
          opacity={0.5}
          transparent
        />
      </Icosahedron>

      <TorusKnot ref={knotRef} position={[2.8, 0, 0]} scale={0.2}>
        <meshStandardMaterial
          color={"#60a5fa"}
          opacity={0.5}
          transparent
          roughness={0.3}
          metalness={1}
        />
      </TorusKnot>
    </>
  );
}

export function Hero() {
  const scrollRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("hero");
      if (!section) return;
      scrollRef.current = Math.max(
        0,
        Math.min(1, window.scrollY / section.offsetHeight),
      );
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-end px-6 py-4">
        <ThemeToggle />
      </nav>
      <div className="relative">
        <div className="absolute inset-0 px-40 z-0 pointer-events-none">
          <Canvas camera={{ position: [0, 0, 6] }} gl={{ alpha: true }}>
            <HeroScene scrollProgress={scrollRef} />
          </Canvas>
        </div>
        <section
          id="hero"
          className="relative z-10 min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 max-w-5xl pt-16 w-fit"
        >
          <div
            className="mb-6"
            style={{
              animation: "fade-up 0.6s cubic-bezier(0.16,1,0.3,1) both",
              animationDelay: "0ms",
            }}
          >
            <h1 className="text-[clamp(2.5rem,8vw,5rem)] font-bold leading-[0.95] tracking-tight text-foreground">
              김준혁
            </h1>
            <p className="text-[24px] font-semibold leading-[1.3] text-muted mt-1">
              Kim Joonhyeok
            </p>
          </div>

          <div
            className="mb-10"
            style={{
              animation: "fade-up 0.6s cubic-bezier(0.16,1,0.3,1) both",
              animationDelay: "80ms",
            }}
          >
            <p className="text-[32px] font-semibold leading-[1.2] text-foreground">
              Frontend Developer
            </p>
            <p className="text-[14px] font-normal leading-normal text-muted mt-1">
              광주소프트웨어마이스터고등학교
            </p>
          </div>

          <div
            className="mt-20 text-muted"
            style={{
              animation:
                "fade-up 0.6s cubic-bezier(0.16,1,0.3,1) 240ms both, pulse-down 1.8s ease-in-out 840ms infinite",
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </section>
      </div>
    </>
  );
}
