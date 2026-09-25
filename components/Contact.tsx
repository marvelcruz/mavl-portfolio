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
          <p className="about-desc">The form could not deliver your message. Please email me directly.</p>
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
          Have a website idea, a role to fill, or an operational problem to solve? Tell me what you are building.
        </motion.p>

        <Link href="mailto:Marvellousolabode@gmail.com" className="mustard-button">Email me directly →</Link>
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
