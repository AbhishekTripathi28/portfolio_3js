import React, { Suspense } from "react";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { Canvas, useFrame } from "@react-three/fiber";
import { Astronaut } from "../components/Astronaut";
import { Float, OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import Loader from "../components/Loader";

function Hero() {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  return (
    <section id="home" className="flex justify-center items-start  md:justify-start md:items-start min-h-screen overflow-hidden c-space ">
      <ParallaxBackground />
      <div className=" grid grid-rows-2 ">
      <HeroText />
      <div className="h-full w-full z-10">
      </div>
      </div>
      <div>
        <figure className="w-[100vw ] h-[100vh] absolute inset-0 ">
          <Canvas camera={{ position: [0, 1, 3] }}>
            <Suspense fallback={<Loader />}>
              <Float>
                <Astronaut
                  scale={isMobile && 0.2}
                  position={isMobile && [0.5, 3, 0]}
                />
                <OrbitControls />
              </Float>
              <Rig />
            </Suspense>
          </Canvas>
        </figure>
      </div>
    </section>
  );
}

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
}

export default Hero;
