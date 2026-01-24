import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import DisclaimerOverlay from '@/components/DisclaimerOverlay';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Impressum = () => {
  useEffect(() => {
    document.title = 'Impressum | Medizinisches Personal';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Impressum und rechtliche Angaben zu Medizinisches Personal.');
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <DisclaimerOverlay />
      <Header />
      <main className="flex-grow">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-32 pb-16">
          <h1 className="section-heading mb-8">Impressum</h1>
          
          <div className="prose prose-slate max-w-none space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-xl font-semibold text-primary mb-3">Anbieter</h2>
              <p>
                D.I.E. STRATEGIE GmbH<br />
                Ensingerstraße 33/2<br />
                89073 Ulm<br />
                Deutschland
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mb-3">Vertreten durch den Geschäftsführer</h2>
              <p>Damir Koren</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mb-3">Kontakt</h2>
              <p>
                Telefon: +49 731 1461789-1<br />
                E-Mail: hallo@medizinisches-personal.de
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mb-3">Registereintrag</h2>
              <p>
                Registergericht: Amtsgericht Ulm<br />
                Registernummer: HRB 748810
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mb-3">Umsatzsteuer-Identifikationsnummer</h2>
              <p>
                DE310597771 gemäß § 27a Umsatzsteuergesetz (UStG)
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mb-3">Verantwortlich für journalistisch-redaktionelle Inhalte nach § 18 Abs. 2 MStV</h2>
              <p>
                Damir Koren<br />
                Ensingerstraße 33/2<br />
                89073 Ulm<br />
                Deutschland
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mb-3">Geltungsbereich</h2>
              <p>
                Dieses Impressum gilt für die Website medizinisches-personal.de sowie alle zugehörigen Unterseiten.
              </p>
              <p>
                Diese Website stellt kein Angebot an Arbeitnehmer oder Arbeitgeber dar und erbringt keine Personal-, Vermittlungs-, Zeitarbeits- oder Beratungsleistungen.<br />
                Sie dient ausschließlich der neutralen Darstellung digitaler Assets (Domains).<br />
                Eine etwaige Übertragung digitaler Assets (Domains) erfolgt ausschließlich individuell und außerhalb dieser Website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mb-3">Urheberrecht</h2>
              <p>
                Die Inhalte und Werke auf dieser Website unterliegen dem deutschen Urheberrecht.<br />
                Jede Verwertung außerhalb gesetzlicher Grenzen bedarf der vorherigen schriftlichen Zustimmung der Rechteinhaber.
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
