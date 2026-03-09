import { Wind, Thermometer, ShieldCheck, Zap } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: 'Precision Installation',
      desc: 'Bespoke cooling solutions tailored to your property’s unique thermal requirements.',
      icon: <Wind className="text-[var(--brand-blue)]" size={32} />,
    },
    {
      title: 'Heating Solutions',
      desc: 'Advanced heat pump technology to maintain warmth during the coldest winter months.',
      icon: <Thermometer className="text-[var(--brand-orange)]" size={32} />,
    },
    {
      title: 'Planned Maintenance',
      desc: 'Preventative servicing to ensure peak efficiency and extend equipment lifespan.',
      icon: <ShieldCheck className="text-[var(--brand-blue)]" size={32} />,
    },
    {
      title: 'Rapid Repairs',
      desc: 'Emergency diagnostics and repair services to restore your comfort immediately.',
      icon: <Zap className="text-[var(--brand-orange)]" size={32} />,
    }
  ];

  return (
    <section className="py-24 bg-[var(--brand-navy)] text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-black mb-4 uppercase tracking-tight">Our Core Services</h2>
        <div className="w-20 h-1.5 bg-[var(--brand-blue)] mx-auto mb-16 rounded-full" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-[var(--brand-blue)] transition-all group">
              <div className="mb-6 inline-block p-4 bg-white/10 rounded-xl group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;