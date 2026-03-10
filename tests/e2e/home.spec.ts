import { expect, test } from '@playwright/test';

test('homepage renders and user can navigate to contact', async ({ page }) => {
  await page.goto('/');

  await expect(
    page.getByRole('heading', {
      level: 1,
      name: /build faster with a software company/i
    })
  ).toBeVisible();

  await page.getByRole('link', { name: /start a project/i }).click();
  await expect(page).toHaveURL(/\/contact$/);
  await expect(page.getByRole('heading', { level: 1, name: /tell us what you want/i })).toBeVisible();
});

test('contact form validates and submits', async ({ page }) => {
  await page.goto('/contact');

  await page.getByLabel('Name').fill('Jane Doe');
  await page.getByLabel('Email').fill('jane@example.com');
  await page.getByLabel('Company').fill('Example Co');
  await page.getByLabel('Service').fill('Web');
  await page.getByLabel('Budget').fill('€10k-€25k');
  await page.getByLabel('Project brief').fill(
    'We want Gloud to rebuild our marketing website and connect it to analytics and CRM workflows.'
  );

  await page.getByRole('button', { name: /send project brief/i }).click();
  await expect(page.getByText(/thanks — your brief has been received/i)).toBeVisible();
});
