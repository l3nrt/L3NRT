export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <img 
            src="https://i.ibb.co.com/BVS4yKpC/logo.png" 
            alt="L3NRT Logo" 
            className="w-6 h-6 object-contain opacity-70 grayscale hover:grayscale-0 transition-all"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
            referrerPolicy="no-referrer"
          />
          <span className="text-sm tracking-widest">© L3NRT</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-zinc-500">
          <a href="#" className="hover:text-purple-400 transition">Press Kit</a>
          <a href="#" className="hover:text-purple-400 transition">Contact</a>
          <a href="#" className="hover:text-purple-400 transition">Privacy</a>
        </div>
      </div>
    </footer>
  );
}
