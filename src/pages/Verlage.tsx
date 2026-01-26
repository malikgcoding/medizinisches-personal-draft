import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import DisclaimerOverlay from '@/components/DisclaimerOverlay';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Verlage = () => {
  useEffect(() => {
    document.title = 'Fachverlage | Medizinisches Personal';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Domain-Paket für Fachverlage: Thematischer Zugang zur Aufmerksamkeit im Gesundheitswesen im DACH-Raum.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <DisclaimerOverlay />
      <Header />
      
      <main className="pt-0 md:pt-16">
        {/* Custom Hero for Verlage */}
        <section className="relative min-h-[100vh] md:min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 sm:px-6 py-8 overflow-hidden">
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
                  medizinisches personal & fachverlage
                </h1>
                <div className="text-lg md:text-xl text-muted-foreground leading-relaxed space-y-4">
                  <p className="font-medium">Inhalte entstehen in Redaktionen.<br />
                  Aufmerksamkeit entsteht früher.</p>
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
              <h2 className="section-heading mb-3">Ausgangslage für Fachverlage im Gesundheitswesen</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Fachverlage konkurrieren heute weniger über Inhalte als über Aufmerksamkeit.
              </p>
                  <ul className="space-y-3 text-muted-foreground mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-lg">Inhalte sind schneller verfügbar</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-lg">Formate sind leichter vergleichbar</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-lg">Distributionskanäle werden fragmentierter</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-lg">Plattformabhängigkeiten nehmen zu</span>
                </li>
              </ul>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Reichweite entscheidet sich zunehmend vor der Veröffentlichung.<br />
                Sprache strukturiert, welche Themen überhaupt wahrgenommen werden.
              </p>
            </div>
          </div>

          {/* Suchrealität */}
          <div className="md:col-span-2">
            <div className="section-card">
              <h2 className="section-heading mb-3">Suchrealität im publizistischen Kontext</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Die Suche nach medizinischem Personal beginnt im deutschsprachigen Raum überwiegend digital.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-primary mb-4">Diese Suche ist:</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">themengetrieben</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">systemisch</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">nicht verlagsgebunden</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-primary mb-4">Leser und Entscheider suchen:</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Themen</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Kontexte</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Einordnung</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                Marken folgen später.<br />
                Aufmerksamkeit beginnt beim Begriff.
              </p>
            </div>
          </div>

          {/* Systemischer Begriff */}
          <div className="md:col-span-2">
            <div className="section-card">
              <h2 className="section-heading mb-3">Warum „medizinisches Personal" für Fachverlage zentral ist</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Der Begriff „medizinisches Personal" fungiert als übergeordneter Themenanker.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-primary mb-4">Er wird genutzt:</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">in Medien</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">in Studien</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">in Politik und Verwaltung</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">in öffentlichen Debatten</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-primary mb-4">Er umfasst:</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Pflege</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">ärztliche Versorgung</span>
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
                      <span className="text-lg">Aus- und Weiterbildung</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                Für Fachverlage bedeutet das:<br />
                Zugang zu thematischer Grundaufmerksamkeit vor Einzelpublikationen.
              </p>
            </div>
          </div>

          {/* Infrastruktureller Zugang */}
          <div className="md:col-span-2">
            <div className="section-card">
              <h2 className="section-heading mb-3">Das Domain-Paket als vorgelagerter Medienzugang</h2>
              
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-primary mb-4">Das Domain-Paket ist:</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">kein Magazin</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">kein Verlag</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">keine Redaktion</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-primary mb-4">Es fungiert als:</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">thematischer Einstiegspunkt</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Aufmerksamkeitsanker</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">sprachliche Infrastruktur für Inhalte</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                Redaktionen erklären Themen.<br />
                Domains entscheiden, wer sie zuerst findet.
              </p>
            </div>
          </div>

          {/* Strategischer Nutzen */}
          <div className="md:col-span-2">
            <div className="section-card">
              <h2 className="section-heading mb-3">Strategischer Nutzen für Fachverlage</h2>
              
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-primary mb-4">Thematische Positionierung</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Kontrolle über einen systemischen Gesundheitsbegriff</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Präsenz vor einzelnen Titeln oder Formaten</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Schutz vor Reichweitenverlust durch Plattformlogiken</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Stabilität jenseits redaktioneller Zyklen</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-primary mb-4">Integration in bestehende Verlagsstrukturen</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Nutzung als thematische Dachseite</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Einstiegspunkt für Dossiers, Studien oder Specials</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">neutrale Referenzseite für Inhalte</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Weiterleitung in bestehende Verlagsangebote</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">klare Trennung von Infrastruktur und Redaktion</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                Das Domain-Paket ergänzt publizistische Arbeit, ohne sie zu beeinflussen.
              </p>
            </div>
          </div>

          {/* Aufmerksamkeit als Ressource */}
          <div className="md:col-span-2">
            <div className="section-card">
              <h2 className="section-heading mb-3">Aufmerksamkeit als strukturelle Ressource</h2>
              
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-primary mb-4">Verlage investieren kontinuierlich in:</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Distribution</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Reichweite</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Sichtbarkeit</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-primary mb-4">Diese Maßnahmen sind:</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">laufend</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">volatil</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">kanalabhängig</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-primary mb-4">Domain-Eigentum schafft:</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Stabilität</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Eigenständigkeit</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Planbarkeit</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                Nicht als Ersatz redaktioneller Arbeit, sondern als vorgelagerte Infrastruktur.
              </p>
            </div>
          </div>

          {/* Wettbewerb */}
          <div className="md:col-span-2">
            <div className="section-card">
              <h2 className="section-heading mb-3">Wettbewerb um thematische Deutung</h2>
              
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-primary mb-4">Im Medienumfeld gilt:</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Themen setzen sich durch</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">nicht Kanäle</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">nicht Formate</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-primary mb-4">Wenn zentrale Begriffe extern kontrolliert werden:</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">verlieren Verlage Frühzugang</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">steigt Abhängigkeit von Dritten</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">sinkt strategische Flexibilität</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                Eigentum am Einstiegspunkt stärkt Verhandlungsposition und Ruhe.
              </p>
            </div>
          </div>

          {/* DACH-Perspektive */}
          <div className="md:col-span-2">
            <div className="section-card">
              <h2 className="section-heading mb-3">DACH-Perspektive</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Deutschland, Österreich und die Schweiz bilden einen gemeinsamen Sprachraum mit vergleichbaren Themenlagen im Gesundheitswesen.
              </p>
              
              <div>
                <h2 className="text-xl font-semibold text-primary mb-4">Das Domain-Paket ermöglicht:</h2>
                  <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-lg">länderübergreifende Themenführung</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-lg">konsistente Positionierung</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-lg">klare Trennung von Inhalt und Infrastruktur</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Langfristigkeit */}
          <div className="md:col-span-2">
            <div className="section-card">
              <h2 className="section-heading mb-3">Langfristigkeit als verlegerische Logik</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Gute Fachverlage denken nicht in Klicks.<br />
                Sie denken in Relevanz, Autorität und Zeit.<br />
                <br />
                Digitale Infrastruktur folgt derselben Logik.
              </p>
            </div>
          </div>

          {/* Zusammenfassung */}
          <div className="md:col-span-2">
            <div className="section-card bg-primary-light/10">
              <h2 className="section-heading mb-3">Zusammenfassung für Verlagsentscheider</h2>
              <h2 className="text-xl font-semibold text-primary mb-4">Dieses Domain-Paket bietet Fachverlagen im Gesundheitswesen:</h2>
                  <ul className="space-y-3 text-muted-foreground mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-lg">vorgelagerten Zugang zu thematischer Aufmerksamkeit</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-lg">Kontrolle über einen systemischen Gesundheitsbegriff</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-lg">strukturelle Reichweite ohne redaktionelle Verpflichtung</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-lg">langfristige Infrastruktur statt kanalabhängiger Distribution</span>
                </li>
              </ul>
              <p className="text-lg text-muted-foreground leading-relaxed italic">
                Verlage veröffentlichen Inhalte.<br />
                Infrastruktur entscheidet, wer sie zuerst wahrnimmt.
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

export default Verlage;
