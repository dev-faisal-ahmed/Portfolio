/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Dialog from '@/components/ui/dialog';
import { CustomInput } from '@/components/shared/form/custom-input';
import { CustomSelect } from '@/components/shared/form/custom-select';
import { Button } from '@/components/ui/button';
import { skillStatues, skillTypes } from '@/data/constants';
import { useAddSkillMutation } from '@/redux/api/skill-api';
import { TSkillStatus, TSkillType } from '@/utils/types';
import { FormEvent, useState } from 'react';
import { toast } from 'sonner';

export function AddSkill() {
  const [type, setType] = useState<string>();
  const [status, setStatus] = useState<string>();
  const [isOpen, setIsOpen] = useState(false);
  const [addSkill] = useAddSkillMutation();

  const onAddSkill = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement & {
      name: { value: string };
      icon: { value: string };
    };

    const name = form.name.value;
    const icon = form.icon.value;

    const toastId = toast.loading('Adding skills');

    console.log(type);
    try {
      if (!type) throw new Error('Skill Type is required');
      if (!status) throw new Error('Skill Status is required');
      const response = await addSkill({
        name,
        type: type as TSkillType,
        status: status as TSkillStatus,
        icon,
      }).unwrap();

      console.log(response);
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
        <Button>Add Skill</Button>
      </Dialog.DialogTrigger>
      <Dialog.DialogContent className="max-h-[80vh] overflow-y-auto">
        <Dialog.DialogHeader>
          <Dialog.DialogTitle>Add Skill</Dialog.DialogTitle>
        </Dialog.DialogHeader>
        <form onSubmit={onAddSkill} className="flex flex-col gap-3">
          <CustomInput
            name="name"
            placeholder="Name of the skill"
            label="Skill Name"
            required
          />
          <CustomSelect
            label="Skill Type"
            placeholder="Select Skill Type"
            value={type}
            onValueChange={(type) => setType(type)}
            options={skillTypes}
            required
          />
          <CustomSelect
            label="Status"
            placeholder="Select Skill Status"
            value={status}
            onValueChange={(status) => setStatus(status)}
            options={skillStatues}
            required
          />
          <CustomInput
            name="icon"
            placeholder="Input Icon Name From React-Icons"
            label="Icon"
            required
          />
          <Button className="mt-3">Add Skill</Button>
        </form>
      </Dialog.DialogContent>
    </Dialog.Dialog>
  );
}
