import { useEffect, useRef, useState } from "react";

/**
 * ScrollReveal Component
 * Wraps child elements and animates them when they enter the viewport.
 *
 * @param {React.ReactNode} children - Elements to animate
 * @param {string} className - Additional CSS classes
 * @param {number} delay - Animation delay in ms
 * @param {number} duration - Animation duration in ms
 * @param {string} direction - Direction of movement ('up' | 'down' | 'left' | 'right' | 'none')
 * @param {boolean} scale - If true, scales from 0.95 to 1
 * @param {number} threshold - Intersection observer threshold (0 to 1)
 */
export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration = 800,
  direction = "up",
  scale = false,
  threshold = 0.05,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        // Trigger slightly before element enters to make it feel responsive
        rootMargin: "0px 0px -20px 0px",
      },
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  // Determine starting transform classes
  const getDirectionClass = () => {
    if (!isVisible) {
      switch (direction) {
        case "up":
          return "translate-y-8";
        case "down":
          return "-translate-y-8";
        case "left":
          return "translate-x-8";
        case "right":
          return "-translate-x-8";
        default:
          return "";
      }
    }
    return "translate-y-0 translate-x-0";
  };

  const getScaleClass = () => {
    if (!isVisible && scale) return "scale-95";
    if (isVisible && scale) return "scale-100";
    return "";
  };

  return (
    <div
      ref={ref}
      className={`transition-all ${isVisible ? "opacity-100" : "opacity-0"} ${getDirectionClass()} ${getScaleClass()} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {children}
    </div>
  );
}
