// app/services/keyStorage.ts
export class KeyStorageService {
    private static instance: KeyStorageService;
    private keys: Set<string>;
  
    private constructor() {
      this.keys = new Set<string>();
    }
  
    public static getInstance(): KeyStorageService {
      if (!KeyStorageService.instance) {
        KeyStorageService.instance = new KeyStorageService();
      }
      return KeyStorageService.instance;
    }
  
    public addKeys(keys: string[]): void {
      keys.forEach(key => this.keys.add(key));
    }
  
    public isValidKey(key: string): boolean {
      return this.keys.has(key);
    }
  
    public removeKey(key: string): boolean {
      return this.keys.delete(key);
    }
  
    public getAllKeys(): string[] {
      return Array.from(this.keys);
    }
  
    public clearKeys(): void {
      this.keys.clear();
    }
  
    // Optional: Get total keys count
    public getKeysCount(): number {
      return this.keys.size;
    }
  }
  
  export const keyStorage = KeyStorageService.getInstance();