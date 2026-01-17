import React from 'react';
import { PRICING } from '../constants';
import { Check, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const PricingPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-36 pb-32 bg-revonza-base transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-24 animate-fade-in-up">
           <span className="text-revonza-accent font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Pricing</span>
          <h1 className="text-5xl md:text-7xl font-bold text-revonza-text mb-8">Invest in Excellence</h1>
          <p className="text-xl text-revonza-textMuted max-w-2xl mx-auto font-light leading-relaxed">
            Transparent pricing packages designed to scale with your ambition. No hidden fees, just pure value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {PRICING.map((tier, index) => (
            <div 
              key={tier.name} 
              className={`relative flex flex-col p-12 rounded-[2.5rem] border transition-all duration-500 animate-scale-in group ${
                tier.recommended 
                  ? 'bg-revonza-surface border-revonza-accent shadow-[0_0_60px_rgba(139,92,246,0.25)] scale-105 z-10' 
                  : 'glass-panel border-revonza-border hover:border-revonza-text/20 hover:bg-revonza-surface'
              }`}
              style={{ animationDelay: tier.recommended ? '300ms' : `${index * 150}ms` }}
            >
              {tier.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-revonza-accent to-purple-600 text-white px-8 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-xl border border-white/20">
                  Most Popular
                </div>
              )}

              <h3 className={`text-2xl font-bold mb-6 ${tier.recommended ? 'text-revonza-accent' : 'text-revonza-text'}`}>{tier.name}</h3>
              <div className="mb-10">
                <span className="text-6xl font-bold text-revonza-text tracking-tighter">{tier.price}</span>
                {tier.price !== 'Custom' && <span className="text-gray-500 ml-2 font-medium">/project</span>}
              </div>

              <div className={`h-[1px] w-full mb-10 ${tier.recommended ? 'bg-gradient-to-r from-revonza-accent/50 to-transparent' : 'bg-revonza-border'}`}></div>

              <ul className="space-y-6 mb-12 flex-1">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-revonza-textMuted text-sm font-medium">
                    <div className={`p-1 rounded-full flex-shrink-0 ${tier.recommended ? 'bg-revonza-accent text-white' : 'bg-revonza-surface border border-revonza-border text-gray-400'}`}>
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link 
                to="/contact"
                className={`w-full py-5 rounded-2xl font-bold text-sm uppercase tracking-widest text-center transition-all shadow-lg ${
                  tier.recommended
                    ? 'bg-revonza-accent text-white hover:bg-revonza-accent/90 hover:shadow-revonza-accent/40'
                    : 'bg-revonza-surface text-revonza-text hover:bg-revonza-text hover:text-revonza-base border border-revonza-border'
                }`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;