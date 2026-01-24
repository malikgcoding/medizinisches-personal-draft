import { useState, useEffect } from 'react';

const DisclaimerOverlay = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if overlay has been shown in this browser session
    if (!(window as any).__disclaimerShown) {
      setIsVisible(true);
      (window as any).__disclaimerShown = true;
    }
  }, []);

  useEffect(() => {
    if (isVisible) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4 py-4">
      <div className="bg-background rounded-lg shadow-2xl w-full max-w-2xl max-h-[85vh] sm:max-h-[90vh] overflow-y-auto p-6 sm:p-8">
        <h2 className="text-2xl font-bold mb-6" style={{ color: '#2f6f5e' }}>Hinweis</h2>
        <div className="space-y-4 text-muted-foreground text-sm sm:text-base">
          <p>
            Diese Website ist <strong>keine operative Dienstleistungs-Website</strong>.
          </p>
          <p>
            Hier werden <strong>keine Stellenangebote</strong> veröffentlicht, <strong>kein Recruiting</strong> betrieben 
            und <strong>keine medizinischen oder personalbezogenen Dienstleistungen</strong> erbracht.
          </p>
          <p>
            Es handelt sich um die Präsentation eines <strong>Domain-Portfolio-Pakets</strong> – bestehend aus sieben 
            Domains rund um den Begriff „medizinisches Personal" für die DACH-Region.
          </p>
          <p>
            Ziel ist das <strong>Domain-Eigentum</strong> zu präsentieren und bei Interesse zu veräußern, 
            nicht der Betrieb einer Plattform oder Agentur.
          </p>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="mt-6 w-full py-3 px-6 rounded-md font-semibold text-white transition-colors"
          style={{ backgroundColor: '#2f6f5e' }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#25594b'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2f6f5e'}
        >
          Verstanden
        </button>
      </div>
    </div>
  );
};

export default DisclaimerOverlay;
