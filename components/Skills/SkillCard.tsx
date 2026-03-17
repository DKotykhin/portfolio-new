import Image from 'next/image';

interface SkillCardProps {
  name: string;
  icon: string;
}

const cardClassName = [
  'relative bg-grey max-w-32 w-full',
  "before:content-[''] before:absolute before:top-0 before:right-0",
  'before:w-6 before:h-10 before:border-t-2 before:border-r-2 before:border-orange',
  'hover:before:w-full hover:before:h-full before:transition-all before:duration-300',
  "after:content-[''] after:absolute after:bottom-0 after:left-0",
  'after:w-6 after:h-10 after:border-b-2 after:border-l-2 after:border-orange',
  'hover:after:w-full hover:after:h-full after:transition-all after:duration-300',
].join(' ');

export const SkillCard = ({ name, icon }: SkillCardProps) => (
  <div className={cardClassName}>
    <div className="flex flex-col items-center gap-2 p-4">
      <Image src={icon} alt={name} width={64} height={64} sizes="64px" />
      <span className="text-antiqueWhite">{name}</span>
    </div>
  </div>
);
