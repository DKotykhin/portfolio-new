import { IoClose } from 'react-icons/io5';
import { LanguageButton } from './LanguageButton';
import Link from 'next/link';

const MobileNavBar = ({
  isOpen,
  onClose,
  navLinks,
  locale,
  activeSection,
}: {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { name: string; href: string; id: string }[];
  locale: string;
  activeSection?: string | null;
}) => {
  return (
    <div className="md:hidden">
      <div
        aria-hidden="true"
        className={`bg-opacity-50 fixed inset-0 z-40 bg-black transition-opacity duration-300 ${
          isOpen ? 'opacity-70' : 'pointer-events-none opacity-0'
        }`}
        onClick={onClose}
      />
      <nav
        aria-hidden={!isOpen}
        className={`${isOpen ? 'translate-y-0' : '-translate-y-full'} bg-background absolute top-0 left-0 z-50 flex w-full flex-col items-center p-4 transition-transform duration-300`}
      >
        <button onClick={onClose} aria-label="Close menu" className="self-end">
          <IoClose size={24} className="text-white" />
        </button>
        <ul className="flex flex-col gap-4">
          {navLinks.map((link, index) => (
            <li key={link.id} className="w-full text-center">
              <Link
                href={link.href}
                onClick={() => {
                  document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
                  onClose();
                }}
                aria-current={activeSection === link.id ? 'true' : undefined}
                className={`text-xl transition-colors duration-300 ${
                  activeSection === link.id ? 'text-orange' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
              {index < navLinks.length - 1 && <div className="border-gray mt-3 w-full border-t" />}
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <LanguageButton locale={locale} isMobile activeSection={activeSection} />
        </div>
      </nav>
    </div>
  );
};

export default MobileNavBar;
