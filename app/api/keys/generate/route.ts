// app/api/keys/generate/route.ts
import { NextRequest } from 'next/server';
import { keyService } from '@/services/keyService';
import { successResponse, errorResponse } from '@/utils/apiResponse';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const quantity = Number(data.quantity);

    if (!quantity || quantity <= 0 || quantity > 100) {
      return errorResponse('Quantity must be between 1 and 100');
    }

    const keys = keyService.generateKeys(quantity);
    
    return successResponse({
      keys,
      count: keys.length,
    });
  } catch (error) {
    console.error('Key generation error:', error);
    return errorResponse('Failed to generate keys', 500);
  }
}