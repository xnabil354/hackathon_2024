// app/api/validate-key/route.ts

import { NextResponse } from 'next/server';
import { validKeys } from '../genkey/route'; // Import valid keys dari API generate

export async function POST(request: Request) {
  const { licenseKey } = await request.json();

  if (!licenseKey) {
    return NextResponse.json({ valid: false, message: 'License key is required' }, { status: 400 });
  }

  const isValid = validKeys.has(licenseKey);

  if (isValid) {
    validKeys.delete(licenseKey); // Hapus key setelah digunakan agar tidak bisa dipakai lagi
    return NextResponse.json({ valid: true, message: 'License key is valid' });
  } else {
    return NextResponse.json({ valid: false, message: 'Invalid license key' });
  }
}
