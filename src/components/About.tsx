export default function About() {
  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="w-full h-full object-cover opacity-20 grayscale"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260319_055001_8e16d972-3b2b-441c-86ad-2901a54682f9.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#05030a] via-transparent to-[#05030a]"></div>
        <div className="absolute inset-0 bg-[#05030a]/40"></div>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-12 items-center relative z-10">
        <div className="md:col-span-2 relative">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden neon-box relative">
            <img 
              src="blob:https://aistudio.google.com/38867496-f1d9-4e9d-9d16-3bb34b2d5f3e" 
              alt="L3NRT DJ" 
              className="w-full h-full object-cover mix-blend-luminosity opacity-80"
              onError={(e) => {
                e.currentTarget.src = "https://i.ibb.co.com/m55xN9d4/Untitled-design-2.png";
              }}
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#05030a] via-purple-900/30 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/30 to-fuchsia-600/20 mix-blend-overlay"></div>
          </div>
        </div>
        <div className="md:col-span-3">
          <p className="text-xl md:text-2xl leading-relaxed text-zinc-100 mb-10 italic font-light border-l-4 border-purple-500 pl-8 py-2 bg-purple-500/5 backdrop-blur-sm rounded-r-2xl">
            "Bangladesh-based melodic bass and melodic dubstep producer creating emotionally charged electronic music. Drawing inspiration from artists like ILLENIUM, Seven Lions and MitiS, his productions combine cinematic arrangements, expressive melodies and festival-ready drops—bridging heartfelt storytelling with modern bass music."
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="glass px-6 py-4 rounded-2xl border border-white/10">
              <p className="text-[10px] uppercase tracking-[0.2em] opacity-50 mb-1">Based in</p>
              <p className="font-semibold tracking-wide">Bangladesh</p>
            </div>
            <div className="glass px-6 py-4 rounded-2xl border border-white/10">
              <p className="text-[10px] uppercase tracking-[0.2em] opacity-50 mb-1">Booking</p>
              <p className="font-semibold tracking-wide">l3nrtofficial@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
