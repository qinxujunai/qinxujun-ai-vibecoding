/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { MotionConfig } from 'motion/react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Concept from './components/sections/Concept';
import Environment from './components/sections/Environment';
import Tools from './components/sections/Tools';
import ContextEngine from './components/sections/ContextEngine';
import Workflow from './components/sections/Workflow';
import Prompts from './components/sections/Prompts';
import Manifesto from './components/sections/Manifesto';
import { SiteSettingsProvider } from './context/SiteSettings';

export default function App() {
  useEffect(() => {
    const scrollToHash = () => {
      const id = window.location.hash.slice(1);
      if (!id) return;

      window.requestAnimationFrame(() => {
        document.getElementById(decodeURIComponent(id))?.scrollIntoView({ block: 'start' });
      });
    };

    scrollToHash();
    window.addEventListener('hashchange', scrollToHash);

    return () => window.removeEventListener('hashchange', scrollToHash);
  }, []);

  return (
    <SiteSettingsProvider>
      <MotionConfig reducedMotion="user">
        <div className="min-h-screen bg-[var(--page-bg)] selection:bg-electric selection:text-white">
          <Navbar />
          <main>
            {/* Act I — understanding */}
            <Hero />
            <Concept />
            {/* Act II — equipment */}
            <Environment />
            <Tools />
            <ContextEngine />
            {/* Act III — practice */}
            <Workflow />
            <Prompts />
            <Manifesto />
          </main>
          <Footer />
        </div>
      </MotionConfig>
    </SiteSettingsProvider>
  );
}
