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
              <h2 className="text-xl font-semibold text-primary mb-3">1. Verantwortliche Stelle</h2>
              <p>
                D.I.E. STRATEGIE GmbH<br />
                Ensingerstraße 33/2<br />
                89073 Ulm<br />
                Deutschland<br />
                Telefon: +49 731 1461789-1<br />
                E-Mail: hallo@medizinisches-personal.de
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mb-3">2. Zweck und Charakter dieser Website</h2>
              <p>
                Diese Website stellt ausschließlich Informationen zur Verfügung.<br />
                Sie stellt kein Angebot an Arbeitnehmer oder Arbeitgeber dar und erbringt keine Personal-, Vermittlungs-, Zeitarbeits-, Matching-, Recruiting- oder Beratungsleistungen.<br />
                Die Website dient ausschließlich der neutralen Darstellung digitaler Assets (Domains) und stellt kein Angebot im rechtlichen Sinne dar.<br />
                Es erfolgt keine Registrierung, kein Login, keine Datenbanknutzung, keine Verarbeitung von Bewerber- oder Arbeitgeberdaten und keine operative Tätigkeit.<br />
                Eine etwaige Übertragung digitaler Assets (Domains) erfolgt ausschließlich individuell und außerhalb dieser Website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mb-3">3. Server-Logs / Zugriffsdaten</h2>
              <p>
                Die Website wird über Netlify, Inc. gehostet:<br />
                2325 3rd Street, Suite 296, San Francisco, CA 94107, USA.
              </p>
              <p>
                Beim Aufruf der Website verarbeitet der Hosting-Provider automatisch technisch notwendige Daten (Server-Logs):<br />
                – IP-Adresse<br />
                – Datum und Uhrzeit des Zugriffs<br />
                – angeforderte Datei / Seite<br />
                – Browsertyp / Version<br />
                – Betriebssystem
              </p>
              <p>
                Server-Logs werden spätestens nach 30 Tagen anonymisiert oder gelöscht.<br />
                Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an sicherem Betrieb).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mb-3">4. Datenübermittlung in die USA</h2>
              <p>
                Netlify verarbeitet Daten in den USA. Die USA bieten derzeit kein mit der EU vergleichbares Datenschutzniveau.<br />
                Datenübermittlungen erfolgen ausschließlich auf Basis der Standardvertragsklauseln (Art. 46 Abs. 2 lit. c DSGVO).<br />
                Mit Netlify besteht ein Vertrag zur Auftragsverarbeitung gemäß Art. 28 DSGVO.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mb-3">5. Cookies und Tracking</h2>
              <p>
                Diese Website verwendet keine Cookies.<br />
                Es werden keine Tracking-, Analyse-, Marketing- oder Profiling-Tools eingesetzt.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mb-3">6. Kein Verkauf oder Weitergabe von Daten</h2>
              <p>
                Personenbezogene Daten werden nicht verkauft, vermietet, geteilt oder zu Werbezwecken weitergegeben.<br />
                Es findet keine automatisierte Entscheidungsfindung statt.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mb-3">7. Kontakt</h2>
              <p>
                Wenn Sie uns per Telefon oder E-Mail kontaktieren, verarbeiten wir die übermittelten Daten ausschließlich zur Bearbeitung der Anfrage.<br />
                Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).<br />
                Die Daten werden gelöscht, sobald der Zweck entfällt, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mb-3">8. Weitergabe an Dritte</h2>
              <p>
                Eine Weitergabe erfolgt nur an technische Dienstleister (z. B. Hosting-Provider).<br />
                Mit Dienstleistern bestehen – sofern erforderlich – Auftragsverarbeitungsverträge gemäß Art. 28 DSGVO.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mb-3">9. Ihre Rechte</h2>
              <p>
                Sie haben jederzeit folgende Rechte:<br />
                – Auskunft (Art. 15 DSGVO)<br />
                – Berichtigung (Art. 16 DSGVO)<br />
                – Löschung (Art. 17 DSGVO)<br />
                – Einschränkung (Art. 18 DSGVO)<br />
                – Datenübertragbarkeit (Art. 20 DSGVO)<br />
                – Widerspruch (Art. 21 DSGVO)
              </p>
              <p>
                Zur Ausübung genügt eine formlose E-Mail an: hallo@medizinisches-personal.de
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mb-3">10. Beschwerderecht</h2>
              <p>
                Sie haben das Recht, eine Beschwerde bei einer Datenschutzaufsichtsbehörde einzureichen.<br />
                Zuständig:<br />
                Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg<br />
                Lautenschlagerstraße 20<br />
                70173 Stuttgart<br />
                Deutschland<br />
                www.baden-wuerttemberg.datenschutz.de
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mb-3">11. Stand der Erklärung</h2>
              <p>
                07.01.2026 - bei rechtlichen oder technischen Änderungen kann eine Anpassung erfolgen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mb-3">Abschließender Hinweis zur Einordnung dieser Website</h2>
              <p>
                Der Besuch dieser Website begründet kein Vertragsverhältnis.<br />
                Über diese Website werden keine Leistungen angeboten, vermittelt oder erbracht.<br />
                Eine Kontaktaufnahme stellt kein rechtsverbindliches Angebot dar.
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
