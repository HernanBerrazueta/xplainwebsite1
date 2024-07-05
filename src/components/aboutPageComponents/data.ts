import story from "../../assets/images/about/xplainPhoto2.webp";
import heroImage2 from "../../assets/images/about/xplainPhoto3.webp";
import heroImage from "../../assets/images/hero/grid/about_hero_3.png";
import logoImage from "../../assets/logos/traditiondata_logo.svg";

interface ColumnData {
  image: string;
  title: string;
  text: string;
  logo: string;
  logoAlt: string;
}

interface ImageData {
  src: string;
  alt: string;
}

export const image: ImageData = {
  src: heroImage,
  alt: "About Image",
};

export const data: ColumnData[] = [
  {
    image: story,
    title: "Developed for derivatives specialists, by derivatives specialists",
    text: "Operating for 15 years as a London derivatives consultancy staffed by former traders, quants and structurers from T1 investment banks, we knew the problem. Pricing and accounting changes post-2008 had outpaced software solutions. Xplain is our answer.",
    logo: "",
    logoAlt: "",
  },
  {
    image: heroImage2,
    title: "Market data made simple, no data setup required",
    text: "TraditionData provides consistent, high-quality financial market data that reflects real price interest in global OTC swaps markets, covering FX & Money Markets, Interest Rate Derivatives, Credit & Fixed Income, and Energy & Commodities. With over 1 trillion data points across 200+ products and 189 instruments going back 15+ years, as well as a global presence with over 40 offices in 30 countries, TraditionData provides precision data and analytics to customers that is used daily for trading and business decisions.",
    logo: logoImage,
    logoAlt: "Tradition Data",
  },
];
