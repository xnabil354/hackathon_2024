// types/key.ts
export interface GenerateKeysRequest {
    quantity: number;
  }
  
  export interface GenerateKeysResponse {
    keys: string[];
    count: number;
  }
  
  export interface ValidateKeyResponse {
    key: string;
    isValid: boolean;
  }
  
  export interface ValidateLicenseRequest {
    licenseKey: string;
  }
  
  export interface ValidateLicenseResponse {
    valid: boolean;
    message: string;
  }