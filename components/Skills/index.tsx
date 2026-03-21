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
      <div className="px-4 md:px-8 max-w-308 mx-auto pb-10">
        <SectionTitle title={t('title')} />
        <div className="flex flex-col gap-10">
          {categories.map(({ label, skills }) => (
            <div key={label}>
              <p className="text-antiqueWhite mb-4 text-xl font-bold text-center lg:text-left">{label}</p>
              <div className="flex flex-wrap gap-5 items-center justify-center lg:justify-start">
                {skills.map(skill => (
                  <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
                ))}
              </div>
              {/* <div className="border-t border-lightGrey mt-10" /> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
