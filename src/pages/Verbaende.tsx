import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import DisclaimerOverlay from '@/components/DisclaimerOverlay';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Verbaende = () => {
  useEffect(() => {
    document.title = 'Gesundheitsverbände | Medizinisches Personal';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Domain-Paket für Gesundheitsverbände: Sprachliche Infrastruktur für den Gesundheitsdiskurs im DACH-Raum.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <DisclaimerOverlay />
      <Header />
      
      <main className="pt-16">
        {/* Custom Hero for Verbaende */}
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
                  medizinisches personal & gesundheitsverbände
                </h1>
                <div className="text-lg md:text-xl text-muted-foreground leading-relaxed space-y-4">
                  <p className="font-medium">Interessen werden vertreten.<br />
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
              <h2 className="section-heading mb-3">Ausgangslage für Gesundheitsverbände</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Gesundheitsverbände agieren auf Systemebene.
              </p>
              
              <div className="space-y-6">
                <div>
                  <p className="text-lg font-semibold text-primary mb-4">Sie bündeln:</p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Interessen</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Positionen</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Diskurse</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="text-lg font-semibold text-primary mb-4">Zentrale Themen sind:</p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Versorgungssicherheit</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Fachkräftesituation im Gesundheitswesen</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">demografische Entwicklung</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">strukturelle Personalengpässe</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                Verbände wirken langfristig.<br />
                Sprache ist dabei ihr zentrales Instrument.
              </p>
            </div>
          </div>

          {/* Sprachliche Realität */}
          <div className="md:col-span-2">
            <div className="section-card">
              <h2 className="section-heading mb-3">Sprachliche Realität im Gesundheitssektor</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Öffentliche Debatten beginnen nicht mit Detailfragen, sondern mit Oberbegriffen.
              </p>
              
              <div className="space-y-6">
                <div>
                  <p className="text-lg font-semibold text-primary mb-4">„Medizinisches Personal" ist:</p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">neutral</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">etabliert</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">erklärungsfrei</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">anschlussfähig</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="text-lg font-semibold text-primary mb-4">Der Begriff verbindet:</p>
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
                      <span className="text-lg">Ausbildung und Qualifikation</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                Für Verbände bedeutet das:<br />
                Ein gemeinsamer Referenzbegriff, der Vielfalt abbildet, ohne sie zu fragmentieren.
              </p>
            </div>
          </div>

          {/* Infrastruktureller Diskursraum */}
          <div className="md:col-span-2">
            <div className="section-card">
              <h2 className="section-heading mb-3">Das Domain-Paket als infrastruktureller Diskursraum</h2>
              
              <div className="space-y-6">
                <div>
                  <p className="text-lg font-semibold text-primary mb-4">Das Domain-Paket ist:</p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">kein Kommunikationsorgan</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">keine Kampagnenplattform</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">kein Sprachrohr</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="text-lg font-semibold text-primary mb-4">Es fungiert als:</p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">vorgelagerter Diskursanker</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">sprachliche Infrastruktur</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Orientierungspunkt für Öffentlichkeit, Medien und Entscheidungsträger</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                Verbände argumentieren innerhalb des Systems.<br />
                Domains definieren, wo das System sprachlich beginnt.
              </p>
            </div>
          </div>

          {/* Strategischer Nutzen */}
          <div className="md:col-span-2">
            <div className="section-card">
              <h2 className="section-heading mb-3">Strategischer Nutzen für Gesundheitsverbände</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-4">Systemische Wirkung</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Kontrolle über einen zentralen Gesundheitsbegriff</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Unabhängigkeit von externen Plattformen</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Stabiler Referenzpunkt für Positionen und Studien</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Sichtbarkeit jenseits einzelner Kampagnen</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-primary mb-4">Kommunikative Integration</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Nutzung als Kontext- oder Referenzseite</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Weiterleitung auf bestehende Verbandsangebote</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Einbindung ohne Veränderung bestehender Kommunikationsstrukturen</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">klare Trennung von Infrastruktur und Interessenvertretung</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                Das Domain-Paket stärkt die Wirkung, ohne operative Bindung zu erzeugen.
              </p>
            </div>
          </div>

          {/* Aggregation als Schlüssel */}
          <div className="md:col-span-2">
            <div className="section-card">
              <h2 className="section-heading mb-3">Aggregation als Schlüssel für Verbände</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Verbände vertreten Vielfalt.<br />
                Öffentlichkeit sucht Einordnung.
              </p>
              
              <div>
                <p className="text-lg font-semibold text-primary mb-4">Der Begriff „medizinisches Personal":</p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-lg">reduziert Komplexität</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-lg">ohne Inhalte zu verfälschen</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-lg">schafft Anschlussfähigkeit</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-lg">ohne Einzelinteressen zu vermischen</span>
                  </li>
                </ul>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                Das Domain-Paket transportiert genau diese Balance.
              </p>
            </div>
          </div>

          {/* Langfristigkeit */}
          <div className="md:col-span-2">
            <div className="section-card">
              <h2 className="section-heading mb-3">Langfristigkeit statt Projektlogik</h2>
              
              <div className="space-y-6">
                <div>
                  <p className="text-lg font-semibold text-primary mb-4">Verbände investieren regelmäßig in:</p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Öffentlichkeitsarbeit</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Studien</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Kommunikationsmaßnahmen</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                Diese Maßnahmen sind thematisch und zeitlich begrenzt.<br />
                Das Domain-Paket wirkt dauerhaft und unabhängig von Projektzyklen.<br />
                <br />
                Es sichert den sprachlichen Rahmen, in dem Positionen wahrgenommen werden.
              </p>
            </div>
          </div>

          {/* Deutungshoheit */}
          <div className="md:col-span-2">
            <div className="section-card">
              <h2 className="section-heading mb-3">Deutungshoheit im digitalen Raum</h2>
              
              <div className="space-y-6">
                <div>
                  <p className="text-lg font-semibold text-primary mb-4">Auch im Verbandsumfeld gilt:</p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Begriffe werden besetzt</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Diskurse werden vorstrukturiert</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Aufmerksamkeit ist begrenzt</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="text-lg font-semibold text-primary mb-4">Wenn zentrale Begriffe extern kontrolliert werden:</p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">verschiebt sich Deutungshoheit</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">sinkt Einfluss auf öffentliche Wahrnehmung</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="text-lg font-semibold text-primary mb-4">Eigentum bedeutet:</p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Stabilität</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Unabhängigkeit</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">langfristige Gestaltungsfreiheit</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* DACH-Perspektive */}
          <div className="md:col-span-2">
            <div className="section-card">
              <h2 className="section-heading mb-3">DACH-Perspektive</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Deutschland, Österreich und die Schweiz teilen einen gemeinsamen Sprachraum bei unterschiedlichen Gesundheitssystemen.
              </p>
              
              <div>
                <p className="text-lg font-semibold text-primary mb-4">Das Domain-Paket ermöglicht:</p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-lg">länderübergreifende Einordnung</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-lg">Vergleichbarkeit von Positionen</span>
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
              <h2 className="section-heading mb-3">Zusammenfassung für Verbandsentscheider</h2>
              <p className="text-lg font-semibold text-primary mb-6">Dieses Domain-Paket bietet Gesundheitsverbänden:</p>
              <ul className="space-y-3 text-muted-foreground mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-lg">vorgelagerten sprachlichen Zugang zum Gesundheitsdiskurs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-lg">Kontrolle über einen systemischen Begriff</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-lg">strukturelle Sichtbarkeit ohne operative Bindung</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-lg">langfristige Infrastruktur statt projektbezogener Maßnahmen</span>
                </li>
              </ul>
              <p className="text-lg text-muted-foreground leading-relaxed italic">
                Verbände vertreten Interessen.<br />
                Infrastruktur definiert den Rahmen, in dem sie gehört werden.
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

export default Verbaende;
