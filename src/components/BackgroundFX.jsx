import { useEffect, useRef } from "react";

export default function BackgroundFX() {
  const spotRef = useRef(null);
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    const spot = spotRef.current;
    if (!root || !spot) return undefined;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      spot.style.opacity = "0.35";
      spot.style.left = "60%";
      spot.style.top = "20%";
      return undefined;
    }

    let frame = 0;
    let targetX = window.innerWidth * 0.7;
    let targetY = window.innerHeight * 0.25;
    let currentX = targetX;
    let currentY = targetY;

    const onMove = (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.055;
      currentY += (targetY - currentY) * 0.055;
      spot.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;
      frame = requestAnimationFrame(animate);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    frame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <div className="bg-fx" ref={rootRef} aria-hidden="true">
      <div className="bg-base" />
      <div className="bg-spot" ref={spotRef} />
      <div className="bg-bands" />
      <div className="bg-noise" />
      <div className="bg-vignette" />
    </div>
  );
}
