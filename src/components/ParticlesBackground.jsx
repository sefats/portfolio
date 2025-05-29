import { useEffect } from "react";
import particlesConfig from "/src/data/particlesjs-config.json";

const ParticlesBackground = () => {
  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS("particles-js", particlesConfig);
    }
  }, []);

  return (
    <div
      id="particles-js"
      className="absolute inset-0 z-0"
      style={{ pointerEvents: "none" }}
    />
  );
};

export default ParticlesBackground;
