import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, OAKVILLE_NEIGHBORHOODS } from '../data';
import { ArrowRight, Wrench, Shield, Zap } from 'lucide-react';
import { motion } from 'motion/react';

export const Home = () => {
  return (
    <div className="space-y-24 pb-24">
      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Zap, title: "Fast Response", desc: "Emergency repairs within 2 hours in Oakville." },
            { icon: Shield, title: "Certified Pros", desc: "Fully insured and licensed door technicians." },
            { icon: Wrench, title: "Quality Parts", desc: "We use only premium hardware and materials." }
          ].map((f, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100"
            >
              <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6">
                <f.icon className="text-brand-primary w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">{f.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Professional Services</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            We offer a comprehensive range of door and window solutions tailored to your specific needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {SERVICES.slice(0, 12).map((service) => (
            <Link 
              key={service}
              to={`/service/${service.toLowerCase().replace(/ /g, '-')}`}
              className="group bg-white p-6 rounded-xl border border-slate-200 hover:border-brand-primary hover:shadow-lg transition-all flex items-center justify-between"
            >
              <span className="font-semibold text-slate-700 group-hover:text-brand-primary transition-colors">{service}</span>
              <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-brand-primary group-hover:translate-x-1 transition-all" />
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/services" 
            className="inline-flex items-center gap-2 text-brand-primary font-bold hover:underline"
          >
            View All {SERVICES.length} Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Popular Combinations Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Popular Local Services</h2>
          <p className="text-slate-500 text-sm">Quick access to our most requested neighborhood services.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {[
            { s: "Glass Door Repair", l: "Glen Abbey" },
            { s: "Door Replacement", l: "Old Oakville" },
            { s: "Patio Door Repair", l: "Bronte" },
            { s: "Front Door Repair", l: "River Oaks" },
            { s: "Commercial Door Repair", l: "Joshua Creek" },
            { s: "Sliding Door Repair", l: "West Oak Trails" },
          ].map((item, i) => (
            <Link 
              key={i}
              to={`/service/${item.s.toLowerCase().replace(/ /g, '-')}/${item.l.toLowerCase().replace(/ /g, '-')}`}
              className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:border-brand-primary transition-all text-center"
            >
              <p className="text-xs font-bold text-brand-primary mb-1 uppercase tracking-wider">{item.l}</p>
              <p className="text-sm font-semibold text-slate-700">{item.s}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Neighborhoods Section */}
      <section id="neighborhoods" className="bg-slate-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Serving All of Oakville</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                We are proud to serve the entire Oakville community. Our local technicians are stationed across the city to ensure rapid response times no matter where you are located.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {OAKVILLE_NEIGHBORHOODS.map(n => (
                  <Link 
                    key={n}
                    to={`/location/${n.toLowerCase().replace(/ /g, '-')}`}
                    className="flex items-center gap-2 text-slate-700 hover:text-brand-primary font-medium transition-colors"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                    {n}
                  </Link>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl bg-slate-200 flex items-center justify-center">
                <p className="text-slate-400 font-bold">Map Placeholder</p>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs">
                <div className="flex items-center gap-4 mb-2">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200" />
                    ))}
                  </div>
                  <span className="text-sm font-bold">Local Experts</span>
                </div>
                <p className="text-xs text-slate-500">Our team lives and works right here in Oakville, providing personalized service you can trust.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-primary rounded-3xl p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Fix Your Door?</h2>
              <p className="text-brand-secondary-foreground/80 text-lg mb-10 text-slate-300">
                Contact us today for a free, no-obligation estimate. Our experts are standing by to help you with any door or window issue in Oakville.
              </p>
              <div className="flex flex-col gap-4">
                <a href="tel:2896720590" className="inline-flex items-center justify-center bg-brand-accent text-slate-900 px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform">
                  Call (289) 672-0590
                </a>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h3>
              <form action="https://formspree.io/f/mnjbojan" method="POST" className="space-y-4">
                <input type="hidden" name="_subject" value="New Lead from Oakville Door Website" />
                <div>
                  <input name="name" type="text" required placeholder="Your Name" className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary" />
                </div>
                <div>
                  <input name="phone" type="tel" required placeholder="Phone Number" className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary" />
                </div>
                <div>
                  <textarea name="message" required placeholder="How can we help?" rows={3} className="w-full border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary"></textarea>
                </div>
                <button type="submit" className="w-full bg-brand-primary text-white font-bold py-4 rounded-xl hover:bg-brand-secondary transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
