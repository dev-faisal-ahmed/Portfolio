/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Dialog from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { toast } from 'sonner';
import { useDeleteExperienceMutation } from '@/redux/api/experience-api';
import { RiDeleteBin7Fill } from 'react-icons/ri';

type TProps = {
  experienceId: string;
};

export function DeleteExperience({ experienceId }: TProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [deleteExperience] = useDeleteExperienceMutation();

  const onDeleteSkill = async () => {
    const toastId = toast.loading('Deleting Experience...!');

    try {
      const response = await deleteExperience(experienceId).unwrap();
      if (!response.ok) throw new Error(response.message);
      toast.success(response.message, { id: toastId });

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
          <RiDeleteBin7Fill size={20} />
        </Button>
      </Dialog.DialogTrigger>
      <Dialog.DialogContent className="max-h-[80vh] overflow-y-auto">
        <Dialog.DialogHeader>
          <Dialog.DialogTitle>Are You Sure?</Dialog.DialogTitle>
        </Dialog.DialogHeader>
        <div className="flex justify-end gap-3">
          <Dialog.DialogClose asChild>
            <Button variant={'outline'}>Cancel</Button>
          </Dialog.DialogClose>
          <Button onClick={onDeleteSkill} variant={'destructive'}>
            Delete
          </Button>
        </div>
      </Dialog.DialogContent>
    </Dialog.Dialog>
  );
}
