/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Dialog from '@/components/ui/dialog';
import { useUpdateSkillMutation } from '@/redux/api/skill-api';
import { CustomInput } from '@/components/shared/form/custom-input';
import { CustomSelect } from '@/components/shared/form/custom-select';
import { Button } from '@/components/ui/button';
import { skillStatues, skillTypes } from '@/data/constants';
import { TSkill, TSkillStatus, TSkillType } from '@/utils/types';
import { FormEvent, useState } from 'react';
import { toast } from 'sonner';

export function UpdateSkill({ _id, icon, name, status, type }: TSkill) {
  const [newType, setNewType] = useState<string>(type);
  const [newStatus, setNewStatus] = useState<string>(status);
  const [isOpen, setIsOpen] = useState(false);
  const [updateSkill] = useUpdateSkillMutation();

  const onAddSkill = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement & {
      name: { value: string };
      icon: { value: string };
    };

    const name = form.name.value;
    const icon = form.icon.value;

    const toastId = toast.loading('Adding skills');

    try {
      if (!newType) throw new Error('Skill Type is required');
      if (!newStatus) throw new Error('Skill Status is required');
      const response = await updateSkill({
        skillId: _id,
        data: {
          name,
          type: newType as TSkillType,
          status: newStatus as TSkillStatus,
          icon,
        },
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
        <Button variant={'secondary'}>Update Skill</Button>
      </Dialog.DialogTrigger>
      <Dialog.DialogContent className="max-h-[80vh] overflow-y-auto">
        <Dialog.DialogHeader>
          <Dialog.DialogTitle>Add Skill</Dialog.DialogTitle>
        </Dialog.DialogHeader>
        <form onSubmit={onAddSkill} className="flex flex-col gap-3">
          <CustomInput
            name="name"
            defaultValue={name}
            placeholder="Name of the skill"
            label="Skill Name"
            required
          />
          <CustomSelect
            label="Skill Type"
            placeholder="Select Skill Type"
            value={newType}
            onValueChange={(type) => setNewType(type)}
            options={skillTypes}
            required
          />
          <CustomSelect
            label="Status"
            placeholder="Select Skill Status"
            value={newStatus}
            onValueChange={(status) => setNewStatus(status)}
            options={skillStatues}
            required
          />
          <CustomInput
            name="icon"
            defaultValue={icon}
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
