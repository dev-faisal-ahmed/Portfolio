/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Dialog from '@/components/ui/dialog';
import { CustomInput } from '@/components/shared/form/custom-input';
import { Button } from '@/components/ui/button';
import { TExperience } from '@/utils/types';
import { FormEvent, useState } from 'react';
import { useUpdateExperienceMutation } from '@/redux/api/experience-api';
import { CustomTextArea } from '@/components/shared/form/custom-text-area';
import { RiEditFill } from 'react-icons/ri';
import { toast } from 'sonner';

export function UpdateExperience({
  _id,
  organizationName,
  description,
  designation,
  duration,
}: TExperience) {
  const [isOpen, setIsOpen] = useState(false);
  const [updateExperience] = useUpdateExperienceMutation();

  const onAddSkill = async (event: FormEvent<HTMLFormElement>) => {
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

    const toastId = toast.loading('Updating Experience');

    try {
      const response = await updateExperience({
        experienceId: _id,
        payload: {
          organizationName,
          designation,
          description,
          duration,
        },
      }).unwrap();

      if (!response.ok) throw new Error(response.message);
      toast.success(response.message, { id: toastId });

      form.reset();
      setIsOpen(false);
    } catch (err: any) {
      if (err.message) return toast.error(err.message, { id: toastId });
      toast.error(err.data?.message || 'Something went wrong', {
        id: toastId,
      });
    }
  };

  return (
    <Dialog.Dialog open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.DialogTrigger asChild>
        <Button size={'icon'} variant={'outline'}>
          <RiEditFill size={20} />
        </Button>
      </Dialog.DialogTrigger>
      <Dialog.DialogContent className="max-h-[80vh] overflow-y-auto">
        <Dialog.DialogHeader>
          <Dialog.DialogTitle>Add Skill</Dialog.DialogTitle>
        </Dialog.DialogHeader>
        <form onSubmit={onAddSkill} className="flex flex-col gap-3">
          <CustomInput
            name="organizationName"
            defaultValue={organizationName}
            placeholder="Name of the organization"
            label="Organization Name"
            required
          />
          <CustomInput
            name="designation"
            defaultValue={designation}
            placeholder="Input Designation"
            label="Designation"
            required
          />
          <CustomInput
            name="duration"
            defaultValue={duration}
            placeholder="Input when you started and quit"
            label="Duration"
            required
          />
          <CustomTextArea
            defaultValue={description}
            name="description"
            placeholder="Write down your role"
            label="Description"
            rows={4}
            required
          />
          <Button className="mt-3">Update Experience</Button>
        </form>
      </Dialog.DialogContent>
    </Dialog.Dialog>
  );
}
