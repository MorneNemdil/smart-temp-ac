import React from 'react';
import AboutImage from '@/assets/about-image.png';

const AboutSection: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[var(--brand-blue)]/10 rounded-full blur-2xl" />
            <img 
              src={AboutImage}
              alt="Professional Installation" 
              className="rounded-2xl shadow-2xl relative z-10 w-full object-cover aspect-square"
            />
            <div className="absolute -bottom-6 -right-6 bg-[var(--brand-navy)] text-white p-8 rounded-xl shadow-xl z-20 hidden md:block">
              <p className="text-3xl font-black text-[var(--brand-blue)]">15+</p>
              <p className="text-xs uppercase tracking-widest font-bold">Years Experience</p>
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-black text-[var(--brand-navy)] mb-6 leading-tight">
              Your Local Experts in <br />
              <span className="text-[var(--brand-blue)] italic">Climate Control</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At <strong className="text-[var(--brand-navy)]">Smart Temp Home Aircon</strong>, we specialize in providing bespoke cooling and heating solutions. Whether you need an "ice-cold" escape from the summer heat or a reliable warmth during the winter months, our certified engineers ensure your home remains a sanctuary of comfort.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                { label: 'Certified F-Gas Engineers', color: 'var(--brand-blue)' },
                { label: 'Energy Efficient Systems', color: 'var(--brand-orange)' },
                { label: '24/7 Emergency Support', color: 'var(--brand-blue)' }
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-bold text-[var(--brand-navy)]">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;