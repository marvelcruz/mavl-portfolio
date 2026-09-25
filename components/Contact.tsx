'use client';

import { Fragment, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { FaWhatsapp, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import FormInput from './FormInput';

import { socials } from '@/constants';
import { sendMail } from '@/lib/actions/mail.actions';
import { motionValues } from '@/lib/utils';
import { contactFormSchema, ContactFormValues } from '@/components/src/lib/schemas/contact.schema';

const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: '', email: '', message: '' },
  });

  const onSubmit = async (values: ContactFormValues) => {
    try {
      setStatus('sending');

      const result = await sendMail(values);
      if (!result.sent) throw new Error('Message delivery failed');
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
          <p className="about-desc">
            The form could not deliver your message.{' '}
            <Link
              href={`mailto:Marvellousolabode@gmail.com?subject=${encodeURIComponent(`Portfolio inquiry from ${form.getValues('name')}`)}&body=${encodeURIComponent(`${form.getValues('message')}\n\nFrom: ${form.getValues('name')} (${form.getValues('email')})`)}`}
              className="underline underline-offset-4"
            >
              Open your email draft instead →
            </Link>
          </p>
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
          Need someone to connect operations, CRM, automation, and the customer experience? Let&apos;s talk.
        </motion.h3>

        <div className="grid w-full max-w-4xl gap-5 md:grid-cols-2">
          <motion.div {...motionValues} className="card-soft flex flex-col items-start gap-4 rounded-2xl p-6">
            <span className="mustard-pill">For hiring teams</span>
            <h3 className="project-h3 text-xl">Hire me for a role</h3>
            <p className="project-p flex-1">Remote revenue operations, business operations, CRM administration, and automation.</p>
            <Link href="mailto:Marvellousolabode@gmail.com?subject=Remote%20role%20inquiry" className="mustard-button">Discuss a role →</Link>
          </motion.div>
          <motion.div {...motionValues} className="card-soft flex flex-col items-start gap-4 rounded-2xl p-6">
            <span className="mustard-pill">For clients</span>
            <h3 className="project-h3 text-xl">Build a better workflow</h3>
            <p className="project-p flex-1">Bring me a CRM problem, an operations process, or a digital experience you want to improve.</p>
            <Link href="mailto:Marvellousolabode@gmail.com?subject=Project%20inquiry" className="mustard-button">Discuss a project →</Link>
          </motion.div>
        </div>
        <Link href="/resume/Marvellous-Olabode-Resume.pdf" target="_blank" rel="noopener noreferrer" className="outline-button">Download résumé (PDF) ↗</Link>

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
