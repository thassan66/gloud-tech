'use client';

import { useActionState } from 'react';
import { submitContactForm, type ContactFormState } from '@/lib/actions';

const initialState: ContactFormState = {
  success: false,
  message: 'Tell us what you are building, improving, or trying to grow.'
};

const fieldClassName =
  'mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-orange-400/60';

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContactForm, initialState);

  return (
    <form action={formAction} className="rounded-[2rem] border border-white/10 bg-white/5 p-6 md:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Name" name="name" error={state.fieldErrors?.name?.[0]} />
        <Field label="Email" name="email" type="email" error={state.fieldErrors?.email?.[0]} />
        <Field label="Company" name="company" error={state.fieldErrors?.company?.[0]} />
        <Field label="Service" name="service" error={state.fieldErrors?.service?.[0]} placeholder="Web, Mobile, Marketing, Cloud" />
        <Field label="Budget" name="budget" error={state.fieldErrors?.budget?.[0]} placeholder="e.g. €10k–€25k" />
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-slate-200" htmlFor="message">
            Project brief
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            className={fieldClassName}
            placeholder="What problem are you solving, what timelines matter, and what does success look like?"
          />
          {state.fieldErrors?.message?.[0] ? (
            <p className="mt-2 text-sm text-rose-300">{state.fieldErrors.message[0]}</p>
          ) : null}
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className={state.success ? 'text-sm text-emerald-300' : 'text-sm text-slate-400'}>{state.message}</p>
        <button
          type="submit"
          disabled={pending}
          className="rounded-full bg-orange-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-orange-300 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {pending ? 'Sending…' : 'Send project brief'}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
  error
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  error?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-200" htmlFor={name}>
        {label}
      </label>
      <input id={name} name={name} type={type} className={fieldClassName} placeholder={placeholder} />
      {error ? <p className="mt-2 text-sm text-rose-300">{error}</p> : null}
    </div>
  );
}
