import { Loader } from '@/components/shared/loader';
import { Parsed } from '@/components/shared/parsed/parsed';
import { cn } from '@/lib/utils';
import { useGetBlogDetailsQuery } from '@/redux/api/blog-api';
import { useParams } from 'react-router-dom';

export default function BlogDetails() {
  const { blogId } = useParams();
  const { data: blogData, isLoading } = useGetBlogDetailsQuery(blogId!);

  if (isLoading)
    return (
      <div className="flex w-full items-center justify-center p-6">
        <Loader />
      </div>
    );

  if (!blogData?.data) return <p className="mt-6">Blog not found</p>;

  return (
    <main className={cn('container', 'max-w-[900px] py-6')}>
      <img className="rounded-2xl" src={blogData.data.image} />
      <div className="mt-6 flex items-center gap-3">
        {blogData.data.tags.map((tag) => (
          <p
            key={tag}
            className="rounded-md bg-neutral-500 px-3 py-1 text-xs text-white"
          >
            {tag}
          </p>
        ))}
      </div>
      <h1 className="mb-8 mt-6 text-2xl font-semibold">
        {blogData.data.title}
      </h1>
      <Parsed data={blogData.data.content} />
    </main>
  );
}
