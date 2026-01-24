const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border-subtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="Logo" className="h-6 w-auto" />
        </a>
        <a 
          href="mailto:hallo@medizinisches-personal.de" 
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-primary/10 transition-colors"
          aria-label="E-Mail senden"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2f6f5e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
        </a>
      </div>
    </header>
  );
};

export default Header;
