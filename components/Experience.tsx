import { getTranslations } from 'next-intl/server';
import { LiaHandPointRight } from 'react-icons/lia';

import { jobs_experience } from '@/constants';
import { PdfModal } from './PdfModal';
import { SectionTitle } from './SectionTitle';

export const Experience = async () => {
  const t = await getTranslations('Experience');

  return (
    <section id="experience" className="bg-grey scroll-mt-16">
      <div className="mx-auto max-w-308 px-4 pb-10 md:px-8">
        <SectionTitle title={t('title')} />
        <div className="space-y-10">
          {jobs_experience.map((job, index) => (
            <div key={index}>
              <p className="mb-2 text-2xl font-semibold">
                {job.company_url ? (
                  <a
                    href={job.company_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange hover:underline"
                  >
                    {job.company}
                  </a>
                ) : (
                  <span className="text-orange">{job.company}</span>
                )}
              </p>
              <p className="text-antiqueWhite text-xl">{t(job.position)}</p>
              <p className="text-antiqueWhite text-lg">{job.period}</p>
              <div className="mt-2 md:text-lg">
                <p className="text-antiqueWhite mb-1 font-medium whitespace-nowrap">{t('tech_stack')}:</p>
                <div>
                  <div className="flex flex-wrap gap-x-2">
                    {job.tech_stack_frontend && <p className="underline">{t('frontend')}:</p>}
                    {job.tech_stack_frontend &&
                      job.tech_stack_frontend.map((tech, index) => (
                        <div key={tech} className="flex items-center gap-2">
                          {index !== 0 && <span className="bg-lightGray h-1 w-1 rounded-full" />}
                          <span>{tech}</span>
                        </div>
                      ))}
                  </div>
                  <div className="mt-1 flex flex-wrap gap-x-2">
                    {job.tech_stack_backend && <p className="underline">{t('backend')}:</p>}
                    {job.tech_stack_backend &&
                      job.tech_stack_backend.map((tech, index) => (
                        <div key={tech} className="flex items-center gap-2">
                          {index !== 0 && <span className="bg-lightGray h-1 w-1 rounded-full" />}
                          <span>{tech}</span>
                        </div>
                      ))}
                  </div>
                  <div className="mt-1 flex flex-wrap gap-x-2">
                    {job.tech_stack_database && <p className="underline">{t('database')}:</p>}
                    {job.tech_stack_database &&
                      job.tech_stack_database.map((tech, index) => (
                        <div key={tech} className="flex items-center gap-2">
                          {index !== 0 && <span className="bg-lightGray h-1 w-1 rounded-full" />}
                          <span>{tech}</span>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
              <div className="mt-2 md:text-lg">
                <p className="text-antiqueWhite mb-1 font-medium whitespace-nowrap">{t('results')}:</p>
                <ul className="list-inside list-disc">
                  {(t.raw(`job_${index + 1}.results`) as string[]).map((result, resultIndex) => (
                    <li key={resultIndex}>{result}</li>
                  ))}
                </ul>
              </div>
              {job.recommendation_link && (
                <div className="mt-2 md:text-lg">
                  <p className="text-antiqueWhite mb-1 font-medium whitespace-nowrap">{t('recommendations')}:</p>
                  <div className="flex gap-3">
                    <LiaHandPointRight size={20} className="text-orange mt-1 shrink-0" />
                    <PdfModal
                      label={t('view_recommendation')}
                      src={job.recommendation_link}
                      triggerClassName="text-orange hover:underline"
                    />
                  </div>
                </div>
              )}
              {job.examples && job.examples.length > 0 && (
                <div className="mt-2 md:text-lg">
                  <p className="text-antiqueWhite mb-1 font-medium whitespace-nowrap">{t('examples')}:</p>
                  <ul className="text-orange list-inside list-disc">
                    {job.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex}>
                        <a href={example} target="_blank" rel="noopener noreferrer" className="hover:underline">
                          {example}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
