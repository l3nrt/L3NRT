import { 
  Instagram, 
  Youtube, 
  Music, 
  Music2, 
  Cloud, 
  Apple, 
  Users, 
  Twitter 
} from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const ICON_MAP: Record<string, any> = {
  Instagram,
  Youtube,
  Music,
  Music2,
  Cloud,
  Apple,
  Users,
  Twitter
};

export default function Socials() {
  return (
    <section id="socials" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-3">Connect Everywhere</h2>
          <p className="text-zinc-400">Stream, follow, and join the community</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {SOCIAL_LINKS.map((social) => {
            const Icon = ICON_MAP[social.icon] || Music;
            return (
              <a 
                key={social.name}
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass rounded-2xl p-6 flex flex-col items-center gap-3 group border border-transparent hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10_30px_-5px_rgba(168,85,247,0.5)]"
              >
                <Icon className="w-6 h-6 group-hover:text-purple-400 transition" />
                <span className="text-xs uppercase tracking-widest">{social.name}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
