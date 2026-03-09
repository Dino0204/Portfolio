import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { MeshTransmissionMaterial, Environment } from "@react-three/drei";
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

const ORB_CONFIGS = [
  {
    position: [-3.5, 1.8, -2] as [number, number, number],
    radius: 1.1,
    speed: 0.5,
    phase: 0,
  },
  {
    position: [3.2, -0.8, -1] as [number, number, number],
    radius: 0.75,
    speed: 0.7,
    phase: 1.2,
  },
  {
    position: [-1.2, -2.5, -0.5] as [number, number, number],
    radius: 0.5,
    speed: 0.9,
    phase: 2.4,
  },
  {
    position: [4.0, 2.2, -3] as [number, number, number],
    radius: 0.85,
    speed: 0.4,
    phase: 0.8,
  },
  {
    position: [0.8, 3.0, -1.5] as [number, number, number],
    radius: 0.35,
    speed: 1.1,
    phase: 3.6,
  },
];

interface GlassOrbProps {
  position: [number, number, number];
  radius: number;
  speed: number;
  phase: number;
}

function GlassOrb({ position, radius, speed, phase }: GlassOrbProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const baseY = position[1];

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.elapsedTime;
    meshRef.current.position.y = baseY + Math.sin(t * speed + phase) * 0.3;
    meshRef.current.rotation.y += 0.003;
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[radius, 64, 64]} />
      <MeshTransmissionMaterial
        transmission={0.95}
        roughness={0}
        thickness={radius * 2}
        ior={1.5}
        chromaticAberration={0.03}
        backside
        samples={1}
      />
    </mesh>
  );
}

function GlassOrbScene() {
  const groupRef = useRef<THREE.Group>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useFrame(({ pointer }) => {
    mouse.current.x += (pointer.x - mouse.current.x) * 0.04;
    mouse.current.y += (pointer.y - mouse.current.y) * 0.04;
    if (groupRef.current) {
      groupRef.current.rotation.y = mouse.current.x * 0.15;
      groupRef.current.rotation.x = -mouse.current.y * 0.1;
    }
  });

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={2} color="#60A5FA" />
      <pointLight position={[-5, -3, 2]} intensity={1} color="#FFFFFF" />
      <Environment preset="city" />
      <group ref={groupRef}>
        {ORB_CONFIGS.map((config, i) => (
          <GlassOrb key={i} {...config} />
        ))}
      </group>
    </>
  );
}

export function About() {
  const { ref, inView } = useInView();

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 5] }} gl={{ alpha: true }}>
          <GlassOrbScene />
        </Canvas>
      </div>
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
            <button
              key={skill}
              className="inline-flex items-center justify-center align-middle select-none
              font-sans font-medium text-center px-3 py-1 text-foreground text-sm rounded-full 
              bg-white/2.5 border border-border backdrop-blur-sm shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] hover:bg-white/30 transition-all duration-300 
              before:absolute before:inset-0 before:rounded-lg before:bg-linear-to-br before:from-white/60 before:via-transparent before:to-transparent before:opacity-70 before:pointer-events-none 
              after:absolute after:inset-0 after:rounded-lg after:bg-linear-to-tl after:from-white/30 after:via-transparent after:to-transparent after:opacity-50 after:pointer-events-none antialiased"
            >
              {skill}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
