import { TRACKS } from '../constants';

export default function MusicReleases() {
  return (
    <section id="music" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent pointer-events-none"></div>
      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-4xl md:text-5xl mb-3">Released Music</h2>
            <p className="text-zinc-400">All official releases — stream on Spotify</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRACKS.map((track) => (
            <div 
              key={track.id} 
              className="track-card glass rounded-3xl overflow-hidden border border-white/5 transition-all duration-400 hover:-translate-y-2 hover:border-purple-500/50 group"
            >
              <a 
                href={track.spotifyUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block relative aspect-square overflow-hidden"
              >
                <img 
                  src={track.cover} 
                  alt={track.title} 
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                
                <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
                  <span className="text-[10px] uppercase tracking-widest px-2 py-1 rounded bg-black/60 border border-white/10">
                    {track.type}
                  </span>
                </div>
              </a>
              <div className="p-5">
                <h3 className="font-bold text-xl mb-1">{track.title}</h3>
                <div className="mt-4">
                  <a 
                    href={track.spotifyUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full text-center py-2.5 rounded-xl bg-[#1DB954]/10 hover:bg-[#1DB954]/20 text-[#1DB954] border border-[#1DB954]/20 transition-all text-xs font-bold flex items-center justify-center gap-2"
                  >
                    LISTEN ON SPOTIFY
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
