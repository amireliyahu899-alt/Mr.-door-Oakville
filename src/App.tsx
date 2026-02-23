/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header, Hero, Footer } from './components/Layout';
import { Home } from './components/Home';
import { ServicePage, LocationPage, ServiceLocationPage } from './components/Pages';
import { useEffect } from 'react';
import { SERVICES } from './data';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans selection:bg-brand-accent selection:text-slate-900">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Home />
              </>
            } />
            <Route path="/service/:serviceId" element={<ServicePage />} />
            <Route path="/service/:serviceId/:locationId" element={<ServiceLocationPage />} />
            <Route path="/location/:locationId" element={<LocationPage />} />
            {/* Fallback for all services list */}
            <Route path="/services" element={
              <div className="py-24 max-w-7xl mx-auto px-4">
                <h1 className="text-4xl font-bold mb-12 text-center">All Services by Mr. door Oakville</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {SERVICES.map((service) => (
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
              </div>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
