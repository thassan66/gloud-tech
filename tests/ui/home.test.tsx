import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ServiceCard } from '@/components/service-card';

describe('ServiceCard', () => {
  it('renders service content and bullet points', () => {
    render(
      <ServiceCard
        title="Web Platforms"
        summary="High-performance websites, portals, SaaS dashboards, and commerce experiences."
        bullets={['Next.js & React engineering', 'Headless CMS & APIs']}
        icon="MonitorCog"
      />
    );

    expect(screen.getByRole('heading', { level: 3, name: /web platforms/i })).toBeInTheDocument();
    expect(screen.getByText(/headless cms & apis/i)).toBeInTheDocument();
  });
});
