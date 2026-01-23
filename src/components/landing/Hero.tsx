const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center px-6 py-20 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-light/30 via-background to-background" />
      
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          {/* Left side - Text content */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
              Medizinisches Personal
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Die ideale Domain für Personalvermittlung, Recruiting und HR-Lösungen im Gesundheitswesen. 
              Strategisch wertvoll, sofort einsatzbereit für den DACH-Raum.
            </p>
          </div>

          {/* Right side - DACH Map */}
          <div 
            className="flex justify-center md:justify-end animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            <img 
              src="/dach_map.svg" 
              alt="DACH Region - Deutschland, Österreich, Schweiz" 
              className="w-full max-w-md opacity-90"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
