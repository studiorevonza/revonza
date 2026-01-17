import React from 'react';
import { Quote, Users, Globe, Award, Clock } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-36 pb-32 bg-revonza-base transition-colors duration-300">
      <div className="container mx-auto px-4">
        
        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32 items-center">
          <div className="animate-slide-in-left">
             <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-8 bg-revonza-accent"></div>
                <span className="text-revonza-accent font-bold tracking-[0.25em] uppercase text-sm">Our DNA</span>
             </div>
             
             <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-revonza-text mb-8 leading-[0.9] tracking-tighter">
               We Are <br />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-revonza-text via-purple-300 to-revonza-accent">Builders.</span>
             </h1>
             
             <div className="h-1.5 w-24 bg-gradient-to-r from-revonza-accent to-transparent mb-12 rounded-full opacity-80"></div>
             
             <p className="text-xl text-revonza-textMuted font-light leading-relaxed max-w-lg border-l-2 border-revonza-border pl-8 ml-2">
               Revonza Studio was born from the convergence of art and algorithm. We exist to prove that technical robustness and aesthetic beauty are not mutually exclusive.
             </p>
          </div>
          
          <div className="relative animate-scale-in delay-200 flex justify-center lg:justify-end mt-12 lg:mt-0">
             <div className="rounded-[2.5rem] overflow-hidden border border-revonza-border relative z-10 w-full max-w-[800px] h-auto shadow-[0_0_60px_rgba(0,0,0,0.1)] group">
                <div className="absolute inset-0 bg-revonza-accent/10 mix-blend-overlay z-20 group-hover:bg-transparent transition-all duration-700"></div>
                <img 
                  src="/Aboutimage.png" 
                  alt="Team collaboration" 
                  className="w-full h-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-105"
                />
             </div>
             {/* Decorative Elements */}
             <div className="absolute top-0 right-0 w-full max-w-[500px] h-full border border-revonza-accent/20 rounded-[2.5rem] translate-x-6 -translate-y-6 -z-0"></div>
             <div className="absolute bottom-0 left-0 w-3/4 h-3/4 bg-gradient-to-tr from-revonza-accent/10 to-transparent rounded-full -translate-x-12 translate-y-12 blur-[80px] -z-0"></div>
          </div>
        </div>

        {/* Stats - Refined Glass Panels */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-32">
           {[
             { val: '3+', label: 'Years Experience', icon: Clock },
             { val: '50+', label: 'Projects Shipped', icon: Award },
             { val: '12', label: 'Global Partners', icon: Globe },
             { val: '24/7', label: 'Support', icon: Users }
           ].map((stat, i) => (
             <div 
                key={i} 
                className={`glass-panel p-8 rounded-[2rem] text-center animate-fade-in-up border border-revonza-border hover:border-revonza-accent/40 hover:bg-revonza-surface transition-all duration-300 hover:-translate-y-2 group`} 
                style={{ animationDelay: `${i * 100}ms` }}
             >
                <div className="mb-4 flex justify-center">
                    <stat.icon className="text-revonza-textMuted group-hover:text-revonza-accent transition-colors duration-300" size={28} strokeWidth={1.5} />
                </div>
                <span className="text-4xl md:text-5xl font-bold text-revonza-text block mb-2 tracking-tight">{stat.val}</span>
                <span className="text-xs md:text-sm text-gray-500 uppercase tracking-widest font-bold group-hover:text-revonza-text transition-colors">{stat.label}</span>
             </div>
           ))}
        </div>

        {/* Philosophy - Enclosed Layout */}
        <div className="relative animate-fade-in-up delay-300">
           <div className="absolute inset-0 bg-gradient-to-r from-revonza-accent/10 to-transparent rounded-[3rem] blur-2xl opacity-50"></div>
           <div className="glass-panel rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden border border-revonza-border">
               {/* Background detail */}
               <Quote className="absolute top-12 left-12 text-revonza-text/5 w-32 h-32 -rotate-12 transform -translate-x-1/2 -translate-y-1/2" />
               <Quote className="absolute bottom-12 right-12 text-revonza-text/5 w-32 h-32 rotate-12 scale-x-[-1] transform translate-x-1/2 translate-y-1/2" />
               
               <h2 className="text-sm font-bold text-revonza-accent uppercase tracking-[0.3em] mb-12 relative z-10">Our Philosophy</h2>
               <p className="text-3xl md:text-5xl text-revonza-text font-medium leading-tight relative z-10 max-w-5xl mx-auto drop-shadow-2xl">
                 "We don't just build websites; we engineer <span className="text-transparent bg-clip-text bg-gradient-to-r from-revonza-accent to-purple-400">digital ecosystems</span>. Every project is an opportunity to push the boundaries of what's possible on the web."
               </p>
           </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;