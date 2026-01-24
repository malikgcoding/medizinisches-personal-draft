import { useState } from 'react';
import { ChevronDownIcon } from './icons';

const Accordion = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <section className="px-6 py-8">
      <div className="max-w-3xl mx-auto">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between text-left hover:text-primary transition-colors"
        >
          <span className="font-medium text-lg text-foreground">Mehr über Markt, Wachstum & Nachfrage und digitale Zuänge lesen</span>
          <span 
            className={`flex-shrink-0 text-primary transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
          >
            <ChevronDownIcon />
          </span>
        </button>
        <div 
          className={`transition-all duration-300 ${
            isOpen ? 'max-h-none' : 'max-h-0 overflow-hidden'
          }`}
        >
          <div className="pt-6 pb-5 text-lg text-muted-foreground leading-relaxed space-y-4 text-left">
            <p><strong>Medizinisches Personal im DACH-Raum – Markt, Nachfrage und digitale Zugänge</strong></p>
            <p>
              Der Begriff medizinisches Personal beschreibt sämtliche Fachkräfte, die direkt oder indirekt an der medizinischen Versorgung beteiligt sind. Dazu zählen Pflegekräfte, medizinische Fachangestellte, therapeutische Berufe, medizinisch-technische Assistenz, psychosoziale Fachkräfte, Hebammen, Reha-Personal sowie Ausbildungs- und Lehrberufe im Gesundheitswesen. In Deutschland, Österreich und der Schweiz wird dieser Begriff als übergeordnete Suchanfrage genutzt, wenn Einrichtungen, Träger oder Plattformen Personal im Gesundheitswesen suchen oder anbieten.
            </p>
            <p>
              Der Markt für medizinisches Personal im DACH-Raum ist seit Jahren von einem strukturellen Fachkräftemangel geprägt. Demografische Entwicklungen, eine alternde Bevölkerung und steigender Versorgungsbedarf treffen auf eine sinkende Zahl verfügbarer Fachkräfte. Besonders betroffen sind Pflegeberufe, therapeutische Fachrichtungen, medizinische Assistenz sowie Einrichtungen der Langzeit- und Altenpflege. Diese Entwicklung führt dazu, dass die Nachfrage nach medizinischem Personal kontinuierlich steigt und langfristig bestehen bleibt.
            </p>
            <p>
              Die Suche nach medizinischem Personal beginnt heute überwiegend digital. Verantwortliche in Kliniken, Pflegeeinrichtungen, Zeitarbeitsunternehmen oder Gesundheitsorganisationen nutzen Suchmaschinen, um Personalbedarf zu decken oder Marktüberblicke zu gewinnen. Dabei werden nicht primär Markennamen gesucht, sondern generische Begriffe wie „medizinisches Personal“, „Pflegepersonal finden“, „Personal im Gesundheitswesen“ oder „medizinische Fachkräfte“. Diese Suchbegriffe bündeln Nachfrage über alle Versorgungsbereiche hinweg.
            </p>
            <p>
              Domains, die exakt auf solche generischen Begriffe ausgerichtet sind, übernehmen im digitalen Prozess eine besondere Rolle. Sie fungieren als erster Zugangspunkt zur Nachfrage und können unabhängig von konkreten Geschäftsmodellen genutzt werden. Eine Domain wie medizinisches-personal.de oder die entsprechenden Länderdomains für Österreich und die Schweiz ist nicht an eine einzelne Institution oder Dienstleistung gebunden, sondern bildet den thematischen Einstieg in den gesamten Markt für medizinisches Personal.
            </p>
            <p>
              Das hier angebotene Domain-Paket deckt den Begriff „medizinisches Personal“ vollständig im deutschsprachigen Raum ab. Es eignet sich für unterschiedliche Nutzungsszenarien, darunter die Weiterleitung auf bestehende Karriereseiten, der Aufbau von Jobportalen oder Bewerberplattformen, redaktionelle Inhalte im Gesundheitsumfeld, Lizenzmodelle oder White-Label-Kooperationen. Die Domains können auch als langfristiges digitales Asset gehalten werden, da der zugrunde liegende Markt dauerhaft relevant bleibt.
            </p>
            <p>
              Im Unterschied zu operativen Recruiting-Maßnahmen, die laufende Kosten verursachen, stellt Domain-Eigentum eine strukturelle Positionierung dar. Die Nachfrage nach medizinischem Personal ist nicht zyklisch, sondern systemisch. Entsprechend behalten thematisch präzise Domains im Gesundheitswesen ihren Wert über lange Zeiträume. Sie sind übertragbar, lizenzierbar und unabhängig von einzelnen Kampagnen oder Plattformen einsetzbar.
            </p>
            <p>
              Zusammenfassend lässt sich festhalten: Der Markt für medizinisches Personal im DACH-Raum ist dauerhaft angespannt, digital geprägt und begriffsgetrieben. Domains, die diesen Oberbegriff abbilden, schaffen einen kontrollierbaren Einstieg in einen zentralen Zukunftsmarkt des Gesundheitswesens.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accordion;
