import { describe, expect, it } from 'vitest';
import { getDeliveryStats } from '@/lib/utils';

describe('getDeliveryStats', () => {
  it('returns predictable operational metrics with expected keys', () => {
    const stats = getDeliveryStats();

    expect(stats.activeSprints).toBeGreaterThan(0);
    expect(stats.deploymentsThisMonth).toBeGreaterThan(0);
    expect(stats.monitoredServices).toBeGreaterThan(0);
    expect(stats.automationCoverage).toBeGreaterThanOrEqual(78);
  });
});
