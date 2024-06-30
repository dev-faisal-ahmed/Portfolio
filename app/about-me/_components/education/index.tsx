import { Heading } from '@/shared/heading';
import { educations } from './education.data';

export function Education() {
  return (
    <>
      <Heading className="mt-16">Education.</Heading>
      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {educations.map(
          ({ degreeName, institution, obtainedCgpa, totalCgpa, year }) => (
            <div
              key={degreeName}
              className="flex cursor-pointer flex-col rounded-2xl bg-neutral-800 p-6 transition hover:shadow-[0_0_20px_5px_#159763]"
            >
              <h3 className="text-primary">{year}</h3>
              <h4 className="mb-1 mt-3 text-lg font-semibold">{degreeName}</h4>
              <p className="mb-3 text-xs text-white/60">{institution}</p>
              <h2 className="mt-auto">
                CGPA / GPA :{' '}
                <span className="text-primary">{obtainedCgpa}</span> of{' '}
                {totalCgpa}
              </h2>
            </div>
          ),
        )}
      </div>
    </>
  );
}
