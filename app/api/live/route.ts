import { NextResponse } from 'next/server';
import { getDeliveryStats, getIrelandTime, getPakistanTime } from '@/lib/utils';

export const dynamic = 'force-dynamic';

export async function GET() {
  const stats = getDeliveryStats();

  return NextResponse.json({
    pakistanTime: getPakistanTime(),
    irelandTime: getIrelandTime(),
    ...stats
  });
}
