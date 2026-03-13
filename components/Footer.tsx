import Link from 'next/link';
import { CiLinkedin } from 'react-icons/ci';
import { FaTelegramPlane, FaGithub } from 'react-icons/fa';

const links = {
  linkedin: 'https://www.linkedin.com/in/dmytro-kotykhin-4683151b',
  telegram: 'https://t.me/Dmytro_Kotykhin',
  github: 'https://github.com/DKotykhin',
};

export const Footer = () => {
  return (
    <footer className="w-full flex flex-col justify-center items-center gap-4 px-4 py-6 md:py-8 bg-background">
      <div className="w-full flex justify-center items-center gap-12">
        <Link href={links.linkedin} target="_blank" rel="noopener noreferrer">
          <CiLinkedin
            color="#faebd7"
            className="cursor-pointer hover:scale-110 transition-transform duration-300 text-[36px] md:text-[48px]"
          />
        </Link>
        <Link href={links.telegram} target="_blank" rel="noopener noreferrer">
          <FaTelegramPlane
            color="#faebd7"
            className="cursor-pointer hover:scale-110 transition-transform duration-300 text-[36px] md:text-[48px]"
          />
        </Link>
        <Link href={links.github} target="_blank" rel="noopener noreferrer">
          <FaGithub
            color="#faebd7"
            className="cursor-pointer hover:scale-110 transition-transform duration-300 text-[36px] md:text-[48px]"
          />
        </Link>
      </div>
      <p className="text-antiqueWhite text-center">
        &copy; {new Date().getFullYear()} Dmytro Kotykhin. All rights reserved.
      </p>
    </footer>
  );
};
