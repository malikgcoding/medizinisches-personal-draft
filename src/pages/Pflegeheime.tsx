import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import DisclaimerOverlay from '@/components/DisclaimerOverlay';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Pflegeheime = () => {
  useEffect(() => {
    document.title = 'Pflegeheime | Medizinisches Personal';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Domain-Paket für Pflegeheime: Strategische Sichtbarkeit im Gesundheitswesen im DACH-Raum.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <DisclaimerOverlay />
      <Header />
      
      <main className="pt-16">
        {/* Custom Hero for Pflegeheime */}
        <section className="relative min-h-[calc(100vh-4rem)] flex items-center px-4 sm:px-6 pt-8 pb-4 overflow-hidden">
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
                  medizinisches personal & pflegeheime
                </h1>
                <div className="text-lg md:text-xl text-muted-foreground leading-relaxed space-y-4">
                  <p className="font-medium">Pflege organisiert Versorgung.<br />
                  Wahrnehmung entsteht davor.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-16">
          <div className="grid gap-8 md:grid-cols-2">
          
          {/* Ausgangslage */}
          <div className="md:col-span-2">
            <div className="section-card">
              <h2 className="section-heading mb-6">Ausgangslage in der stationären Pflege</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Pflegeheime stehen unter dauerhaftem Versorgungsdruck.
              </p>
              <ul className="space-y-3 text-muted-foreground mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-lg">alternde Bevölkerung</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-lg">steigender Pflegebedarf</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-lg">struktureller Mangel an Pflegefachkräften</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-lg">zunehmende Anforderungen an Qualität und Kontinuität</span>
                </li>
              </ul>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Pflege ist kein Projekt, sondern ein Dauerzustand.<br />
                Personalfragen sind systemisch – nicht situativ.
              </p>
            </div>
          </div>

          {/* Wahrnehmung */}
          <div className="md:col-span-2">
            <div className="section-card">
              <h2 className="section-heading mb-6">Wie Pflegebedarf heute wahrgenommen wird</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Der Bedarf an medizinischem Personal wird im deutschsprachigen Raum frühzeitig digital sichtbar.
              </p>
              
              <div className="space-y-6">
                <div>
                  <p className="text-lg font-semibold text-primary mb-4">Diese erste Phase ist:</p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">allgemein</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">einrichtungsübergreifend</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">vorgelagert</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="text-lg font-semibold text-primary mb-4">Sie entsteht:</p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">vor konkreten Stellenausschreibungen</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">vor regionaler Zuordnung</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">vor Träger- oder Markenwahrnehmung</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                Das Domain-Paket bildet genau diese frühe Phase ab – dort, wo Pflege als Teil der gesundheitlichen Gesamtversorgung gedacht wird.
              </p>
            </div>
          </div>

          {/* Systemischer Begriff */}
          <div className="md:col-span-2">
            <div className="section-card">
              <h2 className="section-heading mb-6">Warum „medizinisches Personal" für Pflegeheime relevant ist</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Der Begriff „medizinisches Personal" umfasst Pflege als systemrelevanten Bestandteil des Gesundheitswesens.
              </p>
              
              <div className="space-y-6">
                <div>
                  <p className="text-lg font-semibold text-primary mb-4">Er schließt ein:</p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">stationäre Langzeitpflege</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">geriatrische Versorgung</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">palliative Betreuung</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">intensivpflegerische Leistungen</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">pflegerische Ausbildung und Qualifikation</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="text-lg font-semibold text-primary mb-4">Der Begriff wird genutzt:</p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">in Politik und Verwaltung</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">in Medien und Studien</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">in öffentlicher Debatte</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                Für Pflegeheime bedeutet das:<br />
                Einordnung auf Systemebene, nicht Reduktion auf einzelne Einrichtungen.
              </p>
            </div>
          </div>

          {/* Infrastruktureller Zugang */}
          <div className="md:col-span-2">
            <div className="section-card">
              <h2 className="section-heading mb-6">Das Domain-Paket als vorgelagerte Sichtbarkeit</h2>
              
              <div className="space-y-6">
                <div>
                  <p className="text-lg font-semibold text-primary mb-4">Das Domain-Paket ist:</p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">kein Pflegeportal</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">keine Vermittlungsstruktur</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">kein operatives Instrument</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="text-lg font-semibold text-primary mb-4">Es fungiert als:</p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">thematischer Einstiegspunkt</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">digitaler Orientierungspunkt</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">sprachliche Infrastruktur im Gesundheitswesen</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                Pflegeheime sichern Versorgung.<br />
                Domains sichern Wahrnehmung.
              </p>
            </div>
          </div>

          {/* Strategischer Nutzen */}
          <div className="md:col-span-2">
            <div className="section-card">
              <h2 className="section-heading mb-6">Strategischer Nutzen für Pflegeheime</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-4">Positionierung</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Sichtbarkeit im gesamtgesellschaftlichen Versorgungskontext</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Präsenz dort, wo Pflege sprachlich mitgedacht wird</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Unabhängigkeit von kurzfristigen Maßnahmen</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Absicherung eines zentralen Gesundheitsbegriffs</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-primary mb-4">Trägerlogik</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Nutzung als Dachseite für Pflegeheimgruppen</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Kontextseite für Versorgungsmodelle</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Weiterleitung in bestehende Web- und Informationsstrukturen</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Integration ohne Veränderung bestehender Abläufe</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                Das Domain-Paket ergänzt bestehende Strukturen, ohne operative Nähe zu erzeugen.
              </p>
            </div>
          </div>

          {/* Wettbewerbsfaktor */}
          <div className="md:col-span-2">
            <div className="section-card">
              <h2 className="section-heading mb-6">Wahrnehmung als Wettbewerbsfaktor</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Pflegeheime konkurrieren nicht nur um Belegung,<br />
                sondern um Vertrauen, Einordnung und gesellschaftliche Wahrnehmung.
              </p>
              
              <div className="space-y-6">
                <div>
                  <p className="text-lg font-semibold text-primary mb-4">Wenn zentrale Begriffe extern kontrolliert werden:</p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">entsteht Abhängigkeit</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">sinkt strategische Ruhe</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="text-lg font-semibold text-primary mb-4">Eigentum bedeutet:</p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Kontrolle</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Planbarkeit</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">langfristige Gelassenheit</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Langfristigkeit */}
          <div className="md:col-span-2">
            <div className="section-card">
              <h2 className="section-heading mb-6">Langfristigkeit statt Aktionismus</h2>
              
              <div className="space-y-6">
                <div>
                  <p className="text-lg font-semibold text-primary mb-4">Pflegeheime denken in:</p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Kontinuität</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Stabilität</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">langfristiger Versorgung</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                Maßnahmen sind vergänglich.<br />
                Infrastruktur bleibt.<br />
                <br />
                Das Domain-Paket folgt dieser Logik.
              </p>
            </div>
          </div>

          {/* DACH-Perspektive */}
          <div className="md:col-span-2">
            <div className="section-card">
              <h2 className="section-heading mb-6">DACH-Perspektive</h2>
              
              <div className="space-y-6">
                <div>
                  <p className="text-lg font-semibold text-primary mb-4">Deutschland, Österreich und die Schweiz teilen:</p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">einen gemeinsamen Sprachraum</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">vergleichbare demografische Entwicklungen</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">ähnliche Herausforderungen in der Pflege</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="text-lg font-semibold text-primary mb-4">Das Domain-Paket ermöglicht:</p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">konsistente sprachliche Präsenz</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">länderübergreifende Einordnung</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">klare Trennung von Sprache und Regulierung</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Zusammenfassung */}
          <div className="md:col-span-2">
            <div className="section-card bg-primary-light/10">
              <h2 className="section-heading mb-6">Zusammenfassung für Träger und Entscheider</h2>
              <p className="text-lg font-semibold text-primary mb-6">Dieses Domain-Paket bietet Pflegeheimen:</p>
              <ul className="space-y-3 text-muted-foreground mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-lg">vorgelagerten digitalen Zugang zur Pflegedebatte</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-lg">Kontrolle über einen systemischen Gesundheitsbegriff</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-lg">strukturelle Sichtbarkeit ohne operative Bindung</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-lg">langfristige Infrastruktur statt kurzfristiger Maßnahmen</span>
                </li>
              </ul>
              <p className="text-lg text-muted-foreground leading-relaxed italic">
                Einige Strukturen sichern den Betrieb.<br />
                Andere sichern Bedeutung.
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

export default Pflegeheime;
