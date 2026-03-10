'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigation, company } from '@/data/site';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export function SiteHeader() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20, mass: 1 }}
        className="sticky top-0 z-50 border-b border-white/10 bg-slate-900/80 backdrop-blur-xl"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="group flex items-center gap-3 text-white transition-opacity hover:opacity-90" aria-label="Gloud home">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-500/20 ring-1 ring-orange-400/30 transition-transform duration-300 group-hover:scale-110 group-hover:bg-orange-500/30">
              <span className="text-lg font-semibold tracking-tight text-orange-50">G</span>
            </div>
            <div>
              <div className="text-lg font-semibold tracking-tight">{company.name}</div>
              <div className="hidden text-[11px] font-medium tracking-wide uppercase text-slate-400 transition-colors group-hover:text-orange-400 xs:block">Pakistan + Ireland</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link key={item.href} href={item.href} className="relative text-sm font-medium transition-colors hover:text-orange-400 group">
                  <span className={isActive ? 'text-white' : 'text-slate-300'}>{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="active-nav"
                      className="absolute -bottom-6 left-0 right-0 h-[2px] bg-orange-500"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="absolute -bottom-6 left-0 right-0 h-[2px] origin-left scale-x-0 bg-slate-500 transition-transform duration-300 group-hover:scale-x-100" />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden rounded-full border border-orange-400/40 bg-orange-500/10 px-5 py-2.5 text-sm font-medium text-orange-100 transition-all hover:bg-orange-500/20 hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(249,115,22,0.1)] sm:block"
            >
              Start a project
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white transition hover:bg-white/10 md:hidden"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 flex flex-col bg-slate-950 px-6 pt-24 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="text-3xl font-semibold text-white transition active:text-orange-400"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-2xl bg-orange-500 py-4 text-center text-lg font-semibold text-slate-950 transition active:scale-95 shadow-xl shadow-orange-500/20"
              >
                Start a project
              </Link>
            </motion.div>

            <div className="mt-auto pb-12">
              <div className="text-sm text-slate-500 uppercase tracking-widest font-bold">Connect</div>
              <div className="mt-4 text-slate-300">{company.email}</div>
              <div className="mt-2 text-slate-300">{company.phone}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
