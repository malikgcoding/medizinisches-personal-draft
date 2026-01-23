const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border-subtle">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground text-sm font-bold">M</span>
          </div>
          <span className="font-semibold text-foreground hidden sm:inline">
            medizinisches-personal.de
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#details" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Details
          </a>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Kontakt
          </a>
        </nav>

        <a href="#contact" className="pill-button-primary text-sm px-6 py-2.5">
          Anfragen
        </a>
      </div>
    </header>
  );
};

export default Header;
