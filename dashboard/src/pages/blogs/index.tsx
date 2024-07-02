import { Heading } from '@/components/shared/heading';
import { Loader } from '@/components/shared/loader';
import { Button } from '@/components/ui/button';
import { useGetBlogsQuery } from '@/redux/api/blog-api';
import { Link } from 'react-router-dom';
import { AiFillEdit } from 'react-icons/ai';

export default function BlogsPage() {
  const { data: blogsData, isLoading, isFetching } = useGetBlogsQuery(null);

  if (isLoading || isFetching)
    return (
      <div className="flex w-full items-center justify-center p-6">
        <Loader />
      </div>
    );

  console.log(blogsData);

  return (
    <main className="container py-6">
      <div className="mb-6 flex items-center justify-between gap-6">
        <Heading>Blogs.</Heading>
        <Link to={'/create-blog'}>
          <Button>Create Blog</Button>
        </Link>
      </div>
      {blogsData?.data && blogsData.data.length ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {blogsData.data.map((blog) => (
            <div
              className="overflow-hidden rounded-2xl bg-white"
              key={blog._id}
            >
              <img className="shadow" src={blog.image} />
              <div className="p-4">
                <div className="flex flex-wrap items-center gap-3">
                  {blog.tags.map((tag) => (
                    <p className="whitespace-nowrap rounded-xl bg-neutral-500 px-3 py-1 text-center text-xs text-white">
                      {tag}
                    </p>
                  ))}
                </div>
                <div className="flex items-center justify-between gap-8">
                  <Link
                    to={`/blog/${blog._id}`}
                    className="mt-6 block truncate text-xl font-semibold tracking-wider hover:text-blue-600 hover:underline"
                  >
                    {blog.title}
                  </Link>

                  <Link
                    to={`/update-blog/${blog._id}`}
                    className="mt-6 block text-xl font-semibold tracking-wider hover:text-blue-600 hover:underline"
                  >
                    <AiFillEdit />
                  </Link>
                </div>

                <div
                  className="mt-3 line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-6 text-center font-semibold">No Blogs Found</p>
      )}
    </main>
  );
}
