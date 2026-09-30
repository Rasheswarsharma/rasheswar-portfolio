import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { FiLinkedin, FiPhone } from 'react-icons/fi';
import { projects, services } from './data';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight - 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative bg-cream text-ink min-h-screen font-body selection:bg-accent selection:text-white">
      <div className="noise-overlay"></div>

      {/* NAVBAR */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 h-20 flex items-center ${
          scrolled ? 'bg-cream/90 backdrop-blur-md text-ink border-b border-ink/10' : 'bg-transparent text-white'
        }`}
      >
        <div className="w-full max-w-[1760px] mx-auto px-5 md:px-10 lg:px-[72px] flex justify-between items-center">
          <a href="#" className="text-accent font-headline font-bold text-[28px] tracking-tight">R.S.</a>
          
          <div className="hidden md:flex items-center space-x-10">
            <div className="flex space-x-8 font-medium text-[17px]">
              <a href="#work" className="hover:text-accent transition-colors">Work</a>
              <a href="#services" className="hover:text-accent transition-colors">Services</a>
              <a href="#about" className="hover:text-accent transition-colors">About</a>
              <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
            </div>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/rasheswar-sharma-116079340" target="_blank" rel="noopener noreferrer" className={`p-2 rounded-full border transition-colors ${scrolled ? 'border-ink/20 hover:border-accent hover:text-accent' : 'border-white/20 hover:border-accent hover:text-accent'}`}>
                <FiLinkedin size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-ink text-cream flex flex-col justify-center items-center p-8">
          <button className="absolute top-6 right-6 text-cream" onClick={() => setMobileMenuOpen(false)}>
            <X size={32} />
          </button>
          <div className="flex flex-col space-y-8 text-center text-4xl font-headline font-bold">
            <a href="#work" onClick={() => setMobileMenuOpen(false)}>Work</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          </div>
        </div>
      )}

      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden bg-ink text-white flex items-center">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
            src="/images/hero-image.png" 
            alt="Rasheswar Sharma editing" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 w-full max-w-[1760px] mx-auto px-5 md:px-10 lg:px-[72px] mt-16">
          <div className="flex items-center space-x-6 mb-8">
            <div className="w-[60px] h-px bg-accent"></div>
            <span className="font-medium text-[12px] md:text-[13px] tracking-[0.4em] uppercase text-white/80">
              Rasheswar Sharma
            </span>
          </div>
          <h1 className="font-headline font-bold text-3xl md:text-4xl lg:text-5xl leading-[1.1] max-w-[700px] mb-8">
            I create content that looks good, feels authentic, and gives people a reason to stop scrolling<span className="text-accent">.</span>
          </h1>
          <div className="font-medium text-sm md:text-base tracking-[0.3em] uppercase text-white/80 mb-12">
            Content • Social Media • Editing • Creative Strategy
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#work" className="inline-flex items-center justify-center space-x-2 bg-accent text-white px-8 py-4 font-bold tracking-wider uppercase text-sm hover:bg-accent/90 transition-colors">
              <span>Watch the work</span>
              <span className="ml-2">↓</span>
            </a>
            <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 border border-white/30 font-bold tracking-wider uppercase text-sm hover:bg-white/10 transition-colors">
              Get in touch
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-5 md:left-10 lg:left-[72px] text-xs font-medium tracking-widest text-white/60 uppercase">
          Creating from India — Working Worldwide
        </div>
        <div className="absolute bottom-10 right-5 md:right-10 lg:right-[72px] text-xs font-medium tracking-widest text-white/60 uppercase">
          Scroll ↓
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="py-24 md:py-32 lg:py-48 px-5 md:px-10 lg:px-[72px] max-w-[1760px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
          <div>
            <h2 className="font-display font-black uppercase text-5xl md:text-7xl lg:text-[100px] leading-[0.9] tracking-[-0.03em]">
              Selected<br/>Work
            </h2>
          </div>
          <p className="text-muted-light font-body max-w-md text-lg">
            A curated selection of cinematic projects and brand narratives that define my visual approach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {projects.map((project) => (
            <div key={project.id} className="group block">
              <div className="relative aspect-[4/5] overflow-hidden clip-chamfer mb-6 bg-ink/5">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-headline font-bold text-2xl mb-2">{project.title}</h3>
                  <p className="text-muted-light">{project.description}</p>
                </div>
              </div>
              {project.pdfImage && (
                <div className="mt-6 flex flex-col items-start border-t border-ink/10 pt-6">
                  <img src={project.pdfImage} alt="Case Study Preview" className="w-full h-auto mb-4 object-cover clip-chamfer opacity-90 hover:opacity-100 transition-opacity" />
                  <a 
                    href={project.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-accent text-white font-medium uppercase tracking-widest text-xs px-6 py-3 hover:bg-accent/90 transition-colors"
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 md:py-32 border-t border-ink/10 px-5 md:px-10 lg:px-[72px] max-w-[1760px] mx-auto">
        <h2 className="font-display font-black uppercase text-5xl md:text-7xl lg:text-[100px] leading-[0.9] tracking-[-0.03em] mb-16 md:mb-24">
          Expertise
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-16">
          {services.map((service, idx) => (
            <div key={service.id} className="relative pt-8 border-t border-ink/10">
              <div className="absolute top-0 right-0 -mt-5 text-ink/10 font-display text-8xl">
                0{idx + 1}
              </div>
              <h3 className="font-display font-black uppercase text-3xl md:text-4xl tracking-[-0.02em] mb-6 relative z-10">
                {service.title}
              </h3>
              <p className="text-muted-light text-lg relative z-10">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT & CONTACT */}
      <section id="about" className="bg-ink text-cream py-24 md:py-32 lg:py-48 px-5 md:px-10 lg:px-[72px]">
        <div className="max-w-[1760px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center mb-32">
          <div className="clip-chamfer aspect-[4/5] lg:aspect-square overflow-hidden bg-cream/5">
            <img src="/images/about-image.png" alt="About Rasheswar" className="w-full h-full object-cover grayscale opacity-80" />
          </div>
          <div>
            <div className="flex items-center space-x-6 mb-8">
              <div className="w-[60px] h-px bg-accent"></div>
              <span className="font-medium text-[12px] md:text-[13px] tracking-[0.4em] uppercase text-muted-dark">
                About Me
              </span>
            </div>
            <h2 className="font-headline font-bold text-4xl md:text-5xl lg:text-6xl mb-8">
              Bringing ideas to life through design.
            </h2>
            <p className="text-muted-dark text-lg md:text-xl mb-6">
              I’m Rasheswar Sharma, a creative who loves making things look good. From posters and banners to social media content, I enjoy turning simple ideas into visuals that people notice. I’m still learning, experimenting, and building my style with every project.
            </p>
          </div>
        </div>

        {/* CONTACT */}
        <div id="contact" className="max-w-[1760px] mx-auto border-t border-cream/10 pt-24 md:pt-32">
          <div className="flex flex-col md:flex-row justify-between items-start gap-16">
            <div>
              <h2 className="font-display font-black uppercase text-5xl md:text-7xl lg:text-[120px] leading-[0.9] tracking-[-0.03em] mb-8">
                Let's<br/>Create.
              </h2>
              <div className="flex flex-col space-y-4">
                <a href="mailto:rasheswarsharma217252@gmail.com" className="font-headline text-2xl md:text-4xl hover:text-accent transition-colors underline decoration-1 underline-offset-8 break-all">
                  rasheswarsharma217252@gmail.com
                </a>
                <a href="tel:8923929004" className="font-headline text-2xl md:text-4xl hover:text-accent transition-colors flex items-center space-x-3 w-fit group">
                  <FiPhone className="text-accent transition-transform group-hover:scale-110" />
                  <span className="underline decoration-1 underline-offset-8 break-all">8923929004</span>
                </a>
              </div>
            </div>
            <div className="flex gap-8 font-medium text-lg">
              <a href="https://www.linkedin.com/in/rasheswar-sharma-116079340" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LinkedIn</a>
            </div>
          </div>
          <div className="mt-32 pt-8 border-t border-cream/10 flex justify-between text-muted-dark text-sm">
            <p>© {new Date().getFullYear()} Rasheswar Sharma. All Rights Reserved.</p>
            <p>Design & Development</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
