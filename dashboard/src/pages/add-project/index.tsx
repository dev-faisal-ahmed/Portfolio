/* eslint-disable @typescript-eslint/no-explicit-any */
import { CustomInput } from '@/components/shared/form/custom-input';
import { MultiSelect } from '@/components/shared/form/multi-select';
import { RichTextEditor } from '@/components/shared/form/rich-text-editor';
import { useAddProjectMutation } from '@/redux/api/project-api';
import { Button } from '@/components/ui/button';
import { FormEvent, useState } from 'react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';

export default function AddProjectPage() {
  const [description, setDescription] = useState('');
  const [technologies, setTechnologies] = useState<string[]>([]);
  const [addProject] = useAddProjectMutation();
  const navigate = useNavigate();

  // handlers
  const onDescriptionChange = (content: string) => setDescription(content);

  const onAddProject = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement & {
      name: { value: string };
      coverUrl: { value: string };
      client: { value: string };
      server: { value: string };
      live: { value: string };
      priority: { value: string };
    };

    const name = form.name.value.trim();
    const coverUrl = form.coverUrl.value.trim();
    const client = form.client.value.trim();
    const server = form.server.value.trim();
    const live = form.live.value.trim();
    const priority = form.priority.value;

    const toastId = toast.loading('Adding New Project');
    try {
      if (!description) throw new Error('Description is required');
      if (!technologies.length) throw new Error('Technologies is required');

      const response = await addProject({
        name,
        coverUrl,
        description,
        links: { client, server, live },
        priority: Number(priority),
        technologies,
      }).unwrap();

      if (!response.ok) throw Error(response.message);
      toast.success(response.message, { id: toastId });
      form.reset();
      setTechnologies([]);
      navigate('/projects');
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
            name="live"
            placeholder="Enter Live Side Url"
            required
          />

          <CustomInput
            label="Priority"
            name="priority"
            placeholder="Enter Project Priority"
            type="number"
            required
          />
          <Button>Add Project</Button>
        </form>
      </section>
    </main>
  );
}
