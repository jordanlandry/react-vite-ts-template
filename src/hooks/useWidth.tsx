import { useEffect, useState } from "react";

// Gets the active width of the window and returns it as state
export default function useWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  const handleResize = () => setWidth(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);
    window.addEventListener("load", handleResize);
    window.addEventListener("fullscreenchange", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
      window.removeEventListener("load", handleResize);
      window.removeEventListener("fullscreenchange", handleResize);
    };
  }, []);
  return width;
}
