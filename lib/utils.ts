import { clsx } from 'clsx';

export function cn(...values: Array<string | false | null | undefined>) {
  return clsx(values);
}

export function formatNumber(value: number) {
  return new Intl.NumberFormat('en-US').format(value);
}

export function getPakistanTime() {
  return new Intl.DateTimeFormat('en-GB', {
    timeStyle: 'short',
    dateStyle: 'medium',
    timeZone: 'Asia/Karachi'
  }).format(new Date());
}

export function getIrelandTime() {
  return new Intl.DateTimeFormat('en-GB', {
    timeStyle: 'short',
    dateStyle: 'medium',
    timeZone: 'Europe/Dublin'
  }).format(new Date());
}

export function getDeliveryStats() {
  const today = new Date();
  const yearSeed = today.getUTCFullYear() - 2019;
  const monthSeed = today.getUTCMonth() + 1;

  return {
    activeSprints: 4 + (monthSeed % 4),
    deploymentsThisMonth: 18 + monthSeed * 3,
    monitoredServices: 12 + yearSeed * 2,
    automationCoverage: 78 + (monthSeed % 8)
  };
}
