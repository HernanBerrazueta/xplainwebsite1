export const size = {
  mobile: "320px",
  mobileOnly: "767px",
  smallTablet: "768px",
  tablet: "1024px",
  tabletOnly: "1359px",
  desktop: "1360px",
  copyright: "1536px",
  ultraLarge: "2560px",
  minHeight: "600px",
  maxHeight: "1200px",
};

export const device = {
  mobileOnly: `(max-width: ${size.mobileOnly})`,
  mobile: `(min-width: ${size.mobile})`,
  smallTablet: `(min-width: ${size.smallTablet})`,
  tablet: `(min-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
  copyright: `(min-width: ${size.copyright})`,
  ultraLarge: `(min-width: ${size.ultraLarge})`,
  minHeight: `(min-height: ${size.minHeight})`,
  maxHeight: `(max-height: ${size.maxHeight})`,
};
