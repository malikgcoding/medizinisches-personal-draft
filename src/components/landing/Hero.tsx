const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center px-4 sm:px-6 pb-10 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-light/30 via-background to-background" />
      
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 items-center">
          {/* DACH Map - Above title on mobile, right side on desktop */}
          <div 
            className="flex justify-start md:justify-end animate-fade-in order-1 md:order-2 w-full"
            style={{ animationDelay: '0.2s' }}
          >
            <img 
              src="/dach_map.svg" 
              alt="DACH Region - Deutschland, Österreich, Schweiz" 
              className="w-48 md:w-full md:max-w-md opacity-90"
            />
          </div>

          {/* Text content - Below map on mobile, left side on desktop */}
          <div className="animate-fade-in order-2 md:order-1" style={{ animationDelay: '0.1s' }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
              medizinisches personal
            </h1>
            <div className="text-lg md:text-xl text-muted-foreground leading-relaxed space-y-4">
              <p className="font-medium">Das Domain-Paket für den gesamten deutschsprachigen Gesundheitsmarkt</p>
              <p>
                Sieben Domains.<br />
                Ein generischer Oberbegriff.<br />
                Abdeckung des Suchbegriffs „medizinisches Personal" in Deutschland, Österreich und der Schweiz.
              </p>
              <p>Das Paket kann unverbindlich angefragt werden.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
