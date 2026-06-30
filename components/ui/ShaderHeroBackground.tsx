// @ts-nocheck
"use client";

import dynamic from "next/dynamic";

const ShaderGradientCanvas = dynamic(
  () => import("shadergradient").then((mod) => mod.ShaderGradientCanvas),
  { ssr: false }
);

const ShaderGradient = dynamic(
  () => import("shadergradient").then((mod) => mod.ShaderGradient),
  { ssr: false }
);

export default function ShaderHeroBackground() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none -z-10">
      <ShaderGradientCanvas
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
      >
        {/* @ts-ignore - The shadergradient builder adds props that may not exist in the TS definitions */}
        <ShaderGradient
          animate="on"
          axesHelper="off"
          brightness={1}
          cAzimuthAngle={180}
          cDistance={3.39}
          cPolarAngle={90}
          cameraZoom={1}
          color1="#2962fe"
          color2="#7076e5"
          color3="#6532e5"
          destination="onCanvas"
          embedMode="off"
          envPreset="city"
          format="gif"
          fov={45}
          frameRate={10}
          gizmoHelper="hide"
          grain="on"
          lightType="3d"
          pixelDensity={1}
          positionX={-1.4}
          positionY={0}
          positionZ={0}
          range="disabled"
          rangeEnd={40}
          rangeStart={1.8}
          reflection={0.1}
          rotationX={0}
          rotationY={10}
          rotationZ={50}
          shader="defaults"
          type="plane"
          uAmplitude={1}
          uDensity={1.5}
          uFrequency={5.5}
          uSpeed={0.3}
          uStrength={3.2}
          uTime={1.8}
          wireframe={false}
        />
      </ShaderGradientCanvas>
    </div>
  );
}
