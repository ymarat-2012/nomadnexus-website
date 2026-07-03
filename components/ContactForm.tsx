'use client';

import type { FormEvent } from 'react';
import { SITE } from '@/content/site';
import type { ContactDictionary } from '@/content/types';
import styles from './ContactForm.module.css';

export function ContactForm({ form }: { form: ContactDictionary['form'] }) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') || '');
    const email = String(data.get('email') || '');
    const company = String(data.get('company') || '');
    const message = String(data.get('message') || '');

    const bodyLines = [
      `${form.name}: ${name}`,
      `${form.email}: ${email}`,
      ...(company ? [`${form.company}: ${company}`] : []),
      '',
      message,
    ];

    const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent(
      `${form.name}: ${name}`,
    )}&body=${encodeURIComponent(bodyLines.join('\n'))}`;

    window.location.href = mailto;
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label htmlFor="name">{form.name}</label>
        <input id="name" name="name" type="text" autoComplete="name" required />
      </div>
      <div className={styles.field}>
        <label htmlFor="email">{form.email}</label>
        <input id="email" name="email" type="email" autoComplete="email" required />
      </div>
      <div className={styles.field}>
        <label htmlFor="company">{form.company}</label>
        <input id="company" name="company" type="text" autoComplete="organization" />
      </div>
      <div className={styles.field}>
        <label htmlFor="message">{form.message}</label>
        <textarea id="message" name="message" required />
      </div>
      <div className={styles.actions}>
        <button type="submit" className="btn btn-primary">
          {form.submit}
        </button>
        <p className={styles.note}>{form.successNote}</p>
      </div>
    </form>
  );
}
