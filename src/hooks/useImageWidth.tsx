import useWidth from "./useWidth";

// Using the width of the screen it will return the appropriate image size
export default function useImageWidth() {
  const width = useWidth();
  const suffixes = ["small", "medium", "large"];
  const breakpoints = [800, 1200];

  return width > breakpoints[1] ? suffixes[2] : width > breakpoints[0] ? suffixes[1] : suffixes[0];
}
