"use client";
import { useState } from "react";
export function useToast() {
  const [toast, setToast] = useState<string | null>(null);
  const addToast = (text: string) => {
    console.log("toast");
    setToast(text);
    setTimeout(() => {
      setToast(null);
    }, 3000);
  };
  return { toast, addToast };
}
