"use client";
import { toBlob } from "html-to-image";
export const MakeImage = async (): Promise<string> => {
  const node = document.getElementById("bg");
  if (node) {
    try {
      const blob = await toBlob(node);
      if (!blob) return "";
      if ("ClipboardItem" in window) {
        const data = [new ClipboardItem({ "image/png": blob })];
        await navigator.clipboard.write(data);
        console.log("Image copied to clipboard!");
      } else {
        const blobUrl = URL.createObjectURL(blob);
        console.log("Image copied to clipboard (fallback mode)!");
        return blobUrl;
      }
    } catch (error) {
      console.error("Failed to copy image: ", error);
    }
  }
  return "";
};
