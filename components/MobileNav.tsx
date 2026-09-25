'use client';

import Link from 'next/link';
import { motion, AnimatePresence, Variants } from 'framer-motion';

interface NavLink {
  title: string;
  href: string;
}

interface MobileNavProps {
  links: NavLink[];
  show: boolean;
  onClose: () => void;
}

const MobileNav = ({ links, show, onClose }: MobileNavProps) => {
  const containerVariants: Variants = {
    open: {
      height: 'auto',
      opacity: 1,
      transition: {
        type: 'spring',
        delay: 0.05,
        duration: 0.6,
        when: 'beforeChildren',
        staggerChildren: 0.07,
        staggerDirection: 1,
      },
    },
    close: {
      height: 0,
      opacity: 0,
      transition: {
        type: 'spring',
        duration: 0.35,
        when: 'afterChildren',
        staggerChildren: 0.04,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants: Variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 24,
      },
    },
    close: {
      y: -8,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.nav
          key="mobile-nav"
          className="mobile-nav border_b overflow-hidden"
          variants={containerVariants}
          initial="close"
          animate="open"
          exit="close"
          aria-label="Mobile navigation"
        >
          <ul className="flex-center flex-col gap-4 py-6" role="list">
            {links.map(({ title, href }) => (
              <motion.li key={title} variants={itemVariants}>
                <Link
                  href={`/${href}`}
                  onClick={onClose}
                  className="link transition-opacity hover:opacity-70 focus:outline-none focus-visible:underline"
                  aria-label={`Go to ${title} section`}
                >
                  {title}
                </Link>
              </motion.li>
            ))}
            <motion.li variants={itemVariants}>
              <Link href="/#contact" onClick={onClose} className="link">Contact</Link>
            </motion.li>
          </ul>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
