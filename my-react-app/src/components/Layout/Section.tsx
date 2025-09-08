import React from 'react';

interface SectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

/**
 * Компонент для оформлення секцій демонстрації
 */
const Section: React.FC<SectionProps> = ({ title, description, children }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      {description && (
        <p className="text-gray-600 mb-4">{description}</p>
      )}
      {children}
    </div>
  );
};

export default Section;