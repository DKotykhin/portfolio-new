import { IoClose } from 'react-icons/io5';
import { LanguageButton } from './LanguageButton';
import Link from 'next/link';

const MobileNavBar = ({
  isOpen,
  onClose,
  navLinks,
  locale,
}: {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { name: string; href: string; id: string }[];
  locale: string;
}) => {
  return (
    <div className="md:hidden">
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-70' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      <nav
        className={`${isOpen ? 'translate-y-0' : '-translate-y-full'} absolute top-0 left-0 w-full bg-background p-4 flex flex-col z-50 items-center transition-transform duration-300`}
      >
        <button onClick={onClose} aria-label="Close menu" className="self-end">
          <IoClose size={24} className="text-white" />
        </button>
        <ul className="flex flex-col gap-4">
          {navLinks.map((link, index) => (
            <li key={link.id} className="w-full text-center">
              <Link href={link.href} onClick={onClose} className="text-white text-xl">
                {link.name}
              </Link>
              {index < navLinks.length - 1 && <div className="border-t border-gray w-full mt-3" />}
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <LanguageButton locale={locale} />
        </div>
      </nav>
    </div>
  );
};

export default MobileNavBar;
