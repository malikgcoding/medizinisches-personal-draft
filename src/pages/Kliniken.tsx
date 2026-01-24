import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import DisclaimerOverlay from '@/components/DisclaimerOverlay';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Kliniken = () => {
  useEffect(() => {
    document.title = 'Kliniken | Medizinisches Personal';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Domain-Paket für medizinisches Personal in Kliniken: Strategische Sichtbarkeit im DACH-Gesundheitsmarkt.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <DisclaimerOverlay />
      <Header />
      
      <main className="pt-16">
        {/* Custom Hero for Kliniken */}
        <section className="relative min-h-[calc(100vh-4rem)] flex items-center px-4 sm:px-6 pb-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary-light/30 via-background to-background" />
          
          <div className="relative z-10 max-w-6xl mx-auto w-full">
            <div className="flex flex-col md:grid md:grid-cols-2 gap-6 items-center">
              <div 
                className="flex justify-start md:justify-end animate-fade-in order-1 md:order-2 w-full"
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
                  Medizinisches Personal & Kliniken
                </h1>
                <div className="text-lg md:text-xl text-muted-foreground leading-relaxed space-y-4">
                  <p className="font-medium">Versorgung beginnt nicht im Dienstplan.<br />
                  Sie beginnt dort, wo Bedarf erstmals formuliert wird.</p>
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
              <h2 className="section-heading mb-6">Ausgangslage klinischer Versorgung</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Kliniken stehen unter dauerhaftem Versorgungsdruck.
              </p>
              <ul className="space-y-3 text-muted-foreground mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>steigender Behandlungsbedarf</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>demografische Veränderungen</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>struktureller Fachkräftemangel</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>wachsende Anforderungen an Qualität und Verfügbarkeit</span>
                </li>
              </ul>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Personalfragen sind keine Einzelmaßnahmen, sondern Teil der Versorgungsarchitektur.<br />
                Sichtbarkeit und Einordnung entstehen, bevor interne Prozesse greifen.
              </p>
            </div>
          </div>

          {/* Wie Bedarf sichtbar wird */}
          <div className="md:col-span-2">
            <div className="section-card">
              <h2 className="section-heading mb-6">Wie Bedarf heute sichtbar wird</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Der Bedarf an medizinischem Personal wird im deutschsprachigen Raum zunehmend digital wahrgenommen.
              </p>
              
              <div className="space-y-6">
                <div>
                  <p className="text-lg font-semibold text-primary mb-4">Diese frühe Phase ist:</p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>allgemein</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>nicht einrichtungsbezogen</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>vorgelagert</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="text-lg font-semibold text-primary mb-4">Sie entsteht:</p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>vor internen Bedarfsanzeigen</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>vor Ausschreibungen</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>vor konkreten Beschaffungsmodellen</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                Das Domain-Paket bildet genau diese Phase ab – dort, wo Versorgung erstmals sprachlich sichtbar wird.
              </p>
            </div>
          </div>

          {/* Systemischer Begriff */}
          <div className="md:col-span-2">
            <div className="section-card">
              <h2 className="section-heading mb-6">Warum „medizinisches Personal" für Kliniken ein systemischer Begriff ist</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Der Begriff „medizinisches Personal" steht für Versorgung als Ganzes.
              </p>
              
              <div className="space-y-6">
                <div>
                  <p className="text-lg font-semibold text-primary mb-4">Er umfasst:</p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Pflege</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>ärztliche und klinische Tätigkeiten</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>therapeutische Berufe</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>psychosoziale Dienste</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Ausbildung und Qualifikation</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="text-lg font-semibold text-primary mb-4">Er wird genutzt von:</p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Öffentlichkeit</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Politik</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Verwaltung</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Medien</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                <strong>Für Kliniken bedeutet das:</strong><br />
                Der Begriff beschreibt Verantwortung auf Systemebene – nicht einzelne Funktionen.
              </p>
            </div>
          </div>

          {/* Infrastruktureller Zugang */}
          <div className="md:col-span-2">
            <div className="section-card">
              <h2 className="section-heading mb-6">Das Domain-Paket als infrastruktureller Zugang</h2>
              
              <div className="space-y-6">
                <div>
                  <p className="text-lg font-semibold text-primary mb-4">Das Domain-Paket ist:</p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>keine Plattform</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>kein Steuerungsinstrument</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>kein operatives Werkzeug</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="text-lg font-semibold text-primary mb-4">Es fungiert als:</p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>digitaler Orientierungspunkt</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>vorgelagerter Zugang zur Versorgungsdebatte</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>sprachliche Infrastruktur im Gesundheitswesen</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                Prozesse lösen Aufgaben.<br />
                Infrastruktur definiert den Rahmen.
              </p>
            </div>
          </div>

          {/* Strategischer Nutzen */}
          <div className="md:col-span-2">
            <div className="section-card">
              <h2 className="section-heading mb-6">Strategischer Nutzen für Kliniken</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-4">Positionierung</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Präsenz auf Systemebene</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Sichtbarkeit dort, wo Bedarf begrifflich entsteht</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Unabhängigkeit von kurzfristigen Maßnahmen</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Absicherung eines zentralen Gesundheitsbegriffs</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-primary mb-4">Integration</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Nutzung als Dach für Informationen oder Studien</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Kontextseite für Versorgungsmodelle</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Weiterleitung in bestehende Klinik- oder Konzernstrukturen</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Einbindung ohne Veränderung interner Abläufe</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                Das Domain-Paket ergänzt bestehende Systeme, ohne sie zu beeinflussen.
              </p>
            </div>
          </div>

          {/* Langfristigkeit */}
          <div className="md:col-span-2">
            <div className="section-card">
              <h2 className="section-heading mb-6">Langfristigkeit als klinische Logik</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Kliniken tragen Versorgungsverantwortung über Jahre und Jahrzehnte.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Maßnahmen sind zeitlich begrenzt.<br />
                Infrastruktur wirkt dauerhaft.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Das Domain-Paket folgt dieser Logik:<br />
                ruhig, stabil, unabhängig von operativen Zyklen.
              </p>
            </div>
          </div>

          {/* Wettbewerb */}
          <div className="md:col-span-2">
            <div className="section-card">
              <h2 className="section-heading mb-6">Wettbewerb und Systemperspektive</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Kliniken konkurrieren nicht nur um Personal, sondern auch um Wahrnehmung im Versorgungssystem.
              </p>
              
              <div className="space-y-6">
                <div>
                  <p className="text-lg font-semibold text-primary mb-4">Wenn zentrale Begriffe extern kontrolliert werden:</p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>entsteht Abhängigkeit</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>geht strategische Ruhe verloren</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="text-lg font-semibold text-primary mb-4">Eigentum bedeutet:</p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Kontrolle</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Planbarkeit</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Unabhängigkeit</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* DACH-Perspektive */}
          <div className="md:col-span-2">
            <div className="section-card">
              <h2 className="section-heading mb-6">DACH-Perspektive</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Deutschland, Österreich und die Schweiz teilen einen gemeinsamen Sprachraum bei unterschiedlichen Versorgungssystemen.
              </p>
              
              <div>
                <p className="text-lg font-semibold text-primary mb-4">Das Domain-Paket ermöglicht:</p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>konsistente sprachliche Präsenz</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>länderübergreifende Einordnung</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>klare Trennung von Sprache und Regulierung</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Zusammenfassung */}
          <div className="md:col-span-2">
            <div className="section-card bg-primary-light/10">
              <h2 className="section-heading mb-6">Zusammenfassung für Klinikentscheider</h2>
              <p className="text-lg font-semibold text-primary mb-6">Dieses Domain-Paket bietet Kliniken:</p>
              <ul className="space-y-3 text-muted-foreground mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>vorgelagerten digitalen Zugang zur Versorgungsfrage</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>Kontrolle über einen zentralen systemischen Begriff</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>strukturelle Sichtbarkeit ohne operative Bindung</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>langfristige Infrastruktur ergänzend zu bestehenden Prozessen</span>
                </li>
              </ul>
              <p className="text-lg text-muted-foreground leading-relaxed italic">
                Einige Systeme organisieren Betrieb.<br />
                Andere definieren, wo Versorgung beginnt.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <div className="section-card border-t">
              <h2 className="section-heading mb-4">Abschluss</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sie haben Fragen oder wünschen einen unverbindlichen Austausch?<br />
                Dann melden Sie sich gerne per E-Mail.
              </p>
            </div>
          </div>

          {/* Legal Notice */}
          <div className="md:col-span-2">
            <div className="section-card">
              <p className="text-lg font-semibold text-primary mb-4">Rechtlicher Hinweis</p>
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

export default Kliniken;
