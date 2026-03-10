'use server';

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your name.'),
  email: z.string().email('Please enter a valid email address.'),
  company: z.string().min(2, 'Please tell us your company name.'),
  service: z.string().min(2, 'Please choose a service area.'),
  budget: z.string().min(2, 'Please select a budget range.'),
  message: z.string().min(20, 'Please share a bit more about your project.')
});

export type ContactFormState = {
  success: boolean;
  message: string;
  fieldErrors?: Partial<Record<keyof z.infer<typeof contactSchema>, string[]>>;
};

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const parsed = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    company: formData.get('company'),
    service: formData.get('service'),
    budget: formData.get('budget'),
    message: formData.get('message')
  });

  if (!parsed.success) {
    return {
      success: false,
      message: 'Please review the highlighted fields and try again.',
      fieldErrors: parsed.error.flatten().fieldErrors
    };
  }

  const lead = {
    ...parsed.data,
    submittedAt: new Date().toISOString()
  };

  if (process.env.GLOUD_LEAD_WEBHOOK_URL) {
    try {
      await fetch(process.env.GLOUD_LEAD_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(lead),
        cache: 'no-store'
      });
    } catch (error) {
      console.error('Webhook delivery failed', error);
    }
  }

  console.info('New Gloud lead', lead);

  return {
    success: true,
    message: 'Thanks — your brief has been received. The Gloud team will be in touch shortly.'
  };
}
