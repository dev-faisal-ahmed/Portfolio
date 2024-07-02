/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useGetBlogDetailsQuery,
  useUpdateBlogMutation,
} from '@/redux/api/blog-api';
import { CustomInput } from '@/components/shared/form/custom-input';
import { MultiSelect } from '@/components/shared/form/multi-select';
import { RichTextEditor } from '@/components/shared/form/rich-text-editor';
import { Button } from '@/components/ui/button';
import { FormEvent, useState } from 'react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import { useNavigate, useParams } from 'react-router-dom';
import { Loader } from '@/components/shared/loader';

export default function UpdateBlogPage() {
  const { blogId } = useParams();
  const { data: blogDetails, isLoading } = useGetBlogDetailsQuery(blogId!);
  const [content, setContent] = useState(blogDetails?.data?.content || '');
  const [tags, setTags] = useState<string[]>(blogDetails?.data?.tags || []);
  const [updateBlog] = useUpdateBlogMutation();
  const navigate = useNavigate();

  if (isLoading)
    return (
      <div className="flex w-full items-center justify-center p-6">
        <Loader />
      </div>
    );

  if (!blogDetails?.data)
    return <p className="mt-6 text-center font-semibold">No Blog Found</p>;

  // handlers
  const onContentChange = (content: string) => setContent(content);

  const onProjectUpdate = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement & {
      title: { value: string };
      image: { value: string };
    };

    const title = form.title.value.trim();
    const image = form.image.value.trim();

    const toastId = toast.loading('Creating the blog');
    try {
      if (!content) throw new Error('Description is required');
      if (!tags.length) throw new Error('Technologies is required');

      const response = await updateBlog({
        blogId: blogId!,
        payload: { title, image, content, tags },
      }).unwrap();

      if (!response.ok) throw Error(response.message);
      toast.success(response.message, { id: toastId });
      form.reset();

      navigate(`/blog/${blogId}`);
    } catch (err: any) {
      if (err.message) return toast.error(err.message, { id: toastId });
      toast.error(err.data?.message || 'Something went wrong', { id: toastId });
    }
  };

  return (
    <main className="py-12">
      <section
        className={cn(
          'container',
          'max-w-[800px] rounded-md bg-white p-6 shadow',
        )}
      >
        <h3 className="mb-6 text-xl font-semibold">Update Blog</h3>
        <form onSubmit={onProjectUpdate} className="flex flex-col gap-3">
          <CustomInput
            label="Title"
            name="title"
            defaultValue={blogDetails.data.title}
            placeholder="Enter Title"
            required
          />

          <CustomInput
            label="Image"
            name="image"
            defaultValue={blogDetails.data.image}
            placeholder="Enter Image Url"
            required
          />

          <RichTextEditor
            content={content}
            label="Contents"
            onChange={onContentChange}
          />

          <MultiSelect
            label="Tags"
            placeholder="Enter Tags"
            value={tags}
            setValue={setTags}
          />

          <Button className="mt-3">Update Blog</Button>
        </form>
      </section>
    </main>
  );
}
