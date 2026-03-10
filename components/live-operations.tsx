'use client';

import { useEffect, useState } from 'react';

type LiveData = {
  pakistanTime: string;
  irelandTime: string;
  activeSprints: number;
  deploymentsThisMonth: number;
  monitoredServices: number;
  automationCoverage: number;
};

export function LiveOperations({ initialData }: { initialData: LiveData }) {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    let active = true;

    async function refresh() {
      const response = await fetch('/api/live', { cache: 'no-store' });
      if (!response.ok) return;
      const next = (await response.json()) as LiveData;
      if (active) setData(next);
    }

    const timer = window.setInterval(refresh, 60_000);
    return () => {
      active = false;
      window.clearInterval(timer);
    };
  }, []);

  return (
    <div className="rounded-[2rem] border border-orange-400/20 bg-slate-900/80 p-6 shadow-2xl shadow-orange-500/5">
      <div className="flex items-center gap-3 text-sm text-orange-300">
        <span className="inline-flex h-3 w-3 rounded-full bg-orange-500 shadow-[0_0_20px_rgba(74,222,128,0.9)]" />
        Live delivery operations
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
          <div className="text-sm text-slate-400">Pakistan time</div>
          <div className="mt-2 text-lg font-medium text-white">{data.pakistanTime}</div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
          <div className="text-sm text-slate-400">Ireland time</div>
          <div className="mt-2 text-lg font-medium text-white">{data.irelandTime}</div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
          <div className="text-sm text-slate-400">Active sprints</div>
          <div className="mt-2 text-lg font-medium text-white">{data.activeSprints}</div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
          <div className="text-sm text-slate-400">Deployments this month</div>
          <div className="mt-2 text-lg font-medium text-white">{data.deploymentsThisMonth}</div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
          <div className="text-sm text-slate-400">Monitored services</div>
          <div className="mt-2 text-lg font-medium text-white">{data.monitoredServices}</div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
          <div className="text-sm text-slate-400">Automation coverage</div>
          <div className="mt-2 text-lg font-medium text-white">{data.automationCoverage}%</div>
        </div>
      </div>
    </div>
  );
}
