// services/keyService.ts
class KeyService {
    private keys: Map<string, boolean>;
  
    constructor() {
      this.keys = new Map();
    }
  
    generateKeys(quantity: number): string[] {
      const timestamp = Date.now().toString(36);
      const newKeys = Array.from({ length: quantity }, (_, index) => {
        const key = `${timestamp}-${Math.random().toString(36).substr(2, 9)}-${index}`;
        this.keys.set(key, true);
        return key;
      });
      return newKeys;
    }
  
    validateKey(key: string): boolean {
      return this.keys.has(key);
    }
  
    validateAndConsumeLicense(licenseKey: string): boolean {
      const isValid = this.keys.has(licenseKey);
      
      if (isValid) {
        this.keys.delete(licenseKey);
        console.log('Current valid keys:', Array.from(this.keys.keys()));
      }
      
      return isValid;
    }
  
    // Method untuk debugging
    getAllKeys(): string[] {
      return Array.from(this.keys.keys());
    }
  }
  
  // Export single instance
  export const keyService = new KeyService();