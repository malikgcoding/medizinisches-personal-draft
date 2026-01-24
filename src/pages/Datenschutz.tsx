import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import DisclaimerOverlay from '@/components/DisclaimerOverlay';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Datenschutz = () => {
  useEffect(() => {
    document.title = 'Datenschutz | Medizinisches Personal';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Datenschutzerklärung von Medizinisches Personal.');
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <DisclaimerOverlay />
      <Header />
      <main className="flex-grow">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-32 pb-16">
          <h1 className="section-heading mb-8">Datenschutzerklärung</h1>
          
          <div className="prose prose-slate max-w-none space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Datenschutz auf einen Blick</h2>
              <h3 className="text-lg font-semibold text-foreground mb-2">Allgemeine Hinweise</h3>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. Hosting</h2>
              <p>
                Diese Website wird bei Netlify gehostet. Anbieter ist die Netlify, Inc., 44 Montgomery Street, Suite 300, San Francisco, California 94104, USA.
              </p>
              <p>
                Netlify erfasst in sogenannten Logfiles folgende Daten: IP-Adresse, Browser-Typ, Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners und Uhrzeit der Serveranfrage. Diese Daten werden in den USA verarbeitet.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. Allgemeine Hinweise und Pflichtinformationen</h2>
              <h3 className="text-lg font-semibold text-foreground mb-2">Verantwortliche Stelle</h3>
              <p>
                D.I.E. STRATEGIE GmbH<br />
                Grüner Hof 5<br />
                89073 Ulm<br />
                E-Mail: info@die-strategie.de
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. Datenerfassung auf dieser Website</h2>
              <h3 className="text-lg font-semibold text-foreground mb-2">Keine Cookies</h3>
              <p>
                Diese Website verwendet keine Cookies.
              </p>
              <h3 className="text-lg font-semibold text-foreground mb-2">Keine Tracking-Tools</h3>
              <p>
                Diese Website verwendet keine Tracking- oder Analyse-Tools wie Google Analytics, Matomo oder ähnliche Dienste.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Ihre Rechte</h2>
              <p>
                Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">6. Beschwerderecht bei der zuständigen Aufsichtsbehörde</h2>
              <p>
                Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
              </p>
            </section>

            <section>
              <p className="text-sm italic">
                Stand: 07.01.2026
              </p>
            </section>

            <div className="mt-8">
              <Link to="/" className="text-primary hover:underline">← Zurück zur Startseite</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Datenschutz;
