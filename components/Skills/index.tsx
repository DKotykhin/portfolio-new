import { getTranslations } from 'next-intl/server';

import { SectionTitle } from '../SectionTitle';
import { SkillCard } from './SkillCard';
import { frontendSkills, backendSkills, databaseSkills, otherSkills } from './skillData';

export const Skills = async () => {
  const t = await getTranslations('Skills');

  const categories = [
    { label: t('frontend'), skills: frontendSkills },
    { label: t('backend'), skills: backendSkills },
    { label: t('database'), skills: databaseSkills },
    { label: t('other'), skills: otherSkills },
  ];

  return (
    <section id="skills" className="bg-background scroll-mt-16">
      <div className="mx-auto max-w-308 px-4 pb-10 md:px-8">
        <SectionTitle title={t('title')} />
        <div className="flex flex-col gap-10">
          {categories.map(({ label, skills }) => (
            <div key={label}>
              <p className="text-antiqueWhite mb-4 text-center text-xl font-bold lg:text-left">{label}</p>
              <div className="flex flex-wrap items-center justify-center gap-5 lg:justify-start">
                {skills.map(skill => (
                  <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
