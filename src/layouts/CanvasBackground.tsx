import { useRef, useEffect } from "react";
import "./CanvasBackground.css"
export function CanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Adjust for device pixel ratio
    const scaleCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr); // Scale canvas to match device pixel ratio

      // Ensure CSS maintains the logical resolution
      canvas.style.width = "100vw";
      canvas.style.height = "100vh";
    };
    scaleCanvas();

    // Particle generator function
    const generateParticles = (count: number, color: string) => {
      const particles = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width / (window.devicePixelRatio || 1), // Adjust for logical resolution
          y: Math.random() * canvas.height / (window.devicePixelRatio || 1),
          size: Math.random() * 1.5, // Random size between 1 and 9
          dx: Math.random() * 2 - 1, // x velocity
          dy: Math.random() * 2 - 1, // y velocity
          color, // Assign color to the particle
        });
      }
      return particles;
    };

    // Create two sets of particles
    const blueParticles = generateParticles(70, "rgba(34, 211, 238, 0.8)");
    const redParticles = generateParticles(70, "rgba(238, 61, 34, 0.8)");
    const particles = [...blueParticles, ...redParticles]; // Combine both sets

    // Animation loop
    const animate = () => {
      // Clear the canvas
      ctx.clearRect(0, 0, canvas.width / (window.devicePixelRatio || 1), canvas.height / (window.devicePixelRatio || 1));

      // Update and draw particles
      particles.forEach((particle) => {
        particle.x += particle.dx;
        particle.y += particle.dy;

        // Bounce particles off the edges
        if (particle.x < 0 || particle.x > canvas.width / (window.devicePixelRatio || 1)) particle.dx *= -1;
        if (particle.y < 0 || particle.y > canvas.height / (window.devicePixelRatio || 1)) particle.dy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        ctx.closePath();
      });

      requestAnimationFrame(animate);
    };

    // Start animation
    animate();

    // Resize canvas on window resize
    const resizeCanvas = () => scaleCanvas();
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0"></canvas>;
}
