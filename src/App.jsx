import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import EventDetails from './components/EventDetails';
import RSVPSection from './components/RSVPSection';
import GallerySection from './components/GallerySection';
import FooterSection from './components/FooterSection';

const App = () => {
  return (
    <div className="min-h-screen bg-white text-rose-900">
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-rose-100">
        <nav className="mx-auto max-w-6xl px-6 py-3 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-wide text-rose-900">Emma & Noah</a>
          <div className="hidden md:flex items-center gap-6 text-rose-700">
            <a className="hover:text-rose-900" href="#about">Our Story</a>
            <a className="hover:text-rose-900" href="#details">Details</a>
            <a className="hover:text-rose-900" href="#gallery">Gallery</a>
            <a className="hover:text-rose-900" href="#rsvp">RSVP</a>
          </div>
        </nav>
      </header>

      <main>
        <HeroSection />
        <AboutSection />
        <EventDetails />
        <GallerySection />
        <RSVPSection />
      </main>

      <FooterSection />
    </div>
  );
};

export default App;
