import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import DisclaimerOverlay from '@/components/DisclaimerOverlay';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Jobportale = () => {
  useEffect(() => {
    document.title = 'Jobportale | Medizinisches Personal';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Domain-Paket für Jobportale im Gesundheitswesen: Strategischer Zugang zur Nachfrage im DACH-Raum.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <DisclaimerOverlay />
      <div className="md:relative md:z-50"><Header /></div>
      
      <main className="pt-16">
        {/* Custom Hero for Jobportale */}
        <section className="relative min-h-[calc(100vh-4rem)] flex items-start md:items-center justify-center pt-8 md:pt-0 px-4 sm:px-6 py-8 overflow-hidden">
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
                  medizinisches personal & jobportale
                </h1>
                <div className="text-lg md:text-xl text-muted-foreground leading-relaxed space-y-4">
                  <p className="font-medium">Plattformen vermitteln Stellen.<br />
                  Der Begriff definiert Nachfrage.</p>
                </div>
              </div>
            </div>
                    
          {/* Scroll Indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 md:hidden">
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
              <h2 className="section-heading mb-3">Ausgangslage spezialisierter Jobportale</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Jobportale im Gesundheitswesen operieren in einem Umfeld mit:
              </p>
                  <ul className="space-y-3 text-muted-foreground mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-lg">hohem Wettbewerbsdruck</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-lg">funktionaler Vergleichbarkeit</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-lg">steigenden Kosten für Reichweite</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-lg">zunehmender Abhängigkeit von Traffic-Quellen</span>
                </li>
              </ul>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Funktionen lassen sich kopieren.<br />
                Reichweite lässt sich einkaufen.<br />
                Der früheste Zugang zur Nachfrage lässt sich nur besitzen.
              </p>
            </div>
          </div>

          {/* Wo Jobportale ins Spiel kommen */}
          <div className="md:col-span-2">
            <div className="section-card">
              <h2 className="section-heading mb-3">Wo Jobportale in der Suche ins Spiel kommen</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Jobportale greifen nicht am Anfang der Suche.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-primary mb-4">Sie wirken:</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">nach erster Orientierung</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">nach thematischer Einordnung</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">nach Begriffsbildung</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-primary mb-4">Die vorgelagerte Suche ist:</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">generisch</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">unspezifisch</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">nicht plattformbezogen</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                Suchende beginnen mit dem Bedarf.<br />
                Plattformen kommen später.<br />
                <br />
                Domains wie medizinisches-personal.de markieren genau diesen Anfang.
              </p>
            </div>
          </div>

          {/* Systemischer Begriff */}
          <div className="md:col-span-2">
            <div className="section-card">
              <h2 className="section-heading mb-3">Warum „medizinisches Personal" für Plattformen zentral ist</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Der Begriff „medizinisches Personal" fungiert als übergeordneter Sammelbegriff.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-primary mb-4">Er wird genutzt von:</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Einrichtungen</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Öffentlichkeit</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Medien</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">politischen und administrativen Akteuren</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-primary mb-4">Er bündelt:</h2>
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
                Für Jobportale bedeutet das:<br />
                Relevanz entsteht vor Rollenfiltern, vor Kategorien und vor Plattformlogik.
              </p>
            </div>
          </div>

          {/* Infrastruktureller Zugang */}
          <div className="md:col-span-2">
            <div className="section-card">
              <h2 className="section-heading mb-3">Das Domain-Paket als vorgelagerter Nachfrage-Layer</h2>
              
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-primary mb-4">Das Domain-Paket ist:</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">kein Jobportal</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">kein Matching-System</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">keine Plattform</span>
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
                      <span className="text-lg">vorgelagerter Nachfrage-Layer</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Filter vor der Plattform</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                Plattformen organisieren Auswahl.<br />
                Domains definieren Herkunft.
              </p>
            </div>
          </div>

          {/* Strategischer Nutzen */}
          <div className="md:col-span-2">
            <div className="section-card">
              <h2 className="section-heading mb-3">Strategischer Nutzen für Jobportale</h2>
              
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-primary mb-4">Plattformstrategie</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Kontrolle über einen generischen Gesundheitsbegriff</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Entkopplung vom reinen Wettbewerb um Klicks</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Schutz vor Verdrängung im vorgelagerten Suchraum</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Zugang zu Nachfrage vor Segmentierung</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-primary mb-4">Architektonische Nutzung</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">vorgelagerte Einstiegsseite</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Dach über mehreren Portalen oder Marken</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">neutrale Referenzseite innerhalb von Konzernstrukturen</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Weiterleitung in bestehende Systeme</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Integration ohne Produktumbau</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                Das Domain-Paket ergänzt Plattformen, ohne sie zu verändern.
              </p>
            </div>
          </div>

          {/* Unabhängigkeit */}
          <div className="md:col-span-2">
            <div className="section-card">
              <h2 className="section-heading mb-3">Unabhängigkeit von Plattformdynamiken</h2>
              
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-primary mb-4">Jobportale unterliegen:</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Algorithmus-Abhängigkeiten</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Reichweiten-Schwankungen</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">externen Traffic-Quellen</span>
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
                      <span className="text-lg">Verhandlungsspielraum</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                Nicht als Ersatz, sondern als strukturelle Ergänzung.
              </p>
            </div>
          </div>

          {/* Wettbewerb */}
          <div className="md:col-span-2">
            <div className="section-card">
              <h2 className="section-heading mb-3">Wettbewerbsperspektive</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Die zentrale Frage für Plattformbetreiber lautet:<br />
                Wer kontrolliert den generischen Einstieg in die Gesundheitsnachfrage?
              </p>
              
              <div>
                <h2 className="text-xl font-semibold text-primary mb-4">Wenn dieser Einstieg extern liegt:</h2>
                  <ul className="space-y-3 text-muted-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-lg">konkurrieren Portale um Traffic</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-lg">statt ihn strukturell zu besitzen</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-lg">steigt die Austauschbarkeit</span>
                  </li>
                </ul>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Eigentum am Einstieg verschiebt diese Dynamik.
              </p>
            </div>
          </div>

          {/* Optionale Nutzung */}
          <div className="md:col-span-2">
            <div className="section-card">
              <h2 className="section-heading mb-3">Optionale Nutzung – besonders relevant für Plattformen</h2>
              
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-primary mb-4">Für Jobportale ist entscheidend:</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">keine technische Verpflichtung</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">keine Markenverwässerung</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">keine operative Bindung</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-primary mb-4">Mögliche Szenarien:</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">reine Weiterleitung auf bestehende Portale</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Nutzung als neutraler Vorfilter</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Trennung von Infrastruktur und Marke</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-lg">Vorbereitung auf Zusammenschlüsse oder Exit-Szenarien</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                Besitz schafft Optionen.<br />
                Nicht-Besitz schließt sie aus.
              </p>
            </div>
          </div>

          {/* DACH-Perspektive */}
          <div className="md:col-span-2">
            <div className="section-card">
              <h2 className="section-heading mb-3">DACH-Perspektive</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Deutschland, Österreich und die Schweiz nutzen identische Begriffe im Gesundheitswesen, bei gleichzeitig unterschiedlichen Markt- und Plattformmodellen.
              </p>
              
              <div>
                <h2 className="text-xl font-semibold text-primary mb-4">Das Domain-Paket ermöglicht:</h2>
                  <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-lg">konsistente sprachliche Präsenz</span>
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

          {/* Infrastruktur und Plattform */}
          <div className="md:col-span-2">
            <div className="section-card">
              <h2 className="section-heading mb-3">Infrastruktur und Plattform</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Plattformen sind beweglich.<br />
                Infrastruktur ist stabil.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Beides ist notwendig.<br />
                Aber nicht austauschbar.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Jobportale gewinnen langfristig, wenn sie nicht nur optimieren,<br />
                sondern den Einstieg kontrollieren.
              </p>
            </div>
          </div>

          {/* Zusammenfassung */}
          <div className="md:col-span-2">
            <div className="section-card bg-primary-light/10">
              <h2 className="section-heading mb-3">Zusammenfassung für Plattformbetreiber</h2>
              <h2 className="text-xl font-semibold text-primary mb-4">Dieses Domain-Paket bietet Jobportalen und Recruiting-Plattformen im Gesundheitswesen:</h2>
                  <ul className="space-y-3 text-muted-foreground mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-lg">vorgelagerten Zugang zur Nachfrage</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-lg">Kontrolle über einen systemischen Gesundheitsbegriff</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-lg">geringere Abhängigkeit von externen Traffic-Quellen</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-lg">flexible, optionale Nutzung</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-lg">langfristige Infrastruktur jenseits von Produktzyklen</span>
                </li>
              </ul>
              <p className="text-lg text-muted-foreground leading-relaxed italic">
                Plattformen organisieren Märkte.<br />
                Infrastruktur entscheidet, wo sie beginnen.
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

export default Jobportale;
