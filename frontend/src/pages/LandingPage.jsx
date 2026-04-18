import React from 'react';
import Navbar from '../components/landing/Navbar';
import Hero from '../components/landing/Hero';
import ArchitectureGrid from '../components/landing/ArchitectureGrid';
import PipelineTrack from '../components/landing/PipelineTrack';
import Footer from '../components/landing/Footer';

export default function LandingPage() {
  return (
    <div className="bg-surface text-on-surface font-body antialiased min-h-screen flex flex-col selection:bg-tertiary-container selection:text-on-tertiary-container">
      <Navbar />
      <main className="flex-grow pt-32 pb-8 px-8 max-w-7xl mx-auto w-full flex flex-col gap-32">
        <Hero />
        <ArchitectureGrid />
        <PipelineTrack />
      </main>
      <Footer />
    </div>
  );
}
