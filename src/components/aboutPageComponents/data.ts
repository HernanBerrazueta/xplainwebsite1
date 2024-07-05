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
    text: "Our partnerships with leading data providers offer pre-built ETL connections and data mapping.  Just plug in and enjoy seamless pricing insights. No data plumbing required.",
    logo: logoImage,
    logoAlt: "Tradition Data",
  },
];
