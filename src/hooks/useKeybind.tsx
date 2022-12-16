import { useEffect } from "react";

export default function useKeybind(e: KeyboardEvent, callback: () => void) {
  useEffect(() => {
    const handle = (e: KeyboardEvent) => callback();
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, [e, callback]);
}
