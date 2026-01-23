import { ReactNode } from 'react';

interface SectionCardProps {
  title: string;
  children: ReactNode;
  icon?: ReactNode;
  delay?: string;
}

const SectionCard = ({ title, children, icon, delay = '0s' }: SectionCardProps) => {
  return (
    <div 
      className="section-card opacity-0 animate-slide-up"
      style={{ animationDelay: delay }}
    >
      <div className="flex items-center gap-4 mb-4">
        {icon && (
          <div className="w-12 h-12 rounded-2xl bg-primary-light flex items-center justify-center text-primary flex-shrink-0">
            {icon}
          </div>
        )}
        <h2 className="section-heading">{title}</h2>
      </div>
      <div className="text-muted-foreground leading-relaxed">
        {children}
      </div>
    </div>
  );
};

export default SectionCard;
