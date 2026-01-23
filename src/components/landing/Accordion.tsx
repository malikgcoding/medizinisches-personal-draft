import { useState } from 'react';
import { ChevronDownIcon, BookOpenIcon } from './icons';

const accordionItems = [
  {
    title: 'Über diese Domain',
    content: 'Die Domain medizinisches-personal.de ist eine Premium-Domain mit exaktem Keyword-Matching. Sie ist ideal für Unternehmen in der Personalvermittlung und im Recruiting im Gesundheitswesen.'
  },
  {
    title: 'SEO und Sichtbarkeit',
    content: 'Mit dem genauen Branchenkeyword in der Domain gewinnen Sie sofort an Glaubwürdigkeit und SEO-Vorteilen. Eine Domain wirkt am Anfang - vor Kampagnen und Teams.'
  },
  {
    title: 'Technischer Support',
    content: 'Wir bieten vollständigen technischen Support bei der Domainübertragung und Einrichtung. Der Prozess ist sicher, schnell und unkompliziert.'
  }
];

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-heading">Weitere Informationen</h2>
        </div>

        <div className="space-y-4">
          {accordionItems.map((item, index) => (
            <div 
              key={index}
              className="bg-card rounded-3xl border border-border-subtle overflow-hidden transition-all duration-300"
              style={{ boxShadow: 'var(--shadow-card)' }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-card-hover transition-colors"
              >
                <span className="font-medium text-foreground pr-4 flex items-center gap-3">
                  <BookOpenIcon />
                  {item.title}
                </span>
                <span 
                  className={`flex-shrink-0 text-primary transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                >
                  <ChevronDownIcon />
                </span>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-muted-foreground leading-relaxed">
                  {item.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accordion;
