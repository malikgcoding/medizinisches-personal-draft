import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="px-4 sm:px-6 py-12 border-t border-border-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-sm text-muted-foreground">
            medizinisches-personal.de
          </span>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link to="/impressum" rel="nofollow" className="hover:text-primary transition-colors">Impressum</Link>
            <Link to="/datenschutz" rel="nofollow" className="hover:text-primary transition-colors">Datenschutz</Link>
          </div>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Alle Rechte vorbehalten
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
