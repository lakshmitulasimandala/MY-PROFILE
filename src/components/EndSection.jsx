import { useEffect, useRef } from "react";

function EndSection() {
  const coverRef = useRef(null);
  const dotRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const section = sectionRef.current;
      const cover = coverRef.current;
      const dot = dotRef.current;

      if (!section || !cover || !dot) return;

      const rect = section.getBoundingClientRect();
      const progress = Math.min(
        Math.max((window.innerHeight - rect.top) / rect.height, 0),
        1
      );

      // Cover shrinks upward
      cover.style.transform = `scaleY(${1 - progress})`;

      // Dot fades & slides in near the end
      if (progress > 0.7) {
        dot.style.opacity = "1";
        dot.style.transform = "translateX(0)";
      } else {
        dot.style.opacity = "0";
        dot.style.transform = "translateX(-10px)";
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="end-section" ref={sectionRef}>
      <div className="name-reveal">
        <div className="cover" ref={coverRef}></div>

        <h1 className="final-name">
          TULASI
          <span className="dot" ref={dotRef}>.</span>
        </h1>
      </div>
    </section>
  );
}

export default EndSection;
