/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { MotionConfig } from 'motion/react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Signals from './components/sections/Signals';
import Paths from './components/sections/Paths';
import Shift from './components/sections/Shift';
import Concept from './components/sections/Concept';
import Spectrum from './components/sections/Spectrum';
import Environment from './components/sections/Environment';
import Tools from './components/sections/Tools';
import ContextEngine from './components/sections/ContextEngine';
import Workflow from './components/sections/Workflow';
import Failures from './components/sections/Failures';
import Questions from './components/sections/Questions';
import Prompts from './components/sections/Prompts';
import Deployment from './components/sections/Deployment';
import Manifesto from './components/sections/Manifesto';
import Sources from './components/sections/Sources';
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
            <Signals />
            <Paths />
            <Shift />
            <Concept />
            <Spectrum />
            {/* Act II — equipment */}
            <Environment />
            <Tools />
            <ContextEngine />
            {/* Act III — practice */}
            <Workflow />
            <Failures />
            <Questions />
            <Prompts />
            <Deployment />
            <Manifesto />
            <Sources />
          </main>
          <Footer />
        </div>
      </MotionConfig>
    </SiteSettingsProvider>
  );
}
