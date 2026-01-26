import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import DisclaimerOverlay from '@/components/DisclaimerOverlay';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Zeitarbeit = () => {
  useEffect(() => {
    document.title = 'Zeitarbeit | Medizinisches Personal';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Domain-Paket für medizinisches Personal und Zeitarbeit: Strategischer Zugang zur Nachfrage im DACH-Gesundheitsmarkt.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <DisclaimerOverlay />
      <div className="md:relative md:z-50"><Header /></div>
      
      <main className="pt-16">
        {/* Custom Hero for Zeitarbeit */}
        <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 sm:px-6 py-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary-light/30 via-background to-background" />
          
          <div className="relative z-10 max-w-6xl mx-auto w-full">
            <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-6 items-center">
              <div 
                className="flex justify-start md:justify-end animate-fade-in order-1 md:order-2 w-full md:pt-0"
                style={{ animationDelay: '0.2s' }}
              >
                <img 
                  src="/dach_map.svg" 
                  alt="DACH Region - Deutschland, Österreich, Schweiz" 
                  className="w-48 md:w-full md:max-w-md opacity-90"
                />
              </div>

              <div className="animate-fade-in order-2 md:order-1" style={{ animationDelay: '0.1s' }}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance lowercase">
                  medizinisches personal & zeitarbeit
                </h1>
                <div className="text-lg md:text-xl text-muted-foreground leading-relaxed space-y-4">
                  <p className="font-medium">Der Zugang zur Nachfrage ist ebenso entscheidend<br />
                  wie die Reaktion auf sie.</p>
                </div>
              </div>
            </div>
                    
          {/* Scroll Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 md:hidden">
            <svg className="w-6 h-6 text-primary/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div></div>
        </section>

        {/* Content Sections */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-16">
          <div className="grid gap-8 md:grid-cols-2">
          
          {/* Ausgangslage */}
          <div className="md:col-span-2">
            <div className="section-card">
              <h2 className="section-heading mb-3">Ausgangslage im Gesundheitswesen</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Der Bedarf an medizinischem Personal ist kein kurzfristiges Marktphänomen, sondern strukturell bedingt.
              </p>
                  <ul className="space-y-3 text-muted-foreground mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-lg">Demografische Entwicklungen erhöhen den Versorgungsdruck</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-lg">Fachkräfte im Gesundheitswesen sind dauerhaft knapp</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-lg">Personalengpässe betreffen nahezu alle Versorgungsbereiche</span>
                </li>
              </ul>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Daraus ergibt sich eine konstante Marktrealität:<br />
                Nachfrage entsteht kontinuierlich, frühzeitig und unabhängig von konkreten Vertragsmodellen.
              </p>
            </div>
          </div>

          {/* Suchrealität */}
          <div className="md:col-span-2">
            <div className="section-card">
              <h2 className="section-heading mb-3">Suchrealität vor operativer Logik</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Die Suche nach medizinischem Personal beginnt im deutschsprachigen Raum überwiegend digital.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-primary mb-4">Diese frühe Phase ist:</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">allgemein</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">rollenübergreifend</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">vorgelagert</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-primary mb-4">Typische Suchanfragen kombinieren Begriffe wie:</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">medizinisches Personal</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Zeitarbeit</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Arbeitnehmerüberlassung</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Personaldienstleistung</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                In dieser Phase stehen weder Anbieter noch Vertragsformen im Vordergrund.<br />
                Hier entscheidet sich, wer sichtbar ist, bevor operative Prozesse greifen.
              </p>
            </div>
          </div>

          {/* Systemischer Begriff */}
          <div className="md:col-span-2">
            <div className="section-card">
              <h2 className="section-heading mb-3">Warum der Begriff „medizinisches Personal" für Zeitarbeit zentral ist</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Der Begriff „medizinisches Personal" fungiert als aggregierender Sammelbegriff.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-primary mb-4">Er umfasst:</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Pflegekräfte</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">ärztliche und klinische Versorgung</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">therapeutische Berufe</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">psychosoziale Dienste</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Ausbildung und Qualifikation</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                Der Begriff ist etabliert, erklärungsfrei und sektorenübergreifend verständlich.<br />
                Für Zeitarbeitsunternehmen bedeutet das:<br />
                Der Markteinstieg erfolgt über einen systemischen Bedarf, nicht über einzelne Rollenprofile.
              </p>
            </div>
          </div>

          {/* Infrastruktureller Zugang */}
          <div className="md:col-span-2">
            <div className="section-card">
              <h2 className="section-heading mb-3">Das Domain-Paket als vorgelagerter Nachfragezugang</h2>
              
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-primary mb-4">Das Domain-Paket ist:</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">keine Plattform</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">kein Geschäftsmodell</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">kein operatives Instrument</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-primary mb-4">Es fungiert als:</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">vorgelagerter Zugang zur Nachfrage</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">sprachlicher Markteintrittspunkt</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">struktureller Orientierungspunkt im digitalen Raum</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                Operative Maßnahmen reagieren auf Bedarf.<br />
                Domain-Eigentum definiert, wo dieser Bedarf sichtbar wird.
              </p>
            </div>
          </div>

          {/* Strategischer Nutzen */}
          <div className="md:col-span-2">
            <div className="section-card">
              <h2 className="section-heading mb-3">Strategischer Nutzen für Zeitarbeitsunternehmen</h2>
              
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-primary mb-4">Marktpositionierung</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Kontrolle über einen generischen Einstiegspunkt</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Sichtbarkeit vor Spezialisierung</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Positionierung vor Wettbewerbern</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Absicherung eines zentralen Suchbegriffs</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-primary mb-4">Unternehmerische Logik</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">struktureller Zugang statt kurzfristiger Reichweite</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Unabhängigkeit von Auktionssystemen und Tagespreisen</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">dauerhafte Verfügbarkeit unabhängig von Kampagnen</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                Das Domain-Paket ergänzt operative Maßnahmen, ersetzt sie nicht.<br />
                Es schafft Stabilität vor der Reaktion.
              </p>
            </div>
          </div>

          {/* Optionale Nutzung */}
          <div className="md:col-span-2">
            <div className="section-card">
              <h2 className="section-heading mb-3">Optionale Nutzung ohne Verpflichtung</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Der Besitz des Domain-Pakets bedeutet Handlungsfreiheit.
              </p>
              
              <div>
                <h2 className="text-xl font-semibold text-primary mb-4">Mögliche Nutzungen sind:</h2>
                  <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-lg">Weiterleitung auf bestehende Marken oder Portfolios</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-lg">Einsatz als übergeordneter Begriff für mehrere Einheiten</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-lg">Nutzung für Marktanalysen, Studien oder Whitepaper</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-lg">neutrale Einstiegsseite ohne operative Funktion</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-lg">rein defensive Sicherung gegenüber Wettbewerbern</span>
                  </li>
                </ul>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                Keine Nutzung ist zwingend.<br />
                Alle Optionen bleiben vollständig reversibel.
              </p>
            </div>
          </div>

          {/* Rechtliche Realität */}
          <div className="md:col-span-2">
            <div className="section-card">
              <h2 className="section-heading mb-3">Rechtliche Realität und digitale Wahrnehmung</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Rechtlich ist die Trennung zwischen Verleiher und Entleiher klar geregelt.<br />
                Digital existiert diese Trennung am Anfang der Suche nicht.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Gesucht wird Bedarf, nicht Vertragslogik.<br />
                Das Domain-Paket bildet diese Realität neutral und vorgelagert ab, ohne operative Nähe.
              </p>
            </div>
          </div>

          {/* Auffindbarkeit */}
          <div className="md:col-span-2">
            <div className="section-card">
              <h2 className="section-heading mb-3">Auffindbarkeit im Suchkontext</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Das Domain-Paket ist thematisch präzise und nicht operativ verwässert.<br />
                Dadurch entsteht eine natürliche Anschlussfähigkeit für Suchanfragen rund um medizinisches Personal und Zeitarbeit.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ziel ist keine aggressive Lead-Generierung, sondern strukturelle Sichtbarkeit am Beginn der Suchkette.
              </p>
            </div>
          </div>

          {/* Wettbewerb */}
          <div className="md:col-span-2">
            <div className="section-card">
              <h2 className="section-heading mb-3">Wettbewerbsperspektive</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Die entscheidende Frage lautet:<br />
                Wem gehört der generische Einstiegspunkt?
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Wird dieser extern kontrolliert, entsteht Abhängigkeit.<br />
                Eigentum schafft hingegen strategische Flexibilität und langfristige Handlungsoptionen.
              </p>
            </div>
          </div>

          {/* DACH-Perspektive */}
          <div className="md:col-span-2">
            <div className="section-card">
              <h2 className="section-heading mb-3">DACH-Perspektive</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Deutschland, Österreich und die Schweiz bilden einen gemeinsamen Sprachraum mit vergleichbarer Begriffsnutzung im Gesundheitswesen.
              </p>
              
              <div>
                <h2 className="text-xl font-semibold text-primary mb-4">Das Domain-Paket ermöglicht:</h2>
                  <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-lg">konsistente Präsenz</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-lg">länderübergreifende Skalierung</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-lg">klare Trennung von Sprache und Regulierung</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Zusammenfassung */}
          <div className="md:col-span-2">
            <div className="section-card bg-primary-light/10">
              <h2 className="section-heading mb-3">Zusammenfassung für Entscheider</h2>
              <h2 className="text-xl font-semibold text-primary mb-4">Dieses Domain-Paket bietet Zeitarbeitsunternehmen im Gesundheitswesen:</h2>
                  <ul className="space-y-3 text-muted-foreground mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-lg">einen vorgelagerten digitalen Marktzugang</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-lg">Kontrolle über einen systemischen Suchbegriff</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-lg">optionale und flexible Nutzung</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-lg">strategische Absicherung im Wettbewerb</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-lg">eine langfristige Infrastruktur ergänzend zu operativen Maßnahmen</span>
                </li>
              </ul>
              <p className="text-lg text-muted-foreground leading-relaxed italic">
                Einige Investitionen verbessern Prozesse.<br />
                Andere sichern den Zugang zum Markt.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <div className="section-card border-t">
              <h2 className="section-heading mb-4">Abschluss</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sie haben Fragen oder wünschen einen unverbindlichen Austausch?<br />
                Dann melden Sie sich gerne per <a href="mailto:hallo@medizinisches-personal.de" className="text-primary hover:underline">E-Mail</a>.
              </p>
            </div>
          </div>

          {/* Legal Notice */}
          <div className="md:col-span-2">
            <div className="section-card">
              <h2 className="section-heading mb-4">Rechtlicher Hinweis</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Diese Website ist kein Jobportal, kein Recruiting-Service und keine Personalvermittlung.<br />
                Es werden keine Stellenangebote veröffentlicht und keine Bewerbungen entgegengenommen.
              </p>
            </div>
          </div>

          {/* Back Button */}
          <div className="md:col-span-2 mt-8">
            <Link to="/" className="text-primary hover:underline">← Zurück zur Startseite</Link>
          </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Zeitarbeit;
