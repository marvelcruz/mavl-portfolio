'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { motionValues } from '@/lib/utils';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Impact', href: '#impact' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Recognition', href: '#recognition' },
  { label: 'Contact', href: '#contact' },
];

const Footer = () => {
  return (
    <footer className="footer">
      <section className="section section_px py-6">
        <main className="flex flex-col gap-4">
          <motion.div
            {...motionValues}
            className="flex-center flex-wrap gap-4 sm:gap-6"
            style={{
              borderBottom: '0.5px solid rgba(255,255,255,0.15)',
              paddingBottom: '16px',
            }}
          >
            {navLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="footer-p font-medium hover:opacity-60 transition-opacity"
                aria-label={`Go to ${label} section`}
              >
                {label}
              </Link>
            ))}
          </motion.div>

          <motion.div {...motionValues} className="flex-center flex-col gap-1">
            <p className="footer-p">
              <span className="font-bold">©</span>{' '}
              {new Date().getFullYear()} Marvellous Olabode. All rights reserved.
            </p>

            <p className="footer-p" style={{ opacity: 0.65, fontSize: '0.75rem' }}>
              Business Operations & Growth Systems Specialist
            </p>

            <p className="footer-p" style={{ opacity: 0.45, fontSize: '0.72rem' }}>
              Built with Next.js, React, TypeScript, and Framer Motion.
            </p>
          </motion.div>
        </main>
      </section>
    </footer>
  );
};

export default Footer;