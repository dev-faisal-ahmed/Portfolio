'use client';

import { FormEvent, useState } from 'react';
import { IoMdSend } from 'react-icons/io';
import { toast } from 'sonner';
import { CustomInput } from '@/components/shared/form/custom-input';
import { CustomTextArea } from '@/components/shared/form/custom-text-area';
import { Button } from '@/components/ui/button';
import { sendEmail } from '../_actions/send-email';

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const onEmailSubmission = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement & {
      email: { value: string };
      name: { value: string };
      subject: { value: string };
      message: { value: string };
    };

    const email = form.email.value.trim();
    const name = form.name.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    if (name === '') return toast.error('Name can not be empty');
    else if (subject === '') return toast.error('Subject can not be empty');
    else if (message === '') return toast.error('Message can not be empty');

    const toastId = toast.loading('Sending Message ...');

    try {
      setLoading(true);
      const response = await sendEmail({ email, message, subject, name });
      if (!response.ok) throw new Error(response.message);

      toast.success(response.message, { id: toastId });
    } catch (err: any) {
      toast.error(err.message, { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact" className="mb-20 mt-12 bg-gradient-to-tr">
      <h2 className="text-center text-4xl font-semibold">Contact</h2>
      <p className="mx-auto mt-5 text-center text-white/60 md:max-w-[400px]">
        If you have any query fell free to reach out to me.
      </p>
      <div className="mx-auto mt-16 w-full max-w-[550px] rounded-md border border-white/20 p-5 ring-1 ring-white/30">
        <form className="space-y-5" onSubmit={onEmailSubmission}>
          <div className="flex w-full flex-col items-center gap-5 md:flex-row">
            <CustomInput
              label="Email"
              name="email"
              placeholder="Enter Your Email"
              type="email"
            />
            <CustomInput
              label="Your Name"
              name="name"
              placeholder="Enter Your Name"
              type="text"
            />
          </div>
          <CustomInput
            label="Subject"
            name="subject"
            placeholder="Subject"
            type="text"
          />

          <CustomTextArea
            label="Message"
            placeholder="Enter Your Message"
            name="message"
            rows={4}
            required
          />

          <Button
            className="ml-auto flex items-center gap-2 text-neutral-800"
            disabled={loading}
          >
            Send
            <IoMdSend size={20} />
          </Button>
        </form>
      </div>
    </div>
  );
}
