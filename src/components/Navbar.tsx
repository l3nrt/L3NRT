import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-40 px-6 py-6">
      <div className="max-w-5xl mx-auto flex justify-between items-center glass rounded-full px-8 py-3 border border-white/10">
        <div className="hidden md:flex items-center gap-8 text-[10px] uppercase tracking-[0.3em] font-medium">
          <a href="#about" className="opacity-50 hover:opacity-100 hover:text-purple-400 transition-all">About</a>
          <a href="#music" className="opacity-50 hover:opacity-100 hover:text-purple-400 transition-all">Music</a>
        </div>
        
        <div className="flex items-center gap-4">
          <img 
            src="https://i.ibb.co.com/BVS4yKpC/logo.png" 
            alt="L3NRT Logo" 
            className="w-10 h-10 object-contain filter drop-shadow-[0_0_15px_rgba(168,85,247,0.7)]"
            onError={(e) => {
              e.currentTarget.src = "https://placehold.co/100x100/05030a/a855f7?text=L3NRT";
            }}
            referrerPolicy="no-referrer"
          />
          <span className="font-bold tracking-[0.4em] text-xs md:hidden">L3NRT</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-[10px] uppercase tracking-[0.3em] font-medium">
          <a href="#video" className="opacity-50 hover:opacity-100 hover:text-purple-400 transition-all">Video</a>
          <a href="#socials" className="opacity-50 hover:opacity-100 hover:text-purple-400 transition-all">Connect</a>
        </div>

        <a href="#socials" className="md:hidden text-purple-400">
          <Menu size={18} />
        </a>
      </div>
    </nav>
  );
}
