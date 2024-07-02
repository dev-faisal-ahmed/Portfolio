import { getBlogDetails } from '@/app/_api-helper/get-blog-details';
import { Parsed } from '@/components/shared/parsed/parsed';
import { cn } from '@/lib/utils';
import Image from 'next/image';

type TProps = {
  params: { blogId: string };
};

export default async function BlogDetailsPage({ params: { blogId } }: TProps) {
  const blogDetails = await getBlogDetails(blogId);

  if (!blogDetails)
    return <p className="mt-12 text-center font-semibold">No Blog Found</p>;

  return (
    <main className={cn('container', 'w-full max-w-[900px] py-6')}>
      <Image
        width={700}
        height={700}
        alt="blog image"
        className="w-full rounded-2xl"
        src={blogDetails.image}
      />
      <div className="mt-6 flex flex-wrap items-center gap-3">
        {blogDetails.tags.map((tag) => (
          <p
            key={tag}
            className="rounded-md bg-neutral-500 px-3 py-1 text-xs text-white"
          >
            {tag}
          </p>
        ))}
      </div>
      <h1 className="mb-8 mt-6 text-2xl font-semibold">{blogDetails.title}</h1>
      <Parsed className="text-justify" data={blogDetails.content} />
    </main>
  );
}
