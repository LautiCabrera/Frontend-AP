import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CacheService {

    private cache = new Map<string, any>();

    setCache<T>(key: string, data: T): void {
        this.cache.set(key, data);
    }

    getCache<T>(key: string): T | null {
        return this.cache.has(key) ? this.cache.get(key) : null;
    }

    clearCache(key: string): void {
        this.cache.delete(key);
    }

    clearAllCache(): void {
        this.cache.clear();
    }

}