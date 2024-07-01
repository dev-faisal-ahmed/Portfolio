import { CustomInput } from '@/components/shared/form/custom-input';
import { RichTextEditor } from '@/components/shared/form/rich-text-editor';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { FormEvent, useState } from 'react';

export default function AddProjectPage() {
  const [description, setDescription] = useState('');

  // handlers
  const onDescriptionChange = (content: string) => setDescription(content);

  const onAddProject = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(description);
  };

  return (
    <section
      className={cn(
        'container',
        'my-12 max-w-[600px] rounded-md bg-white p-6 shadow',
      )}
    >
      <h3 className="mb-6 text-xl font-semibold">Add Project</h3>
      <form onSubmit={onAddProject} className="flex flex-col gap-3">
        <CustomInput
          label="Project Name"
          name="name"
          placeholder="Enter Project Name"
          required
        />

        <CustomInput
          label="Cover Image"
          name="coverUrl"
          placeholder="Enter Project Cover Image Url"
          required
        />
        <RichTextEditor
          content={description}
          label="Description"
          onChange={onDescriptionChange}
        />
        <Button>Add Project</Button>
      </form>
    </section>
  );
}
