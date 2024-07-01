/* eslint-disable @typescript-eslint/no-explicit-any */
import { CustomInput } from '@/components/shared/form/custom-input';
import { MultiSelect } from '@/components/shared/form/multi-select';
import { RichTextEditor } from '@/components/shared/form/rich-text-editor';
import { Button } from '@/components/ui/button';
import { FormEvent, useState } from 'react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';
import { useCreateBlogMutation } from '@/redux/api/blog-api';

export default function CreateBlogPage() {
  const [content, setContent] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [createBlog] = useCreateBlogMutation();
  const navigate = useNavigate();

  // handlers
  const onContentChange = (content: string) => setContent(content);

  const onAddProject = async (event: FormEvent<HTMLFormElement>) => {
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

      const response = await createBlog({
        title,
        image,
        content,
        tags,
      }).unwrap();

      if (!response.ok) throw Error(response.message);
      toast.success(response.message, { id: toastId });
      form.reset();

      navigate('/blogs');
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
        <h3 className="mb-6 text-xl font-semibold">Create New Blog</h3>
        <form onSubmit={onAddProject} className="flex flex-col gap-3">
          <CustomInput
            label="Title"
            name="title"
            placeholder="Enter Title"
            required
          />

          <CustomInput
            label="Image"
            name="image"
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

          <Button className="mt-3">Add Project</Button>
        </form>
      </section>
    </main>
  );
}
