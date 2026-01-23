import { MailIcon } from './icons';

const Contact = () => {
  return (
    <section id="contact" className="px-6 py-20">
      <div className="max-w-2xl mx-auto text-center">
        <div className="section-card">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground mb-6">
            <MailIcon />
          </div>
          
          <h2 className="section-heading mb-4">Interesse geweckt?</h2>
          <p className="section-subheading mb-8">
            Kontaktieren Sie uns für ein unverbindliches Gespräch über diese 
            einzigartige Domain-Opportunity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="mailto:kontakt@medizinisches-personal.de" 
              className="pill-button-primary w-full sm:w-auto"
            >
              E-Mail senden
            </a>
            <a 
              href="tel:+4930000000" 
              className="pill-button-outline w-full sm:w-auto"
            >
              +49 30 000 000
            </a>
          </div>

          <p className="text-sm text-muted-foreground mt-8">
            Antwort innerhalb von 24 Stunden garantiert
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
