import { useEffect, useRef } from 'react';
import { Play, ChevronDown } from 'lucide-react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: { x: number; y: number; vx: number; vy: number; r: number }[] = [];
    
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    
    window.addEventListener('resize', resize);
    resize();
    
    for(let i=0; i<80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 2 + 0.5
      });
    }
    
    let animationFrameId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if(p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if(p.y < 0 || p.y > canvas.height) p.vy *= -1;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
        ctx.fillStyle = 'rgba(168,85,247,0.5)';
        ctx.fill();
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <header className="hero-bg min-h-[100vh] flex items-center justify-center relative overflow-hidden pt-20">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />
      <div className="absolute inset-0 grid-bg opacity-30"></div>
      
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="animate-float inline-block mb-8">
          <img 
            src="https://i.ibb.co.com/BVS4yKpC/logo.png" 
            alt="L3NRT Logo" 
            className="w-32 h-32 object-contain filter drop-shadow-[0_0_25px_rgba(168,85,247,0.8)] drop-shadow-[0_0_50px_rgba(236,72,153,0.4)] mx-auto"
            onError={(e) => {
              e.currentTarget.src = "https://placehold.co/200x200/05030a/a855f7?text=L3NRT";
            }}
            referrerPolicy="no-referrer"
          />
        </div>
        
        <h1 className="display text-6xl md:text-8xl lg:text-9xl neon-text mb-4 tracking-tighter">
          L3<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-500">NRT</span>
        </h1>
        
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          <span className="glass px-4 py-2 rounded-full text-xs uppercase tracking-widest">Melodic Bass</span>
          <span className="glass px-4 py-2 rounded-full text-xs uppercase tracking-widest">Melodic Dubstep</span>
          <span className="glass px-4 py-2 rounded-full text-xs uppercase tracking-widest">Cinematic Bass</span>
        </div>

        <a href="#music" className="inline-flex items-center gap-3 group">
          <span className="w-12 h-12 rounded-full border border-purple-500/50 flex items-center justify-center group-hover:bg-purple-500/20 transition">
            <Play size={20} className="text-purple-400 fill-purple-400 ml-0.5" />
          </span>
          <span className="uppercase tracking-widest text-sm">Listen Now</span>
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <ChevronDown size={24} />
      </div>
    </header>
  );
}
