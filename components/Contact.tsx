'use client';

import { Fragment, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { FaWhatsapp, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import FormInput from './FormInput';

import { socials } from '@/constants';
import { sendMail } from '@/lib/actions/mail.actions';
import { parseStringify, motionValues } from '@/lib/utils';

export const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { name: '', email: '', message: '' },
  });

  const onSubmit = async (values: any) => {
    try {
      setStatus('sending');

      await sendMail(values)
        .then((res) => parseStringify(res))
        .then((data) => console.log(data));

      form.reset();
      setStatus('success');
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <Form {...form}>
      <motion.form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full sm:w-[574px] lg:max-w-[516px] flex flex-col gap-8"
        {...motionValues}
      >
        <FormInput name="name" control={form.control} label="Name" placeholder="Your name" />
        <FormInput name="email" control={form.control} label="Email" placeholder="your@email.com" />
        <FormInput name="message" control={form.control} label="Message" placeholder="Your message" />

        <Button
          type="submit"
          disabled={status === 'sending'}
          className="bg-transparent rounded-xl text-white border border-white py-2.5 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </Button>

        {status === 'success' && (
          <p className="about-desc">Thanks. Your message has been sent successfully.</p>
        )}

        {status === 'error' && (
          <p className="about-desc">Something went wrong. Please try again.</p>
        )}
      </motion.form>
    </Form>
  );
};

const SocialIcon = ({ name, className }: any) => {
  return (
    <Fragment>
      {name === 'whatsapp' && <FaWhatsapp className={className} />}
      {name === 'github' && <FaGithub className={className} />}
      {name === 'x' && <FaXTwitter className={className} />}
      {name === 'linkedin' && <FaLinkedin className={className} />}
      {name === 'email' && <MdEmail className={className} />}
      {name === 'instagram' && <FaInstagram className={className} />}
    </Fragment>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="section section_px section-gap">
      <main className="flex-center flex-col gap-8">
        <motion.h2 className="section-h2" {...motionValues}>
          Let&apos;s Work Together
        </motion.h2>

        <motion.h3 className="section-h3 max-w-3xl text-center" {...motionValues}>
          I am open to remote roles and project opportunities in business operations, marketing operations, CRM administration, workflow automation, digital operations, and growth systems.
        </motion.h3>

        <motion.p className="about-desc max-w-3xl text-center" {...motionValues}>
          If your team needs someone who can organize messy systems, improve workflows, support remote operations, and keep digital business processes moving, send me a message.
        </motion.p>

        <div className="contact-wrapper">
          <ContactForm />

          <motion.div className="social-wrapper" {...motionValues}>
            {socials.map(({ name, url }: any, index: number) => (
              <Link
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open my ${name} profile`}
              >
                <SocialIcon name={name} className="text-white size-5 sm:size-6" />
              </Link>
            ))}
          </motion.div>
        </div>
      </main>
    </section>
  );
};

export default Contact;