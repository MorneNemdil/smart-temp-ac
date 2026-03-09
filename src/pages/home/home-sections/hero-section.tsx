import React from 'react';
import { Link } from 'react-scroll';
import HeroImage from "@/assets/hero-image.png";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[100vh] flex items-center pt-20 overflow-hidden bg-[var(--brand-navy)]">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-navy)] via-[var(--brand-navy)]/80 to-transparent z-10" />
        <img
          src={HeroImage}
          alt="Modern Home Air Conditioning"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-white">
            Stay <span className="text-[var(--brand-blue)]">Cool</span>. <br />
            Stay <span className="text-[var(--brand-orange)]">Comfortable</span>.
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 text-gray-200 max-w-xl leading-relaxed">
            Expert air conditioning installation and maintenance for 
            <strong> Smart Temp Home Aircon</strong> customers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="bg-[var(--brand-blue)] text-white px-10 py-4 rounded-[var(--radius)] font-bold text-center hover:scale-105 transition-transform cursor-pointer shadow-lg"
            >
              Get a Free Quote
            </Link>
            <Link
              to="services"
              smooth={true}
              duration={500}
              className="border-2 border-white/40 backdrop-blur-md text-white px-10 py-4 rounded-[var(--radius)] font-bold text-center hover:bg-white/10 transition-all cursor-pointer"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;