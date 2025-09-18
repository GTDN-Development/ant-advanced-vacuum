import { useEffect, useState, type ReactNode } from "react";
import type { Technology } from "../lib/technologies";
import { loadWishlistFromStorage, saveWishlistToStorage } from "../lib/wishlist-storage";
import { WishlistContext, type WishlistContextType } from "./wishlist-types";

interface WishlistProviderProps {
  children: ReactNode;
}

export function WishlistProvider({ children }: WishlistProviderProps) {
  const [wishlist, setWishlist] = useState<Technology[]>([]);

  // Load from session storage on mount
  useEffect(() => {
    setWishlist(loadWishlistFromStorage());
  }, []);

  // Save to session storage whenever wishlist changes
  useEffect(() => {
    saveWishlistToStorage(wishlist);
  }, [wishlist]);

  const addToWishlist = (technology: Technology) => {
    setWishlist((prev) => {
      if (prev.some((item) => item.slug === technology.slug)) {
        return prev; // Already in wishlist
      }
      return [...prev, technology];
    });
  };

  const removeFromWishlist = (technologySlug: string) => {
    setWishlist((prev) => prev.filter((item) => item.slug !== technologySlug));
  };

  const isInWishlist = (technologySlug: string) => {
    return wishlist.some((item) => item.slug === technologySlug);
  };

  const clearWishlist = () => {
    setWishlist([]);
  };

  const value: WishlistContextType = {
    wishlist,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    wishlistCount: wishlist.length,
    clearWishlist,
  };

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
}
