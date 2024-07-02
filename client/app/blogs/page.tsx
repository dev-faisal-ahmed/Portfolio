import { Heading } from '@/components/shared/heading';
import { getBlogs } from '../_api-helper/get-blogs';
import Image from 'next/image';
import Link from 'next/link';

export default async function BlogPage() {
  const blogs = await getBlogs();

  if (!blogs || !blogs.length)
    return <p className="mt-12 text-center font-semibold">No Blog Found</p>;

  return (
    <main className="container py-12">
      <Heading>Blogs.</Heading>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map(({ _id, content, tags, title, image }) => (
          <div
            key={_id}
            className="overflow-hidden rounded-2xl bg-neutral-800/40 p-4 ring-1 ring-white/50 transition duration-300 hover:translate-y-1"
          >
            <Image
              className="h-[250px] rounded-xl object-cover object-center"
              src={image}
              width={500}
              height={500}
              alt="Project Image"
            />

            <div className="mt-6 flex flex-wrap gap-3">
              {tags.map((tag) => (
                <span
                  className="flex-1 whitespace-nowrap rounded-full bg-neutral-600 px-3 py-1 text-center text-xs font-semibold"
                  key={tag}
                >
                  {tag}
                </span>
              ))}
            </div>
            <Link href={`/blog/${_id}`}>
              <h3 className="mt-6 line-clamp-1 text-xl hover:text-primary hover:underline">
                {title}
              </h3>
            </Link>
            <div
              className="mt-6 line-clamp-3 text-sm text-neutral-400"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
