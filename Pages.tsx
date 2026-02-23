import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICES, OAKVILLE_NEIGHBORHOODS } from '../data';
import { CheckCircle2, ArrowLeft, Phone, ShieldCheck, Clock, MapPin, Star, Wrench } from 'lucide-react';

export const ServicePage = () => {
  const { serviceId } = useParams();
  const serviceName = serviceId?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  
  const relatedServices = SERVICES.filter(s => s !== serviceName).slice(0, 6);

  return (
    <div className="pb-24">
      <div className="bg-slate-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{serviceName} in Oakville</h1>
          <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
            Professional {serviceName} services for residential and commercial properties throughout Oakville, Ontario.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100">
              <h2 className="text-3xl font-bold mb-6">Expert {serviceName} Solutions</h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-6">
                <p>
                  Are you looking for reliable <strong>{serviceName}</strong> in Oakville? Our team of certified technicians specializes in providing high-quality, durable solutions for all your door and window needs.
                </p>
                
                <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Select Your Neighborhood for Local Service</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {OAKVILLE_NEIGHBORHOODS.map(n => (
                    <Link 
                      key={n} 
                      to={`/service/${serviceId}/${n.toLowerCase().replace(/ /g, '-')}`}
                      className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl border border-slate-200 hover:border-brand-primary hover:bg-white transition-all group"
                    >
                      <MapPin className="w-4 h-4 text-brand-secondary group-hover:text-brand-primary" />
                      <span className="text-sm font-semibold">{serviceName} in {n}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-brand-primary p-8 rounded-3xl text-white sticky top-24">
              <h3 className="text-2xl font-bold mb-6">Get a Quote</h3>
              <form action="https://formspree.io/f/mnjbojan" method="POST" className="space-y-4">
                <input name="name" type="text" required className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-accent" placeholder="Full Name" />
                <input name="phone" type="tel" required className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-accent" placeholder="Phone Number" />
                <input name="service" type="text" defaultValue={serviceName} className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none" readOnly />
                <button type="submit" className="w-full bg-brand-accent text-slate-900 font-bold py-4 rounded-xl hover:scale-105 transition-transform mt-4">
                  Request Estimate
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const LocationPage = () => {
  const { locationId } = useParams();
  const locationName = locationId?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  
  return (
    <div className="pb-24">
      <div className="bg-brand-primary py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Door & Window Services in {locationName}</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <h2 className="text-3xl font-bold mb-8">Available Services in {locationName}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {SERVICES.map(s => (
            <Link 
              key={s} 
              to={`/service/${s.toLowerCase().replace(/ /g, '-')}/${locationId}`}
              className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200 hover:border-brand-primary hover:shadow-md transition-all"
            >
              <CheckCircle2 className="w-5 h-5 text-brand-secondary" />
              <span className="font-semibold text-slate-700">{s}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export const ServiceLocationPage = () => {
  const { serviceId, locationId } = useParams();
  const serviceName = serviceId?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const locationName = locationId?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  return (
    <div className="pb-24">
      <div className="bg-slate-900 py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://picsum.photos/seed/door-repair/1920/1080" alt="Background" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-brand-accent mb-6 font-bold uppercase tracking-widest text-sm">
            <MapPin className="w-4 h-4" />
            {locationName}, Oakville
          </div>
          <h1 className="text-4xl md:text-7xl font-bold mb-8 leading-tight">
            {serviceName} <br />
            <span className="text-brand-accent">in {locationName}</span>
          </h1>
          <div className="flex flex-wrap gap-6 text-lg text-slate-300">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-brand-accent" />
              24/7 Emergency Service
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-brand-accent" />
              Licensed & Insured
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-brand-accent" />
              Top Rated Local Pros
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div className="bg-white p-8 md:p-16 rounded-[2.5rem] shadow-2xl border border-slate-100">
              <div className="prose prose-slate prose-lg max-w-none text-slate-600 leading-relaxed">
                <h2 className="text-4xl font-bold text-slate-900 mb-8">Professional {serviceName} in {locationName}</h2>
                <p>
                  Are you experiencing issues with your doors or windows in <strong>{locationName}</strong>? Our local Oakville team is here to help. We specialize in <strong>{serviceName}</strong>, providing fast, reliable, and professional solutions for both residential and commercial properties in the {locationName} area.
                </p>
                
                <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                    <Wrench className="w-10 h-10 text-brand-primary mb-4" />
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Expert Repairs</h3>
                    <p className="text-sm">We handle everything from minor adjustments to major structural repairs for all types of doors.</p>
                  </div>
                  <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                    <ShieldCheck className="w-10 h-10 text-brand-primary mb-4" />
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Quality Guaranteed</h3>
                    <p className="text-sm">All our work in {locationName} is backed by a comprehensive warranty on parts and labor.</p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-6">Why {locationName} Residents Trust Us</h3>
                <ul className="space-y-4 list-none p-0">
                  {[
                    "Local technicians stationed in Oakville for rapid response.",
                    "Expertise in both modern and historic door styles found in " + locationName + ".",
                    "Transparent pricing with no hidden fees.",
                    "Emergency 24/7 support for broken or jammed doors.",
                    "High-quality replacement parts and hardware."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-brand-secondary shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-16 p-8 bg-brand-primary/5 rounded-3xl border border-brand-primary/10">
                  <h3 className="text-2xl font-bold text-brand-primary mb-4">Request Your Free Estimate in {locationName}</h3>
                  <p className="mb-0">
                    Don't let a faulty door compromise your security or convenience. Contact our {locationName} team today for a free, no-obligation quote on your <strong>{serviceName}</strong> needs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-brand-primary p-10 rounded-[2.5rem] text-white sticky top-24 shadow-2xl shadow-brand-primary/20">
              <h3 className="text-3xl font-bold mb-8">Get a Free Quote</h3>
              <form action="https://formspree.io/f/mnjbojan" method="POST" className="space-y-5">
                <input type="hidden" name="_subject" value={`New Lead: ${serviceName} in ${locationName}`} />
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2 opacity-60">Your Name</label>
                  <input name="name" type="text" required className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all" placeholder="Enter your name" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2 opacity-60">Phone Number</label>
                  <input name="phone" type="tel" required className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all" placeholder="(905) 000-0000" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2 opacity-60">Service & Location</label>
                  <input name="context" type="text" defaultValue={`${serviceName} - ${locationName}`} className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 focus:outline-none opacity-50" readOnly />
                </div>
                <button type="submit" className="w-full bg-brand-accent text-slate-900 font-bold py-5 rounded-xl hover:scale-[1.02] transition-all text-lg shadow-xl shadow-brand-accent/20">
                  Send Request
                </button>
              </form>
              
              <div className="mt-10 pt-10 border-t border-white/10 flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                  <Phone className="w-7 h-7 text-brand-accent" />
                </div>
                <div>
                  <p className="text-sm opacity-60 font-medium">Call Us Now</p>
                  <p className="text-2xl font-bold">(289) 672-0590</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
