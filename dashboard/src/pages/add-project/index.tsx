/* eslint-disable @typescript-eslint/no-explicit-any */
import { CustomInput } from '@/components/shared/form/custom-input';
import { MultiSelect } from '@/components/shared/form/multi-select';
import { RichTextEditor } from '@/components/shared/form/rich-text-editor';
import { Button } from '@/components/ui/button';
import { FormEvent, useState } from 'react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

export default function AddProjectPage() {
  const [description, setDescription] = useState('');
  const [technologies, setTechnologies] = useState<string[]>([]);

  // handlers
  const onDescriptionChange = (content: string) => setDescription(content);

  const onAddProject = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const toastId = toast.loading('Adding New Project');
    try {
      if (!description) throw new Error('Description is required');
      if (!technologies.length) throw new Error('Technologies is required');
    } catch (err: any) {
      toast.error(err.message, { id: toastId });
    }
  };

  return (
    <main className="py-12">
      <section
        className={cn(
          'container',
          'max-w-[600px] rounded-md bg-white p-6 shadow',
        )}
      >
        <h3 className="mb-6 text-xl font-semibold">Add New Project</h3>
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

          <MultiSelect
            label="Technologies"
            placeholder="Enter Technologies"
            value={technologies}
            setValue={setTechnologies}
          />

          <CustomInput
            label="Client Side Url"
            name="client"
            placeholder="Enter Client Side Url"
            required
          />

          <CustomInput
            label="Server Side Url"
            name="server"
            placeholder="Enter Server Side Url"
            required
          />

          <CustomInput
            label="Live Site Url"
            name="server"
            placeholder="Enter Live Side Url"
            required
          />
          <Button>Add Project</Button>
        </form>
      </section>
    </main>
  );
}
