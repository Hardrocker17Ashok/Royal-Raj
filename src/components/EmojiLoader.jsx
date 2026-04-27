import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./EmojiLoader.css";

const PremiumLoader = () => {
  const barRef = useRef(null);
  const percentRef = useRef(null);
  const screenRef = useRef(null);
  const brandRef = useRef(null);
  const taglineRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    let progress = { value: 0 };

    // 👉 PROGRESS START IMMEDIATELY
    gsap.to(progress, {
      value: 100,
      duration: 2.5,
      ease: "power2.inOut",
      onUpdate: () => {
        if (percentRef.current) {
          percentRef.current.textContent = `${Math.round(progress.value)}%`;
        }
      },
    });

    gsap.to(barRef.current, {
      width: "100%",
      duration: 2.5,
      ease: "power2.inOut",
    });

    // 👉 TEXT ANIMATION (parallel)
    gsap.fromTo(
      brandRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1 }
    );

    gsap.fromTo(
      taglineRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.3 }
    );

    // 👉 GLOW LOOP
    gsap.to(glowRef.current, {
      scale: 1.2,
      opacity: 0.6,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // 👉 FADE OUT EXACTLY AFTER PROGRESS
    gsap.to(screenRef.current, {
      opacity: 0,
      duration: 0.6,
      delay: 2.8, // progress (2.5) + small buffer
      pointerEvents: "none",
    });
  }, []);

  return (
    <div className="premium-loader" ref={screenRef}>
      <div className="glow-circle" ref={glowRef}></div>

      <div className="loader-content">
        <h1 className="brand" ref={brandRef}>
          Royal Raj
        </h1>
        <p className="tagline" ref={taglineRef}>
          Luxury Stay & Fine Dining
        </p>

        <div className="progress-track">
          <div className="progress-bar" ref={barRef}></div>
        </div>

        <span className="percent" ref={percentRef}>
          0%
        </span>
      </div>
    </div>
  );
};

export default PremiumLoader;