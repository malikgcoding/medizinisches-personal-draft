import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="px-4 sm:px-6 py-16 border-t border-border-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex flex-col items-center md:items-start gap-3 text-sm text-muted-foreground">
            <Link to="/impressum" rel="nofollow" className="hover:text-primary transition-colors">Impressum</Link>
            <Link to="/datenschutz" rel="nofollow" className="hover:text-primary transition-colors">Datenschutz</Link>
          </div>

          <div className="flex items-center justify-center">
            <p className="text-xs text-muted-foreground leading-relaxed text-center max-w-5xl">
              Ein Besuch dieser Website begründet kein Vertragsverhältnis. Über diese Seite werden keine Leistungen angeboten. Eine etwaige Übertragung digitaler Assets (Domains) erfolgt ausschließlich individuell und außerhalb dieser Website.
            </p>
          </div>

          <div className="flex items-center justify-center md:justify-end">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Alle Rechte vorbehalten
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
