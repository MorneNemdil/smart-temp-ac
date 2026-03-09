import { useEffect, useState } from "react";
import { Link } from 'react-scroll';
import Logo from "@/assets/logo-no-bg.png"
import { Facebook, Instagram, Phone } from 'lucide-react';
import { FACEBOOK_LINK, INSTAGRAM_LINK, PHONE_NUMBER } from "@/lib/constants";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setIsAtTop(currentScrollPos < 50);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 transform ${isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${isAtTop
          ? 'bg-transparent py-6'
          : 'bg-[var(--brand-navy)]/90 backdrop-blur-md py-4 shadow-xl'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={Logo} alt="Smart Temp Home Aircon" className="h-12 w-auto object-contain" />
          <div className="flex flex-col leading-none">
            <span className="text-white font-black text-xl tracking-tighter uppercase">Smart Temp</span>
            <span className="text-[var(--brand-orange)] font-bold text-[10px] tracking-[0.2em] uppercase">Home Aircon</span>
          </div>
        </div>

        {/* Desktop Links & Socials */}
        <div className="hidden md:flex items-center gap-8">
          {['Home', 'About', 'Services', 'Contact'].map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              className="text-white/90 hover:text-[var(--brand-blue)] font-bold text-sm uppercase tracking-widest cursor-pointer transition-colors"
            >
              {item}
            </Link>
          ))}

          <div className="flex items-center gap-4 border-l border-white/20 pl-8">
            <a href={FACEBOOK_LINK} target="_blank" rel="noreferrer" className="text-white hover:text-[var(--brand-blue)] transition-colors">
              <Facebook size={20} />
            </a>
            <a href={INSTAGRAM_LINK} target="_blank" rel="noreferrer" className="text-white hover:text-[var(--brand-orange)] transition-colors">
              <Instagram size={20} />
            </a>
            <Link
              to="contact"
              smooth={true}
              className="flex gap-2 bg-[var(--brand-blue)] text-white px-5 py-2 rounded-full font-semibold text-xs uppercase tracking-widest hover:bg-[var(--brand-orange)] transition-colors cursor-pointer"
            >
              <Phone size={16} />
              <p>{PHONE_NUMBER}</p>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;