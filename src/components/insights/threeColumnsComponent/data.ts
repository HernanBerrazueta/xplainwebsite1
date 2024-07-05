import image1 from "../../../assets/images/hero/grid/Xplain_Graphic Patterns-06_1.svg";
import image2 from "../../../assets/images/articles/Xplain_Graphic Patterns-02.svg";
import image3 from "../../../assets/images/articles/Xplain_Graphic Patterns-04.svg";
import image4 from "../../../assets/images/hero/grid/Xplain_Graphic Patterns-05_2.svg";

export const digestData = [
  {
    title: "When the solution to systemic risk results in systemic risk",
    image: image3,
    alt: "1001",
    text: [
      "When regulators broaden both the scope for the products and the institutions required to clear, while at the same time increasing capital costs for the clearing firms that provide the service, the risk of market breakdown increases.",
      "There has been a reported 50 % drop in the number of banks providing derivatives clearing services and more than an 80 % concentration of client activity within six firms.A regulatory change that increases capital costs will further reduce the profitability of providing clearing services, leaving the market vulnerable to a further reduction in the number of client clearers.",
      "The historical decision by many institutions not to become a direct clearing member results in a reliance on a member to clear trades on their behalf.Clearing members will charge for this service and an increase in capital costs for providing the service will ultimately be passed on to the client.",
      "Clients are therefore faced with increasing costs of the service and the systemic risk from a further concentration of clearing providers.There is no doubt that many clients will review the economics and the risks associated with not being a direct member.",
      "The emergence of shared infrastructure vendors such as Sernova Financial may tip the economic scales in favour of direct membership.",
    ],
    linkText:
      "Capital rules add to clearing concentration fears in US$715trn derivatives market | IFR (ifre.com)",
    link: "https://www.ifre.com/story/4569068/capital-rules-add-to-clearing-concentration-fears-in-us715trn-derivatives-market-fync30whpw",
    id: 1001,
  },
  {
    title: "The funding drag of increasing derivative margins",
    image: image4,
    alt: "1002",
    text: [
      "Regulatory Initial Margin for non-cleared derivatives collected by the 20 phase-one firms increased by more than 40% in 2023 to $432.3 billion according to the latest ISDA survey. Variation Margin collected by phase one firms decreased by 13% however total margin held by phase one firms remained constant at $1.2 trillion.",
      "Unlike VM collateral, which can be recycled by posting as collateral due under another CSA, IM collateral posted is segregated and represents an outflow of funding and liquidity. It is no surprise that firms are becoming more active with collateral optimisation vendors in order to reduce these funding costs which otherwise drag on profitability.",
      "As margin collateral posted is fundamentally a risk-based calculation, understanding the drivers of bilateral and exchange counterparty risk is key to successful optimisation.",
    ],
    linkText: "ISDA Margin Survey Year-End 2023.pdf",
    link: "https://www.isda.org/a/0swgE/ISDA-Margin-Survey-Year-End-2023.pdf",
    id: 1002,
  },
  {
    title:
      "New Dynamic Risk Management standards mean big changes for bank treasuries",
    image: image1,
    alt: "1003",
    text: [
      "Hedge accounting removes the P&L volatility of derivatives by identifying an asset or liability being hedged by the derivative. For example, a bank that issues a fixed rate bond and swaps it back to floating will treat the swap and bond as being in a hedged relationship thereby removing the need for the mark to market of the derivative to be accounted for in the P&L.",
      "However, many banks use a portfolio approach when it comes to identifying the derivative hedges associated with multiple assets and liabilities. This approach to defining the portfolio and the associated hedging derivatives is set to change, in accord with a draft of the new international accounting standards due to be released in 2025 with implementation in 2028.",
      "At heart, these new standards seek to make portfolio management and derivative hedging more robust. They recognise the natural offset between some balance sheet assets and liabilities allowing a more dynamic derivative overlay strategy.",
      "This will inevitably mean a substantial change to the way bank treasuries identify portfolios of assets and associated derivatives. It will also prescribe the concept of market risk within an accepted risk profile and a new governance process.",
      "ISDA has surveyed its members on the topic and produced a consultative whitepaper that looks to refine the IASB approach. Seeking to ensure the new DRM model is better aligned with current risk management practices and to remove the risk of unintended consequences.",
    ],
    linkText:
      "Preparing-for-the-Dynamic-Risk-Management-Accounting-Model.pdf (isda.org)",
    link: "https://www.isda.org/a/Hl1gE/Preparing-for-the-Dynamic-Risk-Management-Accounting-Model.pdf",
    id: 1003,
  },
  {
    title: "When lower bank funding spreads create a headache",
    image: image2,
    alt: "1004",
    text: [
      "Bank funding spreads have tightened substantially since the Covid pandemic. Lower funding spreads should drive higher net interest margins and benefit bank profitability, however it can be problematic for XVA desks.",
      "Some bank XVA desks account and manage to the net of the CVA and DVA expected exposures. Lower funding spreads will therefore reduce the DVA exposure contribution resulting in a P&L and additional CVA hedging.",
      "For those banks that manage the constituent parts of FVA - namely FCA and FBA, where FBA is substituted for DVA - reduced funding spreads impact both calculations and may offset with no P&L impact or CVA exposure that would require additional hedging.",
      "In the risk neutral XVA world a difference in operating model may result in a difference in outcome.",
    ],
    linkText: "DVAs inflate US banks’ liabilities by $4.9bn - Risk.net",
    link: "https://www.risk.net/risk-quantum/7959384/dvas-inflate-us-banks-liabilities-by-49bn&data=05%257C02%257Ckevin@solum-financial.com%257Cb3f3e2683f134caad28308dc78bb0e34%257C4de7e720ee714fd78a138998a7267b63%257C0%257C0%257C638517992006502614%257CUnknown%257CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0=%257C0%257C%257C%257C&sdata=kQg/n+hf+1G5IjAJvMB+jRDQhRC2kG1UXrD3MUTWQ7k=&reserved=0",
    id: 1004,
  },
];
