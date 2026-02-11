'use client';

import React, { useState, useEffect } from 'react';
import { List } from 'lucide-react';

interface ContentSection {
  id: string;
  title: string;
}

interface ContentNavigationProps {
  sections: ContentSection[];
  locale: 'en' | 'tr';
}

const ContentNavigation: React.FC<ContentNavigationProps> = ({ sections, locale }) => {
  const [activeSection, setActiveSection] = useState<string>('');
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if we should make the TOC sticky
      setIsSticky(window.scrollY > 300);

      // Find which section is currently visible
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id),
      }));

      for (const { id, element } of sectionElements) {
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav
      className={`rounded-lg border border-neutral-200 bg-white p-4 transition-all ${
        isSticky ? 'sticky top-4' : ''
      }`}
    >
      <div className="mb-3 flex items-center gap-2">
        <List className="h-5 w-5 text-primary-600" />
        <h3 className="font-semibold text-neutral-900">
          {locale === 'en' ? 'Table of Contents' : 'İçindekiler'}
        </h3>
      </div>
      <ul className="space-y-2">
        {sections.map((section) => (
          <li key={section.id}>
            <button
              onClick={() => scrollToSection(section.id)}
              className={`w-full text-left text-sm transition-colors hover:text-primary-600 ${
                activeSection === section.id
                  ? 'font-semibold text-primary-600'
                  : 'text-neutral-700'
              }`}
            >
              {section.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ContentNavigation;
