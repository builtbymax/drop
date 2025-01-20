import clsx from "clsx";
import { SpacingType } from "@/types/ContentElementTypes";

const ContentSize = ({ size = 'sl', children, className }: { size?: string, children: React.ReactNode, className?: string }) => {
  return (
    <div className={clsx(`content-size-${size}`, className)}>
      {children}
    </div>
  );
};
ContentSize.displayName = 'ContentSize';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  spacing?: SpacingType;
};

const Section = ({ 
  spacing: {
    secSpace = '0',
    secSpaceSize = '0',
  } = {},
  children, 
  className 
}: SectionProps) => {
  let spacingClass;
  let spacingSize;

  switch (secSpaceSize) {
    case '0':
      spacingSize = 'm';
      break;
    case '1':
      spacingSize = 's';
      break;
    case '2':
      spacingSize = 'm';
      break;
    case '3':
      spacingSize = 'l';
      break;
    case '4':
      spacingSize = 'xl';
      break;
    default:
      spacingSize = 'm';
      break;
  };

  switch (secSpace) {
    case '0':
      spacingClass = clsx(`spacing-above-${spacingSize}`, `spacing-below-${spacingSize}`);
      break;
    case '1':
      spacingClass = clsx('spacing-above-remove', 'spacing-below-remove');
      break;
    case '2':
      spacingClass = clsx(`spacing-above-${spacingSize}`, 'spacing-below-remove');
      break;
    case '3':
      spacingClass = clsx('spacing-above-remove', `spacing-below-${spacingSize}`);
      break;
    default:
      spacingClass = clsx(`spacing-above-${spacingSize}`, `spacing-below-${spacingSize}`);
      break;
  };

  return (
    <section className={clsx('section-container', spacingClass, className)}>
      {children}
    </section>
  );
};
Section.displayName = 'Section';

export { Section, ContentSize };