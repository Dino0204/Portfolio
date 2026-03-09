import { CameraControls, Image, Text } from "@react-three/drei";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { useEffect, useRef } from "react";

export function HeroR3F() {
  const controls = useRef<CameraControls>(null);
  const meshFitCamera = useRef<THREE.Mesh>(null);

  const fitCamera = async () => {
    if (controls.current && meshFitCamera.current) {
      controls.current.fitToBox(meshFitCamera.current, true);
    }
  };

  useEffect(() => {
    const intro = async () => {
      if (controls.current) {
        controls.current.dolly(-10);
        controls.current.smoothTime = 1.3;
        fitCamera();
      }
    };
    intro();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", fitCamera);
    return () => window.removeEventListener("resize", fitCamera);
  }, []);

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="w-screen h-screen p-40">
        <Canvas>
          <CameraControls ref={controls} />

          <ambientLight intensity={2} />

          <mesh position={[0, 0, 0]} ref={meshFitCamera}>
            <boxGeometry args={[16, 9, 1]} />
            <meshStandardMaterial wireframe />
          </mesh>

          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[16, 16, 16]} />
            <meshStandardMaterial wireframe />
          </mesh>

          {/* <Image
          url="Dino.png"
          transparent
          scale={[8, 10]}
          grayscale={1}
          position={[2, -1, -0.2]}
        /> */}

          {/* 대형 타이틀 */}
          <Text
            position={[-7, 2, 0]}
            fontSize={1.5}
            color="white"
            fontWeight={700}
            anchorX="left"
            anchorY="middle"
          >
            Hello!
          </Text>

          {/* 서브타이틀 */}
          <Text
            position={[-2.5, 2.5, 0]}
            fontSize={0.3}
            color="white"
            anchorX="left"
            anchorY="middle"
          >
            {"* Frontend \nDeveloper\u2122"}
          </Text>

          {/* 일본어 2줄 */}
          <Text
            position={[0.5, 2.75, 0]}
            fontSize={0.12}
            color="#888888"
            anchorX="left"
            anchorY="middle"
            maxWidth={6}
          >
            {"blablasblablasblablasblablasblablasblablasblablas"}
          </Text>

          {/* 브랜딩 */}
          <Text
            position={[-4, 1.2, 0]}
            fontSize={0.2}
            color="#666666"
            anchorX="left"
            anchorY="middle"
          >
            {"outside origins  \u2014Reverse 1999"}
          </Text>

          <Text
            position={[-7, 0, 0]}
            fontSize={0.5}
            color="white"
            fontWeight={500}
            anchorX="left"
            anchorY="middle"
          >
            [ web ] [ interactive ]
          </Text>

          <Text
            position={[-7, -3, 0]}
            fontSize={1.5}
            color="white"
            fontWeight={700}
            anchorX="left"
            anchorY="middle"
          >
            @Dino
          </Text>

          {/* 대형 A */}
          <Text
            position={[5, 1.5, -1]}
            fontSize={5}
            color="#B8B0D0"
            anchorX="center"
            anchorY="middle"
            fillOpacity={0.7}
          >
            D
          </Text>

          {/* 저작권 */}
          {/* <Text
          position={[-4, -2.5, 0]}
          fontSize={0.7}
          color="#888888"
          anchorX="left"
          anchorY="middle"
          font={NOTO_SANS_JP}
        >
          {"\u00a9\u5154\u6bdb\u624b\u888b  A"}
        </Text> */}

          {/* 수직 텍스트 — Medicine Pocket */}
          <Text
            position={[4.5, 0.5, 0]}
            rotation={[0, 0, -Math.PI / 2]}
            fontWeight={700}
            fontSize={1.4}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            JoonHyeok
          </Text>

          <Text
            position={[4, -3, -0.1]}
            rotation={[0, 0, -Math.PI / 2]}
            fontWeight={700}
            fontSize={1.4}
            color="#C9A227"
            anchorX="center"
            anchorY="middle"
          >
            Kim
          </Text>

          {/* [!] 심볼 */}
          <Text
            position={[6, -1.5, 0]}
            fontSize={0.6}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            [!]
          </Text>

          {/* enpisiworks 워터마크 */}
          <Text
            position={[4.5, -2.8, 0]}
            fontSize={0.2}
            color="#555555"
            anchorX="left"
            anchorY="middle"
          >
            enpisiworks
          </Text>

          {/* 태그 */}
          <Text
            position={[4.5, -3.2, 0]}
            fontSize={0.18}
            color="#555555"
            anchorX="left"
            anchorY="middle"
          >
            [aEN] [X25] [R1999]
          </Text>

          {/* 라벨 */}
          <Text
            position={[4.5, -3.6, 0]}
            fontSize={0.18}
            color="#555555"
            anchorX="left"
            anchorY="middle"
          >
            {"\u2014Medicine Pocket"}
          </Text>

          {/* 별 */}
          <Text
            position={[7, -3.5, 0]}
            fontSize={0.5}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            {"\u2726"}
          </Text>
        </Canvas>
      </div>
    </div>
  );
}
