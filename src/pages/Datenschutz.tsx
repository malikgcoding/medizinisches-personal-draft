import { Link } from 'react-router-dom';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import DisclaimerOverlay from '@/components/DisclaimerOverlay';

const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <DisclaimerOverlay />
      <Header />
      <main className="pt-32 px-4 sm:px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-heading mb-8">Datenschutzerklärung</h2>
          
          <div className="text-muted-foreground space-y-6 leading-relaxed">
            <div>
              <p className="font-semibold mb-2">1. Verantwortliche Stelle</p>
              <p>D.I.E. STRATEGIE GmbH</p>
              <p>Ensingerstraße 33/2</p>
              <p>89073 Ulm</p>
              <p>Deutschland</p>
              <p>Telefon: +49 731 1461789-1</p>
              <p>E-Mail: hallo@medizinisches-personal.de</p>
            </div>

            <div>
              <p className="font-semibold mb-2">2. Zweck und Charakter dieser Website</p>
              <p>Diese Website stellt ausschließlich Informationen zur Verfügung.</p>
              <p>Sie stellt kein Angebot an Arbeitnehmer oder Arbeitgeber dar und erbringt keine Personal-, Vermittlungs-, Zeitarbeits-, Matching-, Recruiting- oder Beratungsleistungen.</p>
              <p>Die Website dient ausschließlich der neutralen Darstellung digitaler Assets (Domains) und stellt kein Angebot im rechtlichen Sinne dar.</p>
              <p>Es erfolgt keine Registrierung, kein Login, keine Datenbanknutzung, keine Verarbeitung von Bewerber- oder Arbeitgeberdaten und keine operative Tätigkeit.</p>
              <p>Eine etwaige Übertragung digitaler Assets (Domains) erfolgt ausschließlich individuell und außerhalb dieser Website.</p>
            </div>

            <div>
              <p className="font-semibold mb-2">3. Server-Logs / Zugriffsdaten</p>
              <p>Die Website wird über Netlify, Inc. gehostet:</p>
              <p>2325 3rd Street, Suite 296, San Francisco, CA 94107, USA.</p>
              <p className="mt-4">Beim Aufruf der Website verarbeitet der Hosting-Provider automatisch technisch notwendige Daten (Server-Logs):</p>
              <p>– IP-Adresse</p>
              <p>– Datum und Uhrzeit des Zugriffs</p>
              <p>– angeforderte Datei / Seite</p>
              <p>– Browsertyp / Version</p>
              <p>– Betriebssystem</p>
              <p className="mt-4">Server-Logs werden spätestens nach 30 Tagen anonymisiert oder gelöscht.</p>
              <p>Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an sicherem Betrieb).</p>
            </div>

            <div>
              <p className="font-semibold mb-2">4. Datenübermittlung in die USA</p>
              <p>Netlify verarbeitet Daten in den USA. Die USA bieten derzeit kein mit der EU vergleichbares Datenschutzniveau.</p>
              <p>Datenübermittlungen erfolgen ausschließlich auf Basis der Standardvertragsklauseln (Art. 46 Abs. 2 lit. c DSGVO).</p>
              <p>Mit Netlify besteht ein Vertrag zur Auftragsverarbeitung gemäß Art. 28 DSGVO.</p>
            </div>

            <div>
              <p className="font-semibold mb-2">5. Cookies und Tracking</p>
              <p>Diese Website verwendet keine Cookies.</p>
              <p>Es werden keine Tracking-, Analyse-, Marketing- oder Profiling-Tools eingesetzt.</p>
            </div>

            <div>
              <p className="font-semibold mb-2">6. Kein Verkauf oder Weitergabe von Daten</p>
              <p>Personenbezogene Daten werden nicht verkauft, vermietet, geteilt oder zu Werbezwecken weitergegeben.</p>
              <p>Es findet keine automatisierte Entscheidungsfindung statt.</p>
            </div>

            <div>
              <p className="font-semibold mb-2">7. Kontakt</p>
              <p>Wenn Sie uns per Telefon oder E-Mail kontaktieren, verarbeiten wir die übermittelten Daten ausschließlich zur Bearbeitung der Anfrage.</p>
              <p>Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).</p>
              <p>Die Daten werden gelöscht, sobald der Zweck entfällt, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.</p>
            </div>

            <div>
              <p className="font-semibold mb-2">8. Weitergabe an Dritte</p>
              <p>Eine Weitergabe erfolgt nur an technische Dienstleister (z. B. Hosting-Provider).</p>
              <p>Mit Dienstleistern bestehen – sofern erforderlich – Auftragsverarbeitungsverträge gemäß Art. 28 DSGVO.</p>
            </div>

            <div>
              <p className="font-semibold mb-2">9. Ihre Rechte</p>
              <p>Sie haben jederzeit folgende Rechte:</p>
              <p>– Auskunft (Art. 15 DSGVO)</p>
              <p>– Berichtigung (Art. 16 DSGVO)</p>
              <p>– Löschung (Art. 17 DSGVO)</p>
              <p>– Einschränkung (Art. 18 DSGVO)</p>
              <p>– Datenübertragbarkeit (Art. 20 DSGVO)</p>
              <p>– Widerspruch (Art. 21 DSGVO)</p>
              <p className="mt-4">Zur Ausübung genügt eine formlose E-Mail an: hallo@medizinisches-personal.de</p>
            </div>

            <div>
              <p className="font-semibold mb-2">10. Beschwerderecht</p>
              <p>Sie haben das Recht, eine Beschwerde bei einer Datenschutzaufsichtsbehörde einzureichen.</p>
              <p className="mt-2">Zuständig:</p>
              <p>Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg</p>
              <p>Lautenschlagerstraße 20</p>
              <p>70173 Stuttgart</p>
              <p>Deutschland</p>
              <p>www.baden-wuerttemberg.datenschutz.de</p>
            </div>

            <div>
              <p className="font-semibold mb-2">11. Stand der Erklärung</p>
              <p>07.01.2026 - bei rechtlichen oder technischen Änderungen kann eine Anpassung erfolgen.</p>
            </div>

            <div>
              <p className="font-semibold mb-2">Abschließender Hinweis zur Einordnung dieser Website</p>
              <p>Der Besuch dieser Website begründet kein Vertragsverhältnis.</p>
              <p>Über diese Website werden keine Leistungen angeboten, vermittelt oder erbracht.</p>
              <p>Eine Kontaktaufnahme stellt kein rechtsverbindliches Angebot dar.</p>
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

export default Datenschutz;
