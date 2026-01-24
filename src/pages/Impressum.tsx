import { Link } from 'react-router-dom';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import DisclaimerOverlay from '@/components/DisclaimerOverlay';

const Impressum = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <DisclaimerOverlay />
      <Header />
      <main className="pt-32 px-4 sm:px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-heading mb-8">Impressum</h2>
          
          <div className="text-muted-foreground space-y-6 leading-relaxed">
            <div>
              <p className="font-semibold mb-2">Anbieter</p>
              <p>D.I.E. STRATEGIE GmbH</p>
              <p>Ensingerstraße 33/2</p>
              <p>89073 Ulm</p>
              <p>Deutschland</p>
            </div>

            <div>
              <p className="font-semibold mb-2">Vertreten durch den Geschäftsführer</p>
              <p>Damir Koren</p>
            </div>

            <div>
              <p className="font-semibold mb-2">Kontakt</p>
              <p>Telefon: +49 731 1461789-1</p>
              <p>E-Mail: hallo@medizinisches-personal.de</p>
            </div>

            <div>
              <p className="font-semibold mb-2">Registereintrag</p>
              <p>Registergericht: Amtsgericht Ulm</p>
              <p>Registernummer: HRB 748810</p>
            </div>

            <div>
              <p className="font-semibold mb-2">Umsatzsteuer-Identifikationsnummer</p>
              <p>DE310597771 gemäß § 27a Umsatzsteuergesetz (UStG)</p>
            </div>

            <div>
              <p className="font-semibold mb-2">Verantwortlich für journalistisch-redaktionelle Inhalte nach § 18 Abs. 2 MStV</p>
              <p>Damir Koren</p>
              <p>Ensingerstraße 33/2</p>
              <p>89073 Ulm</p>
              <p>Deutschland</p>
            </div>

            <div>
              <p className="font-semibold mb-2">Geltungsbereich</p>
              <p>Dieses Impressum gilt für die Website medizinisches-personal.de sowie alle zugehörigen Unterseiten.</p>
            </div>

            <div>
              <p>Diese Website stellt kein Angebot an Arbeitnehmer oder Arbeitgeber dar und erbringt keine Personal-, Vermittlungs-, Zeitarbeits- oder Beratungsleistungen.</p>
              <p>Sie dient ausschließlich der neutralen Darstellung digitaler Assets (Domains).</p>
              <p>Eine etwaige Übertragung digitaler Assets (Domains) erfolgt ausschließlich individuell und außerhalb dieser Website.</p>
            </div>

            <div>
              <p className="font-semibold mb-2">Urheberrecht</p>
              <p>Die Inhalte und Werke auf dieser Website unterliegen dem deutschen Urheberrecht.</p>
              <p>Jede Verwertung außerhalb gesetzlicher Grenzen bedarf der vorherigen schriftlichen Zustimmung der Rechteinhaber.</p>
            </div>
          </div>

          <div className="mt-12">
            <Link 
              to="/" 
              className="inline-flex items-center text-primary hover:underline transition-colors"
            >
              ← Zurück zur Startseite
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Impressum;
