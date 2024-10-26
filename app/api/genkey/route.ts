/* eslint-disable @typescript-eslint/no-unused-vars */
// app/api/genkey/route.ts

import { NextResponse } from 'next/server';

// Tempat penyimpanan sementara untuk license keys
export const validKeys = new Set<string>();

export async function POST(request: Request) {
  try {
    const { quantity } = await request.json();

    if (!quantity || quantity <= 0) {
      return NextResponse.json({ error: 'Quantity must be greater than 0' }, { status: 400 });
    }

    const keys = Array.from({ length: quantity }, () => 
      Math.random().toString(36).substring(2, 15) + 
      Math.random().toString(36).substring(2, 15)
    );

    // Simpan semua key ke dalam validKeys
    keys.forEach((key) => validKeys.add(key));

    return NextResponse.json({ keys });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to generate keys' }, { status: 500 });
  }
}
