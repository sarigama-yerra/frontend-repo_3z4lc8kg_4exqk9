import React from 'react';
import Header from './components/Header';
import SceneIllustration from './components/SceneIllustration';
import CharactersShowcase from './components/CharactersShowcase';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50 text-slate-900">
      <Header />
      <SceneIllustration />
      <CharactersShowcase />
      <Footer />
    </div>
  );
}
