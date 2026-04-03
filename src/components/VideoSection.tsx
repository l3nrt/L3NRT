import { Youtube } from 'lucide-react';

export default function VideoSection() {
  return (
    <section id="video" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl mb-3">Latest Video</h2>
        </div>
        <div className="glass rounded-3xl p-2 md:p-3 neon-box">
          <div className="aspect-video w-full overflow-hidden rounded-2xl bg-black">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/ASgAjAO67ng?rel=0&modestbranding=1&color=white"
              title="L3NRT - Latest Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <a 
            href="https://www.youtube.com/@L3NRTOFFICIAL" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 transition font-medium"
          >
            <Youtube size={18} />
            Subscribe on YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
