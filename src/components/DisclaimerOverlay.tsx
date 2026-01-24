import { useState, useEffect } from 'react';

const DisclaimerOverlay = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (isVisible) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      document.documentElement.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      document.documentElement.style.overflow = '';
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 px-4 py-4 sm:py-0">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full p-6 sm:p-8 max-h-[85vh] sm:max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6" style={{ color: '#2f6f5e' }}>Hinweis</h2>
        
        <div className="space-y-4 text-muted-foreground leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
          <p>Diese Website ist <strong>kein operativer Dienst</strong>.</p>
          
          <p>
            Es werden keine Jobs angeboten, keine Personalvermittlung oder Arbeitnehmerüberlassung betrieben, kein Personal angeboten,
            keine Bewerberdaten verarbeitet und keine Service-, Beratungs- oder Vermittlungsleistungen erbracht.
          </p>
          
          <p>
            Diese Website dient ausschließlich der neutralen Darstellung digitaler Assets (Domains) und stellt kein Angebot im rechtlichen Sinne dar.
          </p>
          
          <p>
            Es werden keine Cookies eingesetzt, keine personenbezogenen oder technischen Daten gespeichert, keine Tracking- oder Analyse-Tools verwendet.
          </p>
          
          <p>
            Mit Klick auf „OK" bestätigen Sie, dass Sie diesen Hinweis zur Kenntnis genommen haben.
          </p>
        </div>
        
        <button
          onClick={() => setIsVisible(false)}
          className="w-full text-white py-4 rounded-md font-semibold transition-colors"
          style={{ backgroundColor: '#2f6f5e' }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#265a4d'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2f6f5e'}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default DisclaimerOverlay;
