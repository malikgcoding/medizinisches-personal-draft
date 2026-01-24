const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border-subtle">
      <div className="px-4 sm:px-6 py-4">
        <a href="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="Logo" className="h-6 w-auto" />
        </a>
      </div>
    </header>
  );
};

export default Header;
