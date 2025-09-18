import type { Technology } from "./technologies";

const STORAGE_KEY = "vacuum-tech-wishlist";

export function loadWishlistFromStorage(): Technology[] {
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export function saveWishlistToStorage(wishlist: Technology[]): void {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(wishlist));
  } catch {
    // Silently fail if storage is not available
  }
}
