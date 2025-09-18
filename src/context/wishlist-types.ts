import { createContext } from "react";
import type { Technology } from "../lib/technologies";

export interface WishlistContextType {
  wishlist: Technology[];
  addToWishlist: (technology: Technology) => void;
  removeFromWishlist: (technologySlug: string) => void;
  isInWishlist: (technologySlug: string) => boolean;
  wishlistCount: number;
  clearWishlist: () => void;
}

export const WishlistContext = createContext<WishlistContextType | undefined>(undefined);
