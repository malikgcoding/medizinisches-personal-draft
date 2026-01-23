const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border-subtle">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center">
        <a href="/" className="flex items-center gap-2">
          <img src="/placeholder.svg" alt="Logo" className="w-8 h-8" />
        </a>
      </div>
    </header>
  );
};

export default Header;
