import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CanvasLoader from "../loader";

type BallProps = {
  imgUrl: string;
};

const Ball = ({ imgUrl }: BallProps) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={1.5}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[0, 0, 0.5]} />

      <mesh scale={2.5}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#fff8eb" flatShading />

        <Decal position={[0, 0, 1]} map={decal} />
      </mesh>
    </Float>
  );
};

type BallCanvasProps = {
  icon: string;
};

const BallCanvas = ({ icon }: BallCanvasProps) => {
  return (
    <Canvas
      frameloop="always"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{ position: [0, 0, 5], fov: 45 }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
