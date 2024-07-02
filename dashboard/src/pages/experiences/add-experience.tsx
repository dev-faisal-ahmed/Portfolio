/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Dialog from '@/components/ui/dialog';
import { CustomInput } from '@/components/shared/form/custom-input';
import { Button } from '@/components/ui/button';
import { FormEvent, useState } from 'react';
import { toast } from 'sonner';
import { CustomTextArea } from '@/components/shared/form/custom-text-area';
import { useAddExperienceMutation } from '@/redux/api/experience-api';

export function AddExperience() {
  const [isOpen, setIsOpen] = useState(false);
  const [addExperience] = useAddExperienceMutation();

  const onAddExperience = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement & {
      organizationName: { value: string };
      designation: { value: string };
      description: { value: string };
      duration: { value: string };
    };

    const organizationName = form.organizationName.value.trim();
    const designation = form.designation.value.trim();
    const description = form.description.value.trim();
    const duration = form.duration.value.trim();

    const toastId = toast.loading('Adding Experience...!');

    try {
      const response = await addExperience({
        organizationName,
        designation,
        description,
        duration,
      }).unwrap();

      if (!response.ok) throw new Error(response.message);
      toast.success(response.message, { id: toastId });
      form.reset();
      setIsOpen(false);
    } catch (err: any) {
      toast.error(err?.message, { id: toastId });
    }
  };

  return (
    <Dialog.Dialog open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.DialogTrigger asChild>
        <Button>Add Experience</Button>
      </Dialog.DialogTrigger>
      <Dialog.DialogContent className="max-h-[80vh] overflow-y-auto">
        <Dialog.DialogHeader>
          <Dialog.DialogTitle>Add Skill</Dialog.DialogTitle>
        </Dialog.DialogHeader>
        <form onSubmit={onAddExperience} className="flex flex-col gap-3">
          <CustomInput
            name="organizationName"
            placeholder="Name of the organization"
            label="Organization Name"
            required
          />
          <CustomInput
            name="designation"
            placeholder="Input Designation"
            label="Designation"
            required
          />
          <CustomInput
            name="duration"
            placeholder="Input when you started and quit"
            label="Duration"
            required
          />
          <CustomTextArea
            name="description"
            placeholder="Write down your role"
            label="Description"
            rows={4}
            required
          />
          <Button className="mt-3">Add Skill</Button>
        </form>
      </Dialog.DialogContent>
    </Dialog.Dialog>
  );
}
