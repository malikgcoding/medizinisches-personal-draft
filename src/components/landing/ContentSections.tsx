import SectionCard from './SectionCard';
import { 
  UsersIcon, 
  BriefcaseIcon, 
  TargetIcon, 
  TrendingIcon, 
  LightbulbIcon, 
  GlobeIcon,
  FileTextIcon,
  CheckCircleIcon,
  KeyIcon,
  MailIcon,
  HeartPulseIcon
} from './icons';

const ContentSections = () => {
  return (
    <section id="details" className="px-4 sm:px-6 pb-10 pt-16 overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Für wen relevant */}
          <div className="md:col-span-2">
            <section className="px-0 sm:px-6 py-10">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-light text-primary mb-6">
                    <UsersIcon />
                  </div>
                  <h2 className="section-heading">Für wen dieses Paket relevant ist</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Zeitarbeit / Arbeitnehmerüberlassung",
                      content: "Zugang zur Nachfrage, bevor sie verteilt wird. Nicht reagieren – vorliegen.",
                      link: "/zeitarbeit"
                    },
                    {
                      title: "Jobportale & Recruiting-Plattformen",
                      content: "Eigentum am generischen Einstiegspunkt. Reichweite entsteht, bevor Kampagnen starten.",
                      link: "/jobportale"
                    },
                    {
                      title: "Kliniken und Klinikgruppen",
                      content: "Unabhängiger Zugang zum Bewerbermarkt. Weniger Abhängigkeit von Plattformen und Dienstleistern.",
                      link: "/kliniken"
                    },
                    {
                      title: "Gesundheitsverbände",
                      content: "Sprachführerschaft im digitalen Raum. Begriffe prägen Wahrnehmung – nicht Logos.",
                      link: "/verbaende"
                    },
                    {
                      title: "Fachverlage & Gesundheitsmedien",
                      content: "Struktureller SEO-Traffic auf einem dauerhaft relevanten Thema. Redaktionell und wirtschaftlich nutzbar.",
                      link: "/verlage"
                    },
                    {
                      title: "Pflegeheime & Träger",
                      content: "Direkter Zugang zur Pflege-Nachfrage. Ohne Vermittler, ohne Streuverluste.",
                      link: "/pflegeheime"
                    }
                  ].map((card, index) => (
                    <a 
                      key={index} 
                      href={`https://medizinisches-personal.de${card.link}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-card rounded-2xl border border-border-subtle p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 block group"
                    >
                      <h3 className="text-xl font-semibold mb-3 text-primary group-hover:underline transition-all cursor-pointer">{card.title}</h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">{card.content}</p>
                    </a>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Was angeboten wird */}
          <div className="md:col-span-2">
            <div className="section-card opacity-0 animate-slide-up">
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-light text-primary mr-4">
                  <BriefcaseIcon />
                </div>
                <h2 className="section-heading mb-0">Was hier konkret angeboten wird</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-6">
                Zum Paket gehören folgende Domains:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                {[
                  'medizinisches-personal.de',
                  'medizinisches-personal.at',
                  'medizinischespersonal.at',
                  'medizinisches-personal.ch',
                  'medizinischespersonal.ch',
                  'medizinisches-personal.app',
                  'medizinischespersonal.app'
                ].map((domain, index) => (
                  <div key={index} className="bg-card rounded-2xl border border-border-subtle p-4 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 text-center">
                    <span className="font-semibold" style={{ color: '#2f6f5e' }}>{domain}</span>
                  </div>
                ))}
              </div>
              <div className="w-full">
                <p className="text-lg text-muted-foreground">Es handelt sich ausschließlich um digitale Assets. Keine Dienstleistungen. Kein Betrieb. Kein Matching. Keine Job- oder Personalvermittlung.</p>
              </div>
            </div>
          </div>

          {/* Nutzungsszenarien */}
          <div className="md:col-span-2">
            <SectionCard 
              title={
                <>
                  <span className="hidden sm:inline">Mögliche Nutzungsszenarien</span>
                  <span className="sm:hidden">Mögliche<br />Nutzungs-<br />szenarien</span>
                </>
              }
              icon={<TargetIcon />}
              delay="0.3s"
            >
              <ul className="space-y-3 list-disc pl-6">
                <li className="text-lg text-muted-foreground">Weiterleitung auf bestehende Karriere- oder Recruiting-Seiten</li>
                <li className="text-lg text-muted-foreground">Aufbau eines Jobportals, Marktplatzes oder Bewerber-Hubs</li>
                <li className="text-lg text-muted-foreground">Redaktionelle Nutzung im Gesundheitsumfeld</li>
                <li className="text-lg text-muted-foreground">Lizenzmodelle (zeitlich, regional, exklusiv)</li>
                <li className="text-lg text-muted-foreground">White-Label-Kooperationsmodelle</li>
                <li className="text-lg text-muted-foreground">Langfristige Asset-Haltung</li>
              </ul>
            </SectionCard>
          </div>

          {/* Strategischer Wert */}
          {/* Strategischer Wert */}
          <div className="md:col-span-2">
            <SectionCard 
              title="Warum diese Domains strategisch wertvoll sind" 
              icon={<TrendingIcon />}
              delay="0.4s"
            >
              <div>
                <h3 className="text-2xl font-semibold text-muted-foreground mb-6">
                  Personalgewinnung beginnt nicht mit einer Anzeige.
                  <br />
                  <span style={{ color: '#2f6f5e' }}>Sie beginnt mit einer Suche.</span>
                </h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Menschen suchen nicht nach Namen.<br />
                  Sie suchen nach Begriffen.
                </p>

                <div className="flex gap-4 mb-6">
                  <div className="w-1 rounded-full flex-shrink-0" style={{ backgroundColor: '#2f6f5e' }}></div>
                  <div>
                    <p className="text-lg text-muted-foreground italic">„medizinisches Personal" „Personal im Gesundheitswesen" „Pflegepersonal finden"</p>
                  </div>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Begriffe bündeln Nachfrage. Domains kontrollieren den Einstieg.<br />
                  Operative Maßnahmen verbrauchen Budget. Anzeigen, Zeitarbeit, Print = Opex.<br />
                  Domain-Eigentum schafft Zugang. Planbar. Handelbar. Dauerhaft. CapEx.
                </p>
              </div>
            </SectionCard>
          </div>

          {/* Full-width: Was unter medizinisches Personal verstanden wird */}
          <div className="md:col-span-2">
            <SectionCard 
              title="Was unter medizinisches Personal verstanden wird" 
              icon={<HeartPulseIcon />}
              delay="0.5s"
            >
              <p className="text-lg text-muted-foreground">
                Als medizinisches Personal gelten alle qualifizierten Fachkräfte, die direkt oder indirekt an der medizinischen und gesundheitlichen Versorgung beteiligt sind. Dazu zählen unter anderem Pflegekräfte, medizinische Fachangestellte, therapeutische Berufe, medizinisch-technische Assistenz, psychosoziale Fachkräfte, Hebammen, Reha-Personal sowie Ausbildungs- und Lehrberufe im Gesundheitswesen. Der Begriff beschreibt keine einzelne Funktion, sondern ein funktionales Gesamtsystem innerhalb des Gesundheitswesens.
              </p>
            </SectionCard>
          </div>

          {/* Markt & Kontext - Full width with 3 boxes */}
          <div className="md:col-span-2">
            <SectionCard 
              title="Markt & Kontext" 
              icon={<GlobeIcon />} 
              delay="0.6s"
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6">
                <div className="flex items-center justify-center text-center p-3 sm:p-4 bg-primary-light rounded-2xl h-full min-h-[60px] sm:min-h-[80px]">
                  <div className="text-sm sm:text-base lg:text-lg font-bold text-primary">Mehr ältere Menschen.</div>
                </div>
                <div className="flex items-center justify-center text-center p-3 sm:p-4 bg-primary-light rounded-2xl h-full min-h-[60px] sm:min-h-[80px]">
                  <div className="text-sm sm:text-base lg:text-lg font-bold text-primary">Mehr Versorgungsbedarf.</div>
                </div>
                <div className="flex items-center justify-center text-center p-3 sm:p-4 bg-primary-light rounded-2xl h-full min-h-[60px] sm:min-h-[80px]">
                  <div className="text-sm sm:text-base lg:text-lg font-bold text-primary">Weniger verfügbare Fachkräfte.</div>
                </div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Dieser Engpass betrifft nahezu alle Bereiche: Pflege, Therapie, medizinische Assistenz, psychosoziale Versorgung, Ausbildung und ärztliche Berufe.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Die Nachfrage ist dauerhaft. Der Wettbewerb um Zugang nimmt zu.
              </p>
            </SectionCard>
          </div>

          {/* Nutzungslogik - Full width with poetic text */}
          <div className="md:col-span-2">
            <SectionCard 
              title="Nutzungslogik: wie eine Domain wirkt" 
              icon={<LightbulbIcon />}
              delay="0.7s"
            >
              <div className="text-muted-foreground leading-relaxed">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Eine Domain wirkt am Anfang. Vor Kampagnen. Vor Teams. Vor Budgetfreigaben. Sie ist kein Werkzeug. Sie ist ein Zugang.
                </p>
                <p className="text-lg text-muted-foreground font-medium leading-relaxed mb-6">
                  Die entscheidende Frage lautet nicht: „Wen gewinnen wir?" Sondern:
                </p>
                <p className="text-foreground font-medium">
                  <span className="text-primary text-xl sm:text-2xl font-bold">„Wem gehört der Einstieg?"</span>
                </p>
              </div>
            </SectionCard>
          </div>

          {/* Deal-Rahmenbedingungen - 5 cards in one box */}
          <div className="md:col-span-2">
            <SectionCard 
              title="Deal-Rahmenbedingungen" 
              icon={<FileTextIcon />}
              delay="0.8s"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
                <div className="text-center p-4 md:p-6 bg-primary-light rounded-2xl min-h-[120px] md:min-h-[140px] flex flex-col justify-center items-center">
                  <div className="flex justify-center mb-1 md:mb-2 text-primary flex-shrink-0">
                    <GlobeIcon />
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-primary mb-0.5 md:mb-1">Asset</div>
                  <div className="text-muted-foreground text-sm md:text-base">Domain-Paket</div>
                  <div className="text-muted-foreground text-xs md:text-sm mt-1">DE / AT / CH / APP</div>
                </div>

                <div className="text-center p-4 md:p-6 bg-primary-light rounded-2xl min-h-[120px] md:min-h-[140px] flex flex-col justify-center items-center">
                  <div className="flex justify-center mb-1 md:mb-2 text-[#2f6f5e] flex-shrink-0">
                    <CheckCircleIcon />
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-primary mb-0.5 md:mb-1">Status</div>
                  <div className="text-muted-foreground text-sm md:text-base">verfügbar</div>
                </div>

                <div className="text-center p-4 md:p-6 bg-primary-light rounded-2xl min-h-[120px] md:min-h-[140px] flex flex-col justify-center items-center">
                  <div className="flex justify-center mb-1 md:mb-2 text-primary flex-shrink-0">
                    <KeyIcon />
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-primary mb-0.5 md:mb-1">Preis</div>
                  <div className="text-muted-foreground text-sm md:text-base">nicht öffentlich</div>
                </div>

                <div className="text-center p-4 md:p-6 bg-primary-light rounded-2xl min-h-[120px] md:min-h-[140px] flex flex-col justify-center items-center">
                  <div className="flex justify-center mb-1 md:mb-2 text-primary flex-shrink-0">
                    <FileTextIcon />
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-primary mb-0.5 md:mb-1">Transaktion</div>
                  <div className="text-muted-foreground text-xs md:text-sm">Domain-Transfer</div>
                  <div className="text-muted-foreground text-xs md:text-sm">oder Lizenzmodell</div>
                </div>

                <div className="text-center p-4 md:p-6 bg-primary-light rounded-2xl min-h-[120px] md:min-h-[140px] flex flex-col justify-center items-center">
                  <div className="flex justify-center mb-1 md:mb-2 text-primary flex-shrink-0">
                    <MailIcon />
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-primary mb-0.5 md:mb-1">Erstkontakt</div>
                  <div className="text-muted-foreground text-xs md:text-sm">Gespräch – diskret</div>
                  <div className="text-muted-foreground text-xs md:text-sm">& unverbindlich</div>
                </div>
              </div>
            </SectionCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSections;
