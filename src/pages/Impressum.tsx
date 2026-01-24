import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import DisclaimerOverlay from '@/components/DisclaimerOverlay';
import { Link } from 'react-router-dom';

const Impressum = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <DisclaimerOverlay />
      <Header />
      <main className="flex-grow">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-32 pb-16">
          <h1 className="section-heading mb-8">Impressum</h1>
          
          <div className="prose prose-slate max-w-none space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Angaben gemäß § 5 TMG</h2>
              <p>
                D.I.E. STRATEGIE GmbH<br />
                Grüner Hof 5<br />
                89073 Ulm
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Kontakt</h2>
              <p>
                Telefon: +49 731 14016773<br />
                E-Mail: info@die-strategie.de
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Registereintrag</h2>
              <p>
                Eintragung im Handelsregister<br />
                Registergericht: Amtsgericht Ulm<br />
                Registernummer: HRB 739512
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Umsatzsteuer-ID</h2>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                DE355253623
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Vertretungsberechtigter Geschäftsführer</h2>
              <p>Malik Senghor</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">Hinweis</h2>
              <p>
                Diese Website dient ausschließlich der Präsentation eines Domain-Portfolios. Es werden keine operativen Dienstleistungen angeboten, keine Stellenangebote vermittelt und kein Personalrecruiting betrieben.
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

export default Impressum;
