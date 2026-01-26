import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";

const relevantCards = [
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
];

const ContentSections = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!carouselApi) {
      return
    }

    setCurrent(carouselApi.selectedScrollSnap())

    carouselApi.on("select", () => {
      setCurrent(carouselApi.selectedScrollSnap())
    })
  }, [carouselApi])

  return (
    <section id="details" className="px-2 sm:px-4 md:px-6 pb-10 pt-4 sm:pt-8 overflow-x-hidden w-full">
      <div className="max-w-6xl mx-auto w-full px-2 sm:px-0">
        <div className="grid gap-4 md:gap-8 md:grid-cols-2 w-full max-w-full min-w-0">
          {/* Für wen relevant */}
          <div className="md:col-span-2 w-full max-w-full min-w-0">
            <section className="w-full max-w-full">
              <div className="max-w-6xl mx-auto w-full">
                <div className="text-center mb-12 md:mb-12 mb-6 w-full">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-light text-primary mb-6">
                    <UsersIcon />
                  </div>
                  <h2 className="section-heading">Für wen dieses Paket relevant ist</h2>
                </div>
                
                {/* Mobile Carousel - visible only on mobile */}
                <div className="md:hidden w-full">
                  <Carousel
                    setApi={setCarouselApi}
                    opts={{
                      align: "start",
                      loop: true,
                    }}
                    className="w-full"
                  >
                    <CarouselContent className="-ml-4">
                      {relevantCards.map((card, index) => (
                        <CarouselItem key={index} className="pl-4 basis-full flex">
                          <Link 
                            to={card.link}
                            className="bg-card rounded-2xl border border-border-subtle p-3 pb-8 transition-all duration-300 hover:shadow-md block group w-full relative min-h-[200px] flex flex-col"
                          >
                            <div className="flex-1 flex flex-col justify-center text-center">
                              <h3 className="text-lg font-semibold mb-2 text-primary underline decoration-primary/20 decoration-1 underline-offset-2 group-hover:decoration-primary/60 transition-all cursor-pointer">{card.title}</h3>
                              <p className="text-base text-muted-foreground leading-relaxed">{card.content}</p>
                            </div>
                              
                            {/* Pagination Dots locked at bottom */}
                            <div className="flex justify-center gap-2 absolute bottom-2.5 left-0 right-0">
                              {relevantCards.map((_, dotIndex) => (
                                <div
                                  key={dotIndex}
                                  className={`h-1.5 rounded-full transition-all ${
                                    dotIndex === current 
                                      ? 'w-6 bg-primary' 
                                      : 'w-1.5 bg-primary/30'
                                  }`}
                                />
                              ))}
                            </div>
                          </Link>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <div className="flex justify-center gap-4 mt-4 mb-2">
                      <CarouselPrevious className="static translate-y-0" />
                      <CarouselNext className="static translate-y-0" />
                    </div>
                  </Carousel>
                </div>

                {/* Desktop Grid - hidden on mobile */}
                <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full max-w-full min-w-0">
                  {relevantCards.map((card, index) => (
                    <Link 
                      key={index} 
                      to={card.link}
                      className="bg-card rounded-2xl border border-border-subtle p-4 md:p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 block group w-full max-w-full min-w-0"
                    >
                      <h3 className="text-xl font-semibold mb-3 text-primary underline decoration-primary/30 decoration-1 underline-offset-2 group-hover:decoration-primary/70 transition-all cursor-pointer">{card.title}</h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">{card.content}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Was angeboten wird */}
          <div className="md:col-span-2 w-full max-w-full min-w-0">
            <div className="section-card opacity-0 animate-slide-up w-full max-w-full min-w-0">
              <div className="flex items-center mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-light text-primary mr-4">
                  <BriefcaseIcon />
                </div>
                <h2 className="section-heading mb-0">Was hier konkret angeboten wird</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-6">
                Zum Paket gehören folgende Domains:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-6 w-full max-w-full min-w-0">
                {[
                  'medizinisches-personal.de',
                  'medizinisches-personal.at',
                  'medizinischespersonal.at',
                  'medizinisches-personal.ch',
                  'medizinischespersonal.ch',
                  'medizinisches-personal.app',
                  'medizinischespersonal.app'
                ].map((domain, index) => (
                  <div key={index} className="bg-card rounded-2xl border border-border-subtle p-3 sm:p-4 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 text-center min-w-0 w-full max-w-full">
                    <span className="block text-sm sm:text-base font-semibold text-primary break-all leading-snug w-full">{domain}</span>
                  </div>
                ))}
              </div>
              <div className="w-full">
                <p className="text-lg text-muted-foreground">Es handelt sich ausschließlich um digitale Assets. Keine Dienstleistungen. Kein Betrieb. Kein Matching. Keine Job- oder Personalvermittlung.</p>
              </div>
            </div>
          </div>

          {/* Nutzungsszenarien */}
          <div className="md:col-span-2 w-full max-w-full min-w-0">
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
          <div className="md:col-span-2 w-full max-w-full min-w-0">
            <SectionCard 
              title="Warum diese Domains strategisch wertvoll sind" 
              icon={<TrendingIcon />}
              delay="0.4s"
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-muted-foreground leading-snug mb-4 sm:mb-6">
                  Personalgewinnung beginnt nicht mit einer Anzeige.<br />
                  <span style={{ color: '#2f6f5e' }}>Sie beginnt mit einer Suche.</span>
                </h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Menschen suchen nicht nach Namen.<br />
                  Sie suchen nach Begriffen.
                </p>

                <div className="flex gap-4 mb-6 w-full max-w-full min-w-0">
                  <div className="w-1 rounded-full flex-shrink-0" style={{ backgroundColor: '#2f6f5e' }}></div>
                  <div className="min-w-0 flex-1">
                    <p className="text-lg text-muted-foreground italic w-full break-words">„medizinisches Personal" „Personal im Gesundheitswesen" „Pflegepersonal finden"</p>
                  </div>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Begriffe bündeln Nachfrage.<br />
                  Domains kontrollieren den Einstieg.<br />
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                  Operative Maßnahmen verbrauchen Budget.<br />
                  Anzeigen, Zeitarbeit, Print = Opex.<br />
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                  Domain-Eigentum schafft Zugang.<br />
                  Planbar. Handelbar. Dauerhaft.<br />
                  CapEx.
                </p>
              </div>
            </SectionCard>
          </div>

          {/* Full-width: Was unter medizinisches Personal verstanden wird */}
          <div className="md:col-span-2 w-full max-w-full min-w-0">
            <SectionCard 
              title="Was unter „medizinisches Personal“ verstanden wird" 
              icon={<HeartPulseIcon />}
              delay="0.5s"
            >
              <div className="text-lg text-muted-foreground">
                <p>
                  Als medizinisches Personal gelten alle qualifizierten Fachkräfte, die direkt oder indirekt an der medizinischen und gesundheitlichen Versorgung beteiligt sind.
                </p>
                <p className="mt-4">
                  Dazu zählen unter anderem Pflegekräfte, medizinische Fachangestellte, therapeutische Berufe, medizinisch-technische Assistenz, psychosoziale Fachkräfte, Hebammen, Reha-Personal sowie Ausbildungs- und Lehrberufe im Gesundheitswesen.
                </p>
                <p className="mt-4">
                  Der Begriff beschreibt keine einzelne Funktion, sondern ein funktionales Gesamtsystem innerhalb des Gesundheitswesens.
                </p>
              </div>
            </SectionCard>
          </div>

          {/* Markt & Kontext - Full width with 3 boxes */}
          <div className="md:col-span-2 w-full max-w-full min-w-0">
            <SectionCard 
              title="Markt & Kontext" 
              icon={<GlobeIcon />} 
              delay="0.6s"
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 w-full max-w-full min-w-0">
                <div className="flex items-center justify-center text-center p-3 sm:p-4 bg-primary-light rounded-2xl h-full min-h-[60px] sm:min-h-[80px] w-full max-w-full min-w-0">
                  <div className="text-sm sm:text-base lg:text-lg font-bold text-primary">Mehr ältere Menschen.</div>
                </div>
                <div className="flex items-center justify-center text-center p-3 sm:p-4 bg-primary-light rounded-2xl h-full min-h-[60px] sm:min-h-[80px] w-full max-w-full min-w-0">
                  <div className="text-sm sm:text-base lg:text-lg font-bold text-primary">Mehr Versorgungsbedarf.</div>
                </div>
                <div className="flex items-center justify-center text-center p-3 sm:p-4 bg-primary-light rounded-2xl h-full min-h-[60px] sm:min-h-[80px] w-full max-w-full min-w-0">
                  <div className="text-sm sm:text-base lg:text-lg font-bold text-primary">Weniger verfügbare Fachkräfte.</div>
                </div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Dieser Engpass betrifft nahezu alle Bereiche:<br />
                Pflege, Therapie, medizinische Assistenz, psychosoziale Versorgung, Ausbildung und ärztliche Berufe.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Die Nachfrage ist dauerhaft.<br />
                Der Wettbewerb um Zugang nimmt zu.
              </p>
            </SectionCard>
          </div>

          {/* Nutzungslogik - Full width with poetic text */}
          <div className="md:col-span-2 w-full max-w-full min-w-0">
            <SectionCard 
              title="Nutzungslogik: wie eine Domain wirkt" 
              icon={<LightbulbIcon />}
              delay="0.7s"
            >
              <div className="text-muted-foreground leading-relaxed">
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Eine Domain wirkt am Anfang.<br />
                  Vor Kampagnen.<br />
                  Vor Teams. Vor Budgetfreigaben.<br />
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Sie ist kein Werkzeug.<br />
                  Sie ist ein Zugang.
                </p>
                <p className="text-lg text-muted-foreground font-medium leading-relaxed mb-4">
                  Die entscheidende Frage lautet nicht:<br />
                  „Wen gewinnen wir?"
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Sondern:<br />
                  <span className="text-primary text-xl sm:text-2xl font-bold">„Wem gehört der Einstieg?"</span>
                </p>
              </div>
            </SectionCard>
          </div>

          {/* Deal-Rahmenbedingungen - 5 cards in one box */}
          <div className="md:col-span-2 w-full max-w-full min-w-0">
            <SectionCard 
              title="Deal-Rahmenbedingungen" 
              icon={<FileTextIcon />}
              delay="0.8s"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 w-full max-w-full min-w-0">
                <div className="text-center p-4 md:p-6 bg-primary-light rounded-2xl min-h-[120px] md:min-h-[140px] flex flex-col justify-center items-center w-full max-w-full min-w-0">
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

                <a 
                  href="mailto:hallo@medizinisches-personal.de"
                  className="text-center p-4 md:p-6 bg-primary-light rounded-2xl min-h-[120px] md:min-h-[140px] flex flex-col justify-center items-center hover:bg-primary/10 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex justify-center mb-1 md:mb-2 text-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <MailIcon />
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-primary mb-0.5 md:mb-1 group-hover:underline">Erstkontakt</div>
                  <div className="text-muted-foreground text-xs md:text-sm">Gespräch – diskret</div>
                  <div className="text-muted-foreground text-xs md:text-sm">& unverbindlich</div>
                </a>
              </div>
            </SectionCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSections;
