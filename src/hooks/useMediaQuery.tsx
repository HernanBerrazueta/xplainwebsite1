import { useMediaQuery } from "react-responsive";

function useMatchMedia() {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1023px)",
  });
  const isLaptop = useMediaQuery({
    query: "(min-width: 1024px) and (max-width: 1279px)",
  });
  const isDesktop = useMediaQuery({ query: "(min-width: 1360px)" });
  const isUltraLarge = useMediaQuery({ query: "(min-width: 2560px)" });

  const obj = {
    isMobile,
    isTablet,
    isLaptop,
    isDesktop,
    isUltraLarge,
  };
  return obj;
}

export default useMatchMedia;
