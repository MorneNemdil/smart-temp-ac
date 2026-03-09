import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type { ArtworkItem } from "./appwrite types/ArtworkItem";
import { storage } from "./appwrite";
import type { Models } from "appwrite";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function createArtworkFromDocument(document: Models.Document): ArtworkItem {
  let artworkItem: ArtworkItem = {
    id: document.$id,
    name: document.name as string,
    description: document.description as string,
    imageId: document.imageId as string,
    imageUrl: new URL(storage.getFilePreview(import.meta.env.VITE_APPWRITE_PRODUCT_IMAGES_BUCKET_ID!, document.imageId)).href
  }

  return artworkItem;
}