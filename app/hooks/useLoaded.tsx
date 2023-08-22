"use client";

import { useEffect, useContext, createContext, useState } from "react";
export default function useLoaded() {
  const PreloadContext = createContext<boolean>(false);
  const usePreloadState = () => useContext(PreloadContext);
  const preloaded = usePreloadState();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (preloaded) {
      setIsLoaded(true);
    } else {
      setTimeout(() => {
        setIsLoaded(true);
      }, 200);
    }
  }, [preloaded]);

  return isLoaded;
}
