import React, { useEffect, useRef } from 'react';

export const BackgroundEffects: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle class
    class Particle {
      x: number = 0;
      y: number = 0;
      size: number = 0;
      speedX: number = 0;
      speedY: number = 0;
      opacity: number = 0;
      maxOpacity: number = 0;
      color: string = '';

      constructor() {
        this.reset();
        this.y = Math.random() * height; // initial spread
      }

      reset() {
        this.x = Math.random() * width;
        this.y = height + 10;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.15;
        this.speedY = -(Math.random() * 0.25 + 0.05);
        this.opacity = 0;
        this.maxOpacity = Math.random() * 0.25 + 0.05;
        this.color = Math.random() > 0.5 ? '0, 212, 255' : '59, 130, 246'; // Cyan or Blue
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Fade in
        if (this.opacity < this.maxOpacity) {
          this.opacity += 0.002;
        }

        // Reset if goes off screen
        if (this.y < -10 || this.x < -10 || this.x > width + 10) {
          this.reset();
        }
      }

      draw(context: CanvasRenderingContext2D) {
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fillStyle = `rgba(${this.color}, ${this.opacity})`;
        context.fill();
      }
    }

    const particlesCount = Math.min(45, Math.floor((width * height) / 30000));
    const particlesArray: Particle[] = [];
    for (let i = 0; i < particlesCount; i++) {
      particlesArray.push(new Particle());
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw(ctx);
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0 bg-[#020617]">
      {/* Base premium dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#030712] to-[#020617]" />

      {/* Central soft cyan glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] rounded-full bg-[#00D4FF]/4 blur-[130px]" />
      
      {/* Secondary cobalt glow */}
      <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-[#3B82F6]/3 blur-[110px]" />

      {/* Canvas for floating light particles */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />

      {/* Curved glowing lines - Extremely subtle top curve */}
      <svg className="absolute top-0 left-0 w-full h-[400px] opacity-15 pointer-events-none" viewBox="0 0 1440 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          className="animated-curve-1"
          d="M-100 100 C 300 250, 700 50, 1100 180 C 1250 220, 1400 150, 1600 80" 
          stroke="url(#top-curve-grad)" 
          strokeWidth="1.2" 
          strokeLinecap="round" 
        />
        <defs>
          <linearGradient id="top-curve-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
            <stop offset="30%" stopColor="#3B82F6" stopOpacity="0.4" />
            <stop offset="70%" stopColor="#00D4FF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#00D4FF" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Curved glowing lines - Extremely subtle bottom curve */}
      <svg className="absolute bottom-0 left-0 w-full h-[400px] opacity-15 pointer-events-none" viewBox="0 0 1440 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          className="animated-curve-2"
          d="M-100 300 C 350 150, 750 350, 1150 200 C 1300 150, 1450 250, 1600 320" 
          stroke="url(#bottom-curve-grad)" 
          strokeWidth="1.2" 
          strokeLinecap="round" 
        />
        <defs>
          <linearGradient id="bottom-curve-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00D4FF" stopOpacity="0" />
            <stop offset="25%" stopColor="#00D4FF" stopOpacity="0.5" />
            <stop offset="75%" stopColor="#3B82F6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
