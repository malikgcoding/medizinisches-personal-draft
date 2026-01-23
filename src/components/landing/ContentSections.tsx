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
          <SectionCard 
            title="Für wen dieses Programm relevant ist" 
            icon={<UsersIcon />}
            delay="0.1s"
          >
            <ul className="space-y-3">
              {[
                'Personalvermittler im Gesundheitswesen',
                'Kliniken und Krankenhäuser',
                'Pflegeeinrichtungen und Seniorenheime',
                'HR-Agenturen mit Fokus auf Medizin',
                'Investoren im Healthcare-Sektor'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-primary mt-0.5"><CheckCircleIcon /></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </SectionCard>

          {/* Was angeboten wird */}
          <SectionCard 
            title="Was hier konkret angeboten wird" 
            icon={<BriefcaseIcon />}
            delay="0.2s"
          >
            <p className="mb-4">
              Die Premium-Domain <strong className="text-foreground">medizinisches-personal.de</strong> steht 
              zum Verkauf. Eine einmalige Gelegenheit für Unternehmen, die im Bereich 
              Personalvermittlung oder Recruiting im Gesundheitswesen tätig sind.
            </p>
            <p>
              Inklusive vollständiger Übertragung aller Rechte und technischer Unterstützung 
              beim Transfer.
            </p>
          </SectionCard>

          {/* Nutzungsszenarien */}
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
                  <span className="break-words">{item}</span>
                </li>
              ))}
            </ul>
          </SectionCard>

          {/* Strategischer Wert */}
          <SectionCard 
            title="Warum diese Domain strategisch wertvoll ist" 
            icon={<TrendingIcon />}
            delay="0.4s"
          >
            <ul className="space-y-3">
              {[
                'Exaktes Keyword-Matching für Suchmaschinen',
                'Hohe Suchvolumina im DACH-Raum',
                'Sofortige Branchenzuordnung',
                'Vertrauensaufbau durch Professionalität',
                'Langfristiger SEO-Vorteil'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-primary mt-0.5"><CheckCircleIcon /></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </SectionCard>

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

          {/* Deal-Rahmenbedingungen - 5 cards grid */}
          <div className="md:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Deal-Rahmenbedingungen</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <SectionCard 
                title="Asset" 
                icon={<GlobeIcon />}
                delay="0.8s"
              >
                <p className="text-lg font-semibold text-primary">Domain-Paket</p>
                <p className="text-sm text-muted-foreground">DE / AT / CH / APP</p>
              </SectionCard>

              <SectionCard 
                title="Status" 
                icon={<CheckCircleIcon />}
                delay="0.9s"
              >
                <p className="text-lg font-semibold text-green-600">verfügbar</p>
              </SectionCard>

              <SectionCard 
                title="Preis" 
                icon={<KeyIcon />}
                delay="1.0s"
              >
                <p className="text-lg font-semibold text-primary">nicht öffentlich</p>
              </SectionCard>

              <SectionCard 
                title="Transaktion" 
                icon={<FileTextIcon />}
                delay="1.1s"
              >
                <p className="text-sm">Domain-Transfer</p>
                <p className="text-sm">oder Lizenzmodell</p>
              </SectionCard>

              <SectionCard 
                title="Erstkontakt" 
                icon={<MailIcon />}
                delay="1.2s"
              >
                <p className="text-sm">Gespräch – diskret</p>
                <p className="text-sm">& unverbindlich</p>
              </SectionCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSections;
