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
    <section id="details" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Für wen relevant */}
          <div className="md:col-span-2">
            <section className="px-6 py-10">
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
                    <div key={index} className="bg-card rounded-2xl border border-border-subtle p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 relative group">
                      <h3 className="text-xl font-semibold mb-3" style={{ color: '#2f6f5e' }}>{card.title}</h3>
                      <p className="text-muted-foreground mb-4">{card.content}</p>
                      <a href={`https://medizinisches-personal.de${card.link}`} target="_blank" rel="noopener noreferrer" className="absolute bottom-4 right-4 text-primary font-medium text-sm hover:text-primary/80 transition-colors">
                        {card.link}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Was angeboten wird */}
          <div className="md:col-span-2">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-light text-primary mb-6">
                <BriefcaseIcon />
              </div>
              <h2 className="section-heading">Was hier konkret angeboten wird</h2>
            </div>
            <div className="section-card opacity-0 animate-slide-up">
              <p className="text-lg text-muted-foreground mb-6">
                Zum Paket gehören folgende Domains:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <div className="grid grid-cols-2 gap-4">
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
                </div>
                <div className="md:col-span-1 flex flex-col justify-start">
                  <h3 className="font-semibold mb-1" style={{ color: '#2f6f5e' }}>Lieferumfang</h3>
                  <p className="text-lg text-muted-foreground">Es handelt sich ausschließlich um digitale Assets. Keine Dienstleistungen. Kein Betrieb. Kein Matching. Keine Job- oder Personalvermittlung.</p>
                </div>
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
              <ul className="space-y-3">
                {[
                  'Jobportal für medizinisches Fachpersonal',
                  'Recruiting-Plattform für Pflegekräfte',
                  'Vermittlungsagentur für Ärzte und Therapeuten',
                  'Corporate-Website für HR-Dienstleister',
                  'Branchen-Blog mit Lead-Generierung'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 min-w-0">
                    <span className="text-primary mt-0.5 flex-shrink-0"><CheckCircleIcon /></span>
                    <span className="break-words text-lg text-muted-foreground">{item}</span>
                  </li>
                ))}
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
                
                <p className="text-lg text-muted-foreground mb-3">
                  Menschen suchen nicht nach Namen.
                  <br />
                  Sie suchen nach Begriffen.
                </p>

                <div className="flex gap-4 mb-6">
                  <div className="w-1 rounded-full flex-shrink-0" style={{ backgroundColor: '#2f6f5e' }}></div>
                  <div>
                    <p className="text-lg text-muted-foreground italic">„medizinisches Personal" „Personal im Gesundheitswesen" „Pflegepersonal finden"</p>
                  </div>
                </div>

                <p className="text-lg text-muted-foreground mb-2">
                  Begriffe bündeln Nachfrage. Domains kontrollieren den Einstieg.
                </p>

                <p className="text-lg text-muted-foreground mb-2">
                  Operative Maßnahmen verbrauchen Budget. Anzeigen, Zeitarbeit, Print = Opex.
                </p>

                <p className="text-lg text-muted-foreground">
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
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  'Ärzte aller Fachrichtungen',
                  'Pflegefachkräfte',
                  'Medizinische Fachangestellte',
                  'Therapeuten (Physio, Ergo, Logo)',
                  'Hebammen und Entbindungspfleger',
                  'Rettungssanitäter und Notfallmediziner',
                  'Laborpersonal',
                  'Radiologie-Techniker',
                  'Verwaltungspersonal im Gesundheitswesen'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <span className="text-primary"><CheckCircleIcon /></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </SectionCard>
          </div>

          {/* Markt & Kontext - Full width with 3 boxes */}
          <div className="md:col-span-2">
            <SectionCard 
              title="Markt & Kontext" 
              icon={<GlobeIcon />}
              delay="0.6s"
            >
              <p className="mb-6">
                Der Fachkräftemangel im Gesundheitswesen ist eines der drängendsten 
                Themen in Deutschland. Die Nachfrage nach qualifiziertem medizinischem 
                Personal steigt kontinuierlich.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-primary-light rounded-2xl">
                  <div className="text-2xl font-bold text-primary">1.5M+</div>
                  <div className="text-xs text-muted-foreground mt-1">Pflegekräfte in DE</div>
                </div>
                <div className="text-center p-4 bg-primary-light rounded-2xl">
                  <div className="text-2xl font-bold text-primary">400K+</div>
                  <div className="text-xs text-muted-foreground mt-1">Ärzte in DE</div>
                </div>
                <div className="text-center p-4 bg-primary-light rounded-2xl">
                  <div className="text-2xl font-bold text-primary">50K+</div>
                  <div className="text-xs text-muted-foreground mt-1">Offene Stellen</div>
                </div>
              </div>
            </SectionCard>
          </div>

          {/* Nutzungslogik - Full width with poetic text */}
          <div className="md:col-span-2">
            <SectionCard 
              title="Nutzungslogik: wie eine Domain wirkt" 
              icon={<LightbulbIcon />}
              delay="0.7s"
            >
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Eine Domain wirkt am Anfang. Vor Kampagnen. Vor Teams. Vor Budgetfreigaben.<br />
                  Sie ist kein Werkzeug. Sie ist ein Zugang.
                </p>
                <p className="text-muted-foreground font-medium">
                  Die entscheidende Frage lautet nicht:<br />
                  „Wen gewinnen wir?"
                </p>
                <p className="text-foreground font-medium">
                  Sondern:<br />
                  <span className="text-primary text-lg font-bold">„Wem gehört der Einstieg?"</span>
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
