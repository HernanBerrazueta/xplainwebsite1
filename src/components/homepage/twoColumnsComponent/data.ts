import lumina from "../../../assets/images/hero/grid/Xplain_Graphic Patterns-01_Transparent.svg";
import prismaTheme from "../../../assets/images/homepage/xpl02_minimalist_photography_of_lots_of_people_walking_on_a_cle_9915ec77-aa63-4ff2-a831-e4d2695d47a2-1 1.webp";
import aureaTheme from "../../../assets/images/homepage/xpl02_Close_up_macro_photography_of_the_underside_of_a_beautifu_5b6cedba-d984-428f-a2e1-938e01509b9c 1 (1).webp";
import prismaDark from "../../../assets/images/homepage/XPLAIN_PRISMA.svg";
import luminaDark from "../../../assets/images/homepage/XPLAIN_LUMINA.svg";
import aureaDark from "../../../assets/images/homepage/XPLAIN_AUREA.svg";

export const paragraph =
  "Siloed applications. Manual processes. Third-party valuation. They all mean more risk and higher costs.";

export const twoColumnPrisma = {
  item1: {
    logo: prismaDark,
    title: "For Treasurers",
    text: "The power to challenge a bank's prices",
    secondaryText:
      "Systems designed to meet back-office needs fall short on the financial front line – which is where Xplain Prisma excels. It offers corporate treasurers the kind of risk management capabilities that until now were reserved for banks. This means more nuanced, more robust hedging strategies, and faster, more accurate risk reporting.",
    link: "prisma",
    image: prismaTheme,
  },
};

export const twoColumnLumina = {
  item2: {
    logo: luminaDark,
    title: "For Fund Administrators",
    text: "Identify, validate and resolve exceptions in your data",
    secondaryText:
      "Xplain Lumina is a force multiplier for fund administrators. It supports faster, more accurate exception management thanks to a new level of automation allied to ever-greater data integrity.",
    link: "lumina",
    image: lumina,
  },
};

export const twoColumnAurea = {
  item3: {
    logo: aureaDark,
    title: "For Auditors",
    text: "The power to scale up and onboard new and large audit clients",
    secondaryText:
      "Xplain Aurea is utilizing cloud technology to enable calculation efficiencies for large scale operations. It supports scale via full portfolio valuations and firmwide standardization; provides best practice valuation frameworks.",
    link: "aurea",
    image: aureaTheme,
  },
};
