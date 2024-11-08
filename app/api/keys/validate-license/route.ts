// app/api/keys/validate-license/route.ts
import { NextRequest } from 'next/server';
import { keyService } from '@/services/keyService';
import { successResponse, errorResponse } from '@/utils/apiResponse';

interface ValidateLicenseResponse {
  valid: boolean;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const licenseKey = body.licenseKey;

    if (!licenseKey) {
      return errorResponse('License key is required', 400);
    }

    // Validate and consume the license key
    const isValid = keyService.validateAndConsumeLicense(licenseKey);
    console.log('Checking key:', licenseKey, 'Valid:', isValid);

    if (isValid) {
      return successResponse<ValidateLicenseResponse>({
        valid: true,
        message: 'License key is valid'
      });
    }

    return successResponse<ValidateLicenseResponse>({
      valid: false,
      message: 'Invalid license key'
    });

  } catch (error) {
    console.error('Error validating license:', error);
    return errorResponse('Error validating license key', 500);
  }
}