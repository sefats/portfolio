import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 -z-10"
      options={{
        fullScreen: false,
        background: { color: "#ffffff" },
        particles: {
          number: { value: 50, density: { enable: true, area: 800 } },
          color: { value: "#3B80C3" },
          shape: { type: "circle" },
          opacity: { value: 0.2 },
          size: { value: 3 },
          move: { enable: true, speed: 1 },
          links: {
            enable: true,
            color: "#3B80C3",
            opacity: 0.2,
            distance: 150,
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;
