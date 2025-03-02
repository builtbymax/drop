import clsx from "clsx";

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
  spacing?: SectionSpaceType;
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


interface SectionSpaceType {
  /**
   * Select the spacing for this section.
   */
  secSpace?: ('0' | '1' | '2' | '3') | null;
  /**
   * Select the size for this section spacing.
   */
  secSpaceSize?: ('0' | '1' | '2' | '3' | '4') | null;
};