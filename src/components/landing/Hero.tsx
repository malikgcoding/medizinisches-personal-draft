const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-light/30 via-background to-background" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <span className="pill-badge">
            Premium Domain verfügbar
          </span>
        </div>

        {/* Main Headline */}
        <h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in text-balance"
          style={{ animationDelay: '0.2s' }}
        >
          Medizinisches Personal
        </h1>

        {/* Subheadline */}
        <p 
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in"
          style={{ animationDelay: '0.3s' }}
        >
          Die ideale Domain für Personalvermittlung, Recruiting und HR-Lösungen im Gesundheitswesen. 
          Strategisch wertvoll, sofort einsatzbereit.
        </p>

        {/* CTA Buttons */}
        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in"
          style={{ animationDelay: '0.4s' }}
        >
          <a href="#contact" className="pill-button-primary">
            Jetzt anfragen
          </a>
          <a href="#details" className="pill-button-outline">
            Mehr erfahren
          </a>
        </div>

        {/* Domain display */}
        <div 
          className="mt-16 animate-fade-in"
          style={{ animationDelay: '0.5s' }}
        >
          <div className="inline-flex items-center gap-3 bg-card rounded-full px-6 py-3 shadow-soft border border-border-subtle">
            <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">Domain:</span>
            <span className="font-semibold text-foreground">medizinisches-personal.de</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
