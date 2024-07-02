/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Dialog from '@/components/ui/dialog';
import { useDeleteProjectMutation } from '@/redux/api/project-api';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { toast } from 'sonner';
import { RiDeleteBin7Fill } from 'react-icons/ri';

type TProps = {
  projectId: string;
};

export function DeleteProject({ projectId }: TProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [deleteProject] = useDeleteProjectMutation();

  const onDeleteProject = async () => {
    const toastId = toast.loading('Deleting Project');

    try {
      const response = await deleteProject(projectId).unwrap();
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
          <Button onClick={onDeleteProject} variant={'destructive'}>
            Delete
          </Button>
        </div>
      </Dialog.DialogContent>
    </Dialog.Dialog>
  );
}
