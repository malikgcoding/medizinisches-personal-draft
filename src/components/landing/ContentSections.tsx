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
            <SectionCard 
              title="Für wen dieses Paket relevant ist" 
              icon={<UsersIcon />}
              delay="0.1s"
            >
              <ul className="space-y-3">
                {[
                  'Zeitarbeit / Arbeitnehmerüberlassung',
                  'Jobportale & Recruiting-Plattformen',
                  'Kliniken und Klinikgruppen',
                  'Gesundheitsverbände',
                  'Fachverlage & Gesundheitsmedien',
                  'Pflegeheime & Träger'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-primary mt-0.5"><CheckCircleIcon /></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </SectionCard>
          </div>

          {/* Was angeboten wird */}
          <div className="md:col-span-2">
            <SectionCard 
              title="Was hier konkret angeboten wird" 
              icon={<BriefcaseIcon />}
              delay="0.2s"
            >
              <p className="mb-4">
                Zum Paket gehören folgende Domains:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  'medizinisches-personal.de',
                  'medizinisches-personal.at',
                  'medizinischespersonal.at',
                  'medizinisches-personal.ch',
                  'medizinischespersonal.ch',
                  'medizinisches-personal.app',
                  'medizinischespersonal.app'
                ].map((domain, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="text-primary"><CheckCircleIcon /></span>
                    <span className="font-mono text-sm">{domain}</span>
                  </li>
                ))}
              </ul>
              <p className="mb-4">
                Es handelt sich ausschließlich um digitale Assets.
              </p>
              <p className="mb-4 text-muted-foreground">
                Keine Dienstleistungen.<br />
                Kein Betrieb.<br />
                Kein Matching.<br />
                Keine Job- oder Personalvermittlung.
              </p>
              <p className="mb-4 font-medium">
                Mögliche Nutzungsszenarien:
              </p>
              <ul className="space-y-2">
                {[
                  'Weiterleitung auf bestehende Karriere- oder Recruiting-Seiten',
                  'Aufbau eines Jobportals, Marktplatzes oder Bewerber-Hubs',
                  'Redaktionelle Nutzung im Gesundheitsumfeld',
                  'Lizenzmodelle (zeitlich, regional, exklusiv)',
                  'White-Label-Kooperationsmodelle',
                  'Langfristige Asset-Haltung'
                ].map((scenario, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-primary mt-0.5"><CheckCircleIcon /></span>
                    <span className="text-sm">{scenario}</span>
                  </li>
                ))}
              </ul>
            </SectionCard>
          </div>

          {/* Strategischer Wert */}
          <div className="md:col-span-2">
            <SectionCard 
              title="Warum diese Domains strategisch wertvoll sind" 
              icon={<TrendingIcon />}
              delay="0.4s"
            >
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Personalgewinnung beginnt nicht mit einer Anzeige.<br />
                  Sie beginnt mit einer Suche.
                </p>
                <p>
                  Menschen suchen nicht nach Namen.<br />
                  Sie suchen nach Begriffen.
                </p>
                <p className="text-primary font-medium text-center my-6">
                  „medizinisches Personal"<br />
                  „Personal im Gesundheitswesen"<br />
                  „Pflegepersonal finden"
                </p>
                <p>
                  Begriffe bündeln Nachfrage.<br />
                  Domains kontrollieren den Einstieg.
                </p>
                <p className="text-foreground font-medium">
                  Operative Maßnahmen verbrauchen Budget.<br />
                  Anzeigen, Zeitarbeit, Print = Opex.
                </p>
                <p className="text-primary font-medium">
                  Domain-Eigentum schafft Zugang.<br />
                  Planbar. Handelbar. Dauerhaft.<br />
                  CapEx.
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
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Als medizinisches Personal gelten alle qualifizierten Fachkräfte, die direkt oder indirekt 
                  an der medizinischen und gesundheitlichen Versorgung beteiligt sind.
                </p>
                <p>
                  Dazu zählen unter anderem Pflegekräfte, medizinische Fachangestellte, therapeutische Berufe, 
                  medizinisch-technische Assistenz, psychosoziale Fachkräfte, Hebammen, Reha-Personal sowie 
                  Ausbildungs- und Lehrberufe im Gesundheitswesen.
                </p>
                <p>
                  Der Begriff beschreibt keine einzelne Funktion, sondern ein funktionales Gesamtsystem 
                  innerhalb des Gesundheitswesens.
                </p>
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
                  Eine Domain wirkt am Anfang. Vor Kampagnen. Vor Teams. Vor Budgetfreigaben.
                </p>
                <p>
                  Sie ist kein Werkzeug.<br />
                  Sie ist ein Zugang.
                </p>
                <p className="text-foreground font-medium">
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
