"use client";

import { toBlob } from "html-to-image";
export const HandleClick = async () => {
  const node = document.getElementById("bg");
  if (node) {
    try {
      const blob = await toBlob(node);
      if (!blob) return;
      if ("ClipboardItem" in window) {
        const data = [new ClipboardItem({ "image/png": blob })];
        await navigator.clipboard.write(data);
        console.log("Image copied to clipboard!");
      } else {
        const blobUrl = URL.createObjectURL(blob);

        // Redirect the user to the URL
        window.location.href = blobUrl;
        console.log("Image copied to clipboard (fallback mode)!");
      }
    } catch (error) {
      console.error("Failed to copy image: ", error);
    }
  }
};
