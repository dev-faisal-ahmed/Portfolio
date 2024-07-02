import { getExperiences } from '@/app/_api-helper/get-experiences';
import { Heading } from '@/components/shared/heading';

export async function Experiences() {
  const experiences = await getExperiences();

  if (!experiences || !experiences.length) return null;

  return (
    <>
      <Heading className="mt-16">Experiences.</Heading>
      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {experiences.map(({ organizationName, designation, duration, _id }) => (
          <div
            key={_id}
            className="flex cursor-pointer flex-col rounded-2xl bg-neutral-800 p-6 transition hover:shadow-[0_0_20px_5px_#159763]"
          >
            <h3 className="text-primary">{duration}</h3>
            <h4 className="mb-1 mt-3 text-lg font-semibold">{designation}</h4>
            <p className="mb-3 text-xs text-white/60">{organizationName}</p>
          </div>
        ))}
      </div>
    </>
  );
}
