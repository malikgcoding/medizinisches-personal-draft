import SectionCard from './SectionCard';
import { 
  UsersIcon, 
  BriefcaseIcon, 
  TargetIcon, 
  TrendingIcon, 
  LightbulbIcon, 
  GlobeIcon,
  KeyIcon,
  FileTextIcon,
  CheckCircleIcon,
  HeartPulseIcon,
  BuildingIcon
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
            title="Mögliche Nutzungsszenarien" 
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
                <li key={i} className="flex items-start gap-3">
                  <span className="text-primary mt-0.5"><CheckCircleIcon /></span>
                  <span>{item}</span>
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

          {/* Markt & Kontext */}
          <SectionCard 
            title="Markt & Kontext" 
            icon={<GlobeIcon />}
            delay="0.6s"
          >
            <p className="mb-4">
              Der Fachkräftemangel im Gesundheitswesen ist eines der drängendsten 
              Themen in Deutschland. Die Nachfrage nach qualifiziertem medizinischem 
              Personal steigt kontinuierlich.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="text-center p-4 bg-primary-light rounded-2xl">
                <div className="text-2xl font-bold text-primary">1.5M+</div>
                <div className="text-xs text-muted-foreground mt-1">Pflegekräfte in DE</div>
              </div>
              <div className="text-center p-4 bg-primary-light rounded-2xl">
                <div className="text-2xl font-bold text-primary">400K+</div>
                <div className="text-xs text-muted-foreground mt-1">Ärzte in DE</div>
              </div>
            </div>
          </SectionCard>

          {/* Nutzungslogik */}
          <SectionCard 
            title="Nutzungslogik: Wie eine Domain wirkt" 
            icon={<LightbulbIcon />}
            delay="0.7s"
          >
            <p className="mb-4">
              Eine präzise Domain wie diese funktioniert auf mehreren Ebenen:
            </p>
            <ul className="space-y-3">
              {[
                'Direct Type-In Traffic durch Eingabe',
                'Hohe organische Sichtbarkeit',
                'Markenbildung ohne Erklärungsbedarf',
                'Conversion-Boost durch Relevanz'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-primary mt-0.5"><CheckCircleIcon /></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </SectionCard>

          {/* Wem gehört der Einstieg */}
          <SectionCard 
            title="Wem gehört der Einstieg?" 
            icon={<KeyIcon />}
            delay="0.8s"
          >
            <p className="mb-4">
              Diese Domain ist ideal für Unternehmen und Einzelpersonen, die:
            </p>
            <ul className="space-y-3">
              {[
                'Eine neue Plattform aufbauen möchten',
                'Ihre bestehende Marke stärken wollen',
                'Als Investition für Wiederverkauf',
                'Wettbewerbsvorteil sichern möchten'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-primary mt-0.5"><CheckCircleIcon /></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </SectionCard>

          {/* Deal-Rahmenbedingungen */}
          <SectionCard 
            title="Deal-Rahmenbedingungen" 
            icon={<FileTextIcon />}
            delay="0.9s"
          >
            <ul className="space-y-3">
              {[
                'Vollständige Eigentumsübertragung',
                'Sichere Transaktion via Escrow',
                'Technischer Support beim Transfer',
                'Flexible Zahlungsoptionen möglich',
                'Sofortige Verfügbarkeit nach Zahlung'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-primary mt-0.5"><CheckCircleIcon /></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </SectionCard>
        </div>
      </div>
    </section>
  );
};

export default ContentSections;
