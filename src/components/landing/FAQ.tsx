import { useState } from 'react';
import { ChevronDownIcon, HelpCircleIcon } from './icons';

const faqs = [
  {
    question: 'Wie läuft der Kaufprozess ab?',
    answer: 'Nach Ihrer Anfrage erhalten Sie ein detailliertes Angebot. Bei Einigung wird die Transaktion über einen sicheren Escrow-Service abgewickelt. Nach Zahlungseingang erfolgt die sofortige Übertragung der Domain.'
  },
  {
    question: 'Ist der Preis verhandelbar?',
    answer: 'Ja, wir sind offen für Verhandlungen. Der finale Preis hängt von verschiedenen Faktoren ab, einschließlich Zahlungsmodalitäten und Ihrer geplanten Nutzung.'
  },
  {
    question: 'Welche Zahlungsmethoden werden akzeptiert?',
    answer: 'Wir akzeptieren Banküberweisung, Escrow-Dienste wie Escrow.com oder Sedo, sowie bei entsprechender Vereinbarung auch Ratenzahlung.'
  },
  {
    question: 'Wie lange dauert die Übertragung?',
    answer: 'Nach Zahlungseingang wird die Domain innerhalb von 24-48 Stunden auf Ihren Registrar übertragen. Der komplette Prozess dauert in der Regel 3-5 Werktage.'
  },
  {
    question: 'Erhalte ich Unterstützung nach dem Kauf?',
    answer: 'Ja, wir bieten technischen Support bei der Übertragung und Einrichtung. Auf Wunsch können wir auch bei der initialen Website-Entwicklung unterstützen.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="px-6 py-20 bg-muted/30">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-light text-primary mb-6">
            <HelpCircleIcon />
          </div>
          <h2 className="section-heading">FAQ – kurz und klar</h2>
          <p className="section-subheading">
            Häufig gestellte Fragen zum Domain-Kauf
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-card rounded-3xl border border-border-subtle overflow-hidden transition-all duration-300"
              style={{ boxShadow: 'var(--shadow-card)' }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-card-hover transition-colors"
              >
                <span className="font-medium text-foreground pr-4">{faq.question}</span>
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
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
