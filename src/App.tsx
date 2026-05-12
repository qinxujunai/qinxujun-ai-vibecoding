/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Concept from './components/sections/Concept';
import Tools from './components/sections/Tools';
import Workflow from './components/sections/Workflow';
import Prompts from './components/sections/Prompts';
import Deployment from './components/sections/Deployment';
import Environment from './components/sections/Environment';
import ContextEngine from './components/sections/ContextEngine';
import Manifesto from './components/sections/Manifesto';
import Footer from './components/layout/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-electric selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Concept />
        <Environment />
        <Tools />
        <ContextEngine />
        <Workflow />
        <Prompts />
        <Deployment />
        <Manifesto />
      </main>
      <Footer />
    </div>
  );
}
