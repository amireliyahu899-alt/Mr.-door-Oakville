import React from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck, Star } from 'lucide-react';
import { motion } from 'motion/react';

export const Header = () => (
  <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        <div className="flex items-center gap-2">
          <div className="bg-brand-primary p-2 rounded-lg">
            <ShieldCheck className="text-white w-6 h-6" />
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight text-brand-primary block leading-none">Mr. door</span>
            <span className="text-sm font-semibold text-brand-secondary uppercase tracking-widest">Oakville</span>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="/" className="text-sm font-medium text-slate-600 hover:text-brand-primary transition-colors">Home</a>
          <a href="#services" className="text-sm font-medium text-slate-600 hover:text-brand-primary transition-colors">Services</a>
          <a href="#neighborhoods" className="text-sm font-medium text-slate-600 hover:text-brand-primary transition-colors">Locations</a>
          <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-brand-primary transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-4">
          <a 
            href="tel:2896720590" 
            className="flex items-center gap-2 bg-brand-primary text-white px-5 py-2.5 rounded-full font-bold hover:bg-brand-secondary transition-all shadow-lg shadow-brand-primary/20"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">(289) 672-0590</span>
          </a>
        </div>
      </div>
    </div>
  </header>
);

export const Hero = () => (
  <section className="relative py-20 lg:py-32 overflow-hidden bg-slate-900">
    <div className="absolute inset-0 opacity-20">
      <img 
        src="https://picsum.photos/seed/door/1920/1080" 
        alt="Modern Door" 
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
    </div>
    
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/20 text-brand-accent border border-brand-accent/30 text-xs font-bold uppercase tracking-wider mb-6">
          <Star className="w-3 h-3 fill-current" />
          Top Rated in Oakville
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          <span className="text-brand-accent">Mr. door</span> Oakville Experts
        </h1>
        <p className="text-lg text-slate-300 mb-8 leading-relaxed">
          From emergency repairs to custom installations, we provide premium door and window services across all Oakville neighborhoods. 24/7 support available.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-brand-accent text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-brand-accent/20">
            Get a Free Quote
          </button>
          <button className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all">
            View Our Services
          </button>
        </div>
        
        <div className="mt-12 flex items-center gap-8">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-white">15+</span>
            <span className="text-sm text-slate-400">Years Experience</span>
          </div>
          <div className="w-px h-10 bg-slate-700" />
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-white">5k+</span>
            <span className="text-sm text-slate-400">Happy Clients</span>
          </div>
          <div className="w-px h-10 bg-slate-700" />
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-white">24/7</span>
            <span className="text-sm text-slate-400">Emergency Support</span>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export const Footer = () => (
  <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <ShieldCheck className="text-brand-accent w-8 h-8" />
            <span className="text-xl font-bold text-white">Mr. door Oakville</span>
          </div>
          <p className="text-sm leading-relaxed mb-6">
            Your trusted local experts for all door and window needs in Oakville. Quality craftsmanship and reliable service guaranteed by Mr. door.
          </p>
          <div className="flex gap-4">
            {/* Social icons placeholder */}
          </div>
        </div>
        
        <div>
          <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h3>
          <ul className="space-y-4 text-sm">
            <li><a href="/" className="hover:text-brand-accent transition-colors">Home</a></li>
            <li><a href="#services" className="hover:text-brand-accent transition-colors">Services</a></li>
            <li><a href="#neighborhoods" className="hover:text-brand-accent transition-colors">Locations</a></li>
            <li><a href="#contact" className="hover:text-brand-accent transition-colors">Contact Us</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact Info</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-brand-accent shrink-0" />
              <span>Oakville, Ontario, Canada</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-brand-accent shrink-0" />
              <span>(289) 672-0590</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-brand-accent shrink-0" />
              <span>info@oakvilledoor.ca</span>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-brand-accent shrink-0" />
              <span>24/7 Emergency Service</span>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Service Areas</h3>
          <p className="text-sm mb-4">Serving all neighborhoods in Oakville including:</p>
          <div className="flex flex-wrap gap-2">
            {["Bronte", "Glen Abbey", "River Oaks", "Clearview"].map(n => (
              <span key={n} className="text-xs bg-white/5 px-2 py-1 rounded border border-white/10">{n}</span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <p>© 2024 Mr. door Oakville. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
          <a href="#" className="hover:text-white">Sitemap</a>
        </div>
      </div>
    </div>
  </footer>
);
