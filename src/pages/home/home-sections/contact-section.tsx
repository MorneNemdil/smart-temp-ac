import React, { useState } from 'react';
import { Phone, Mail, MapPin, Loader2, CheckCircle, Facebook, Instagram } from 'lucide-react';
import { FACEBOOK_LINK, INSTAGRAM_LINK, PHONE_NUMBER } from '@/lib/constants';

const ContactSection: React.FC = () => {
    const [status, setStatus] = useState<'IDLE' | 'SENDING' | 'SUCCESS' | 'ERROR'>('IDLE');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('SENDING');
        const formData = new FormData(e.currentTarget);
        formData.append("access_key", import.meta.env.VITE_EMAIL_ACCESS_KEY!);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });
            const data = await response.json();

            if (data.success) {
                setStatus('SUCCESS');
                (e.target as HTMLFormElement).reset();
                setTimeout(() => setStatus('IDLE'), 5000); 
            } else {
                setStatus('ERROR');
            }
        } catch (error: any) {
            setStatus('ERROR');
            console.log("Error: ", error);
        }
    };

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 bg-[var(--brand-navy)] rounded-3xl overflow-hidden shadow-2xl">
                    <div className="p-12 text-white flex flex-col justify-center">
                        <h2 className="text-4xl font-black mb-6 uppercase tracking-tight">Get In Touch</h2>
                        <p className="text-gray-300 mb-10 text-lg">Ready to optimize your home's climate? Contact our expert engineers today for a free survey.</p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 group cursor-pointer">
                                <div className="p-3 bg-[var(--brand-blue)] rounded-lg group-hover:bg-[var(--brand-orange)] transition-colors"><Phone size={20} /></div>
                                <span className="font-bold text-xl">{PHONE_NUMBER}</span>
                            </div>
                            <div className="flex items-center gap-4 group cursor-pointer">
                                <div className="p-3 bg-[var(--brand-blue)] rounded-lg group-hover:bg-[var(--brand-orange)] transition-colors"><Mail size={20} /></div>
                                <span className="font-bold text-lg">J.gladwish@smart-temp.co.uk</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-[var(--brand-blue)] rounded-lg"><MapPin size={20} /></div>
                                <span className="font-bold text-lg">East Sussex, UK</span>
                            </div>
                        </div>

                        {/* Social Media Row */}
                        <div className="mt-12 pt-10 border-t border-white/10 flex gap-6">
                            <a href={FACEBOOK_LINK} className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-xl hover:bg-[var(--brand-blue)] transition-all group">
                                <Facebook size={24} className="text-[var(--brand-blue)] group-hover:text-white" />
                                <span className="font-bold text-sm">Facebook</span>
                            </a>
                            <a href={INSTAGRAM_LINK} className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-xl hover:bg-[var(--brand-orange)] transition-all group">
                                <Instagram size={24} className="text-[var(--brand-orange)] group-hover:text-white" />
                                <span className="font-bold text-sm">Instagram</span>
                            </a>
                        </div>
                    </div>

                    <div className="bg-white p-12">
                        {status === 'SUCCESS' ? (
                            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in zoom-in">
                                <CheckCircle size={64} className="text-green-500" />
                                <h3 className="text-2xl font-black text-[var(--brand-navy)]">Message Received!</h3>
                                <p className="text-gray-600">Our team will contact you shortly.</p>
                                <button onClick={() => setStatus('IDLE')} className="text-[var(--brand-blue)] font-bold underline">New Message</button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <input name="name" required type="text" placeholder="Name" className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[var(--brand-blue)] outline-none" />
                                    <input name="email" required type="email" placeholder="Email" className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[var(--brand-blue)] outline-none" />
                                </div>
                                <input name="subject" required type="text" placeholder="Subject" className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[var(--brand-blue)] outline-none" />
                                <textarea name="message" required placeholder="Your Message" rows={4} className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[var(--brand-blue)] outline-none"></textarea>
                                <button type='submit' disabled={status === 'SENDING'} className={`w-full flex justify-center items-center gap-2 font-black py-4 rounded-xl transition-all uppercase tracking-widest shadow-lg ${status === 'SENDING' ? 'bg-gray-300 cursor-not-allowed' : 'bg-[var(--brand-orange)] text-[var(--brand-navy)] hover:bg-[var(--brand-blue)] hover:text-white'}`}>
                                    {status === 'SENDING' ? <><Loader2 className="animate-spin" /> Sending...</> : 'Send Inquiry'}
                                </button>
                                {status === 'ERROR' && <p className="text-red-500 text-sm font-bold text-center">Please try again later.</p>}
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;