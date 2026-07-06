'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { Locale } from '@/content/site';
import type { Dictionary } from '@/content/types';
import { localePath } from '@/lib/paths';
import { NexusMark } from './Logo';
import { LanguageSwitcher } from './LanguageSwitcher';
import { MenuIcon, CloseIcon } from './icons';
import styles from './Header.module.css';

const NAV_KEYS = ['home', 'vendors', 'solutions', 'projects', 'about', 'contact'] as const;

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const pathname = usePathname() || '';
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header className={styles.header}>
        <div className={`container ${styles.bar}`}>
          <Link href={localePath(locale, 'home')} className={styles.logo}>
            <NexusMark className={styles.logoMark} />
            <span>Nomad Nexus</span>
          </Link>

          <nav className={styles.nav} aria-label="Primary">
            {NAV_KEYS.map((key) => {
              const href = localePath(locale, key);
              const isActive = pathname === href;
              return (
                <Link
                  key={key}
                  href={href}
                  className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {dict.nav[key]}
                </Link>
              );
            })}
          </nav>

          <div className={styles.actions}>
            <LanguageSwitcher locale={locale} label={dict.common.switchLanguage} />
            <Link href={localePath(locale, 'contact')} className={`btn btn-primary ${styles.ctaDesktop}`}>
              {dict.common.headerCta}
            </Link>
            <button
              type="button"
              className={styles.menuToggle}
              aria-expanded={open}
              aria-label={open ? dict.common.closeMenu : dict.common.openMenu}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`${styles.mobilePanel} ${open ? styles.mobilePanelOpen : ''}`}
        aria-hidden={!open}
      >
        <nav className={styles.mobileNav} aria-label="Mobile primary">
          {NAV_KEYS.map((key) => {
            const href = localePath(locale, key);
            const isActive = pathname === href;
            return (
              <Link
                key={key}
                href={href}
                className={`${styles.mobileNavLink} ${isActive ? styles.mobileNavLinkActive : ''}`}
                tabIndex={open ? 0 : -1}
              >
                {dict.nav[key]}
              </Link>
            );
          })}
        </nav>
        <div className={styles.mobileFooter}>
          <LanguageSwitcher locale={locale} label={dict.common.switchLanguage} />
          <Link
            href={localePath(locale, 'contact')}
            className="btn btn-primary btn-block"
            tabIndex={open ? 0 : -1}
          >
            {dict.common.headerCta}
          </Link>
        </div>
      </div>
    </>
  );
}
