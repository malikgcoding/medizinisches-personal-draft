import { useState } from 'react';
import { ChevronDownIcon } from './icons';

const Accordion = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <section className="px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <div 
          className="bg-card rounded-3xl border border-border-subtle overflow-hidden transition-all duration-300"
          style={{ boxShadow: 'var(--shadow-card)' }}
        >
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-card-hover transition-colors"
          >
            <span className="font-medium text-foreground text-lg">Weitere Informationen</span>
            <span 
              className={`flex-shrink-0 text-primary transition-transform duration-300 ${
                isOpen ? 'rotate-180' : ''
              }`}
            >
              <ChevronDownIcon />
            </span>
          </button>
          <div 
            className={`overflow-hidden transition-all duration-300 ${
              isOpen ? 'max-h-96' : 'max-h-0'
            }`}
          >
            <div className="px-6 pb-5 text-muted-foreground leading-relaxed space-y-4">
              <p>
                Die Domain medizinisches-personal.de ist eine Premium-Domain mit exaktem Keyword-Matching. Sie ist ideal für Unternehmen in der Personalvermittlung und im Recruiting im Gesundheitswesen.
              </p>
              <p>
                Mit dem genauen Branchenkeyword in der Domain gewinnen Sie sofort an Glaubwürdigkeit und SEO-Vorteilen. Eine Domain wirkt am Anfang - vor Kampagnen und Teams.
              </p>
              <p>
                Wir bieten vollständigen technischen Support bei der Domainübertragung und Einrichtung. Der Prozess ist sicher, schnell und unkompliziert.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accordion;
