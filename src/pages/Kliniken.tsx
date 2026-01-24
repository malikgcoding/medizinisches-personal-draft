import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import DisclaimerOverlay from '@/components/DisclaimerOverlay';
import { Mail } from 'lucide-react';

const Kliniken = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <DisclaimerOverlay />
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center px-4 sm:px-6 pt-32 pb-16">
          <div className="absolute inset-0 bg-gradient-to-b from-primary-light/30 via-background to-background" />
          
          <div className="relative z-10 max-w-6xl mx-auto w-full">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Für Kliniken
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
              Wie das Domain-Paket „medizinisches Personal" Versorgungsstrukturen digital abbildet
            </p>
          </div>
        </section>

        {/* Content Sections */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16 space-y-16">
          
          {/* Ausgangslage */}
          <section className="space-y-6">
            <h2 className="section-heading">Ausgangslage klinischer Versorgung</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Kliniken stehen unter dauerhaftem Versorgungsdruck.
            </p>
            <ul className="space-y-3 text-muted-foreground">
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
            <p className="text-lg text-muted-foreground leading-relaxed pt-4">
              Personalfragen sind keine Einzelmaßnahmen, sondern Teil der Versorgungsarchitektur.<br />
              Sichtbarkeit und Einordnung entstehen, bevor interne Prozesse greifen.
            </p>
          </section>

          {/* Wie Bedarf sichtbar wird */}
          <section className="space-y-6">
            <h2 className="section-heading">Wie Bedarf heute sichtbar wird</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Der Bedarf an medizinischem Personal wird im deutschsprachigen Raum zunehmend digital wahrgenommen.
            </p>
            
            <div className="space-y-4">
              <p className="text-lg font-semibold text-foreground">Diese frühe Phase ist:</p>
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

            <div className="space-y-4">
              <p className="text-lg font-semibold text-foreground">Sie entsteht:</p>
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

            <p className="text-lg text-muted-foreground leading-relaxed pt-4">
              Das Domain-Paket bildet genau diese Phase ab – dort, wo Versorgung erstmals sprachlich sichtbar wird.
            </p>
          </section>

          {/* Systemischer Begriff */}
          <section className="space-y-6">
            <h2 className="section-heading">Warum „medizinisches Personal" für Kliniken ein systemischer Begriff ist</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Der Begriff „medizinisches Personal" steht für Versorgung als Ganzes.
            </p>
            
            <div className="space-y-4">
              <p className="text-lg font-semibold text-foreground">Er umfasst:</p>
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

            <div className="space-y-4">
              <p className="text-lg font-semibold text-foreground">Er wird genutzt von:</p>
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

            <p className="text-lg text-muted-foreground leading-relaxed pt-4">
              <strong>Für Kliniken bedeutet das:</strong><br />
              Der Begriff beschreibt Verantwortung auf Systemebene – nicht einzelne Funktionen.
            </p>
          </section>

          {/* Infrastruktureller Zugang */}
          <section className="space-y-6">
            <h2 className="section-heading">Das Domain-Paket als infrastruktureller Zugang</h2>
            
            <div className="space-y-4">
              <p className="text-lg font-semibold text-foreground">Das Domain-Paket ist:</p>
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

            <div className="space-y-4">
              <p className="text-lg font-semibold text-foreground">Es fungiert als:</p>
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

            <p className="text-lg text-muted-foreground leading-relaxed pt-4">
              Prozesse lösen Aufgaben.<br />
              Infrastruktur definiert den Rahmen.
            </p>
          </section>

          {/* Strategischer Nutzen */}
          <section className="space-y-6">
            <h2 className="section-heading">Strategischer Nutzen für Kliniken</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Positionierung</h3>
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
                <h3 className="text-xl font-semibold text-foreground mb-4">Integration</h3>
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

            <p className="text-lg text-muted-foreground leading-relaxed pt-4">
              Das Domain-Paket ergänzt bestehende Systeme, ohne sie zu beeinflussen.
            </p>
          </section>

          {/* Langfristigkeit */}
          <section className="space-y-6">
            <h2 className="section-heading">Langfristigkeit als klinische Logik</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Kliniken tragen Versorgungsverantwortung über Jahre und Jahrzehnte.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Maßnahmen sind zeitlich begrenzt.<br />
              Infrastruktur wirkt dauerhaft.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Das Domain-Paket folgt dieser Logik:<br />
              ruhig, stabil, unabhängig von operativen Zyklen.
            </p>
          </section>

          {/* Wettbewerb */}
          <section className="space-y-6">
            <h2 className="section-heading">Wettbewerb und Systemperspektive</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Kliniken konkurrieren nicht nur um Personal, sondern auch um Wahrnehmung im Versorgungssystem.
            </p>
            
            <div className="space-y-4">
              <p className="text-lg font-semibold text-foreground">Wenn zentrale Begriffe extern kontrolliert werden:</p>
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

            <div className="space-y-4">
              <p className="text-lg font-semibold text-foreground">Eigentum bedeutet:</p>
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
          </section>

          {/* DACH-Perspektive */}
          <section className="space-y-6">
            <h2 className="section-heading">DACH-Perspektive</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Deutschland, Österreich und die Schweiz teilen einen gemeinsamen Sprachraum bei unterschiedlichen Versorgungssystemen.
            </p>
            
            <div className="space-y-4">
              <p className="text-lg font-semibold text-foreground">Das Domain-Paket ermöglicht:</p>
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
          </section>

          {/* Zusammenfassung */}
          <section className="space-y-6 bg-primary-light/10 p-8 rounded-lg">
            <h2 className="section-heading">Zusammenfassung für Klinikentscheider</h2>
            <p className="text-lg font-semibold text-foreground">Dieses Domain-Paket bietet Kliniken:</p>
            <ul className="space-y-3 text-muted-foreground">
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
            <p className="text-lg text-muted-foreground leading-relaxed pt-4 italic">
              Einige Systeme organisieren Betrieb.<br />
              Andere definieren, wo Versorgung beginnt.
            </p>
          </section>

          {/* Contact */}
          <section className="space-y-6 border-t border-border-subtle pt-16">
            <h2 className="section-heading">Abschluss</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sie haben Fragen oder wünschen einen unverbindlichen Austausch?<br />
              Dann melden Sie sich gerne per E-Mail.
            </p>
            <a 
              href="mailto:info@die-strategie.de" 
              className="inline-flex items-center gap-2 text-primary hover:underline text-lg font-semibold"
            >
              <Mail className="w-5 h-5" />
              info@die-strategie.de
            </a>
          </section>

          {/* Legal Notice */}
          <section className="space-y-4 bg-muted/30 p-6 rounded-lg text-sm text-muted-foreground">
            <p className="font-semibold text-foreground">Rechtlicher Hinweis</p>
            <p>
              Diese Website ist kein Jobportal, kein Recruiting-Service und keine Personalvermittlung.<br />
              Es werden keine Stellenangebote veröffentlicht und keine Bewerbungen entgegengenommen.
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Kliniken;
