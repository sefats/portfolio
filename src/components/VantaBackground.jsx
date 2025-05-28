import React, { useEffect, useRef, useState } from "react";

const VantaBackground = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    const loadVanta = async () => {
      // Charger Three.js si nécessaire
      if (!window.THREE) {
        await new Promise((resolve, reject) => {
          const script = document.createElement("script");
          script.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js";
          script.onload = resolve;
          script.onerror = reject;
          document.body.appendChild(script);
        });
      }

      // Charger Vanta Birds si nécessaire
      if (!window.VANTA || !window.VANTA.BIRDS) {
        await new Promise((resolve, reject) => {
          const script = document.createElement("script");
          script.src = "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.birds.min.js";
          script.onload = resolve;
          script.onerror = reject;
          document.body.appendChild(script);
        });
      }
      

      // Appliquer l'effet si tout est prêt
      if (!vantaEffect && window.VANTA && window.VANTA.BIRDS) {
        setVantaEffect(
          window.VANTA.BIRDS({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            backgroundColor: 0xffffff,
            color1: 0x3B80C3,
            color2: 0xC37E3B,
            colorMode: "lerp",
          })
        );
      }
    };

    loadVanta();

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} className="absolute inset-0 z-0 w-full h-full" />
  );
};

export default VantaBackground;
