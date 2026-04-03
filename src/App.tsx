/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Socials from './components/Socials';
import MusicReleases from './components/MusicReleases';
import VideoSection from './components/VideoSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Socials />
        <MusicReleases />
        <VideoSection />
      </main>
      <Footer />
    </div>
  );
}

