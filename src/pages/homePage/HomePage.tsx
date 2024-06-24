import TwoColumn from "../../components/homepage/twoColumnsComponent/TwoColumnsComponent";
// import ThreeColumn from "../../components/homepage/threeColumnsComponent/ThreeColumnsComponent";
import Hero from "../../components/hero/Hero";
import Footer from "../../components/footer/Footer";
import {
  twoColumnPrisma,
  twoColumnLumina,
  twoColumnAurea,
  paragraph,
} from "../../components/homepage/twoColumnsComponent/data";
import { ParagraphStyled } from "../../components/homepage/twoColumnsComponent/TwoColumnsComponent.styled";
// import { threeColumnData } from "../../components/homepage/threeColumnsComponent/data";
// import ColumnTitle from "../../components/homepage/threeColumnsComponent/ColumnTitle";

const HomePage = () => {
  return (
    <>
      <Hero />
      <ParagraphStyled>{paragraph}</ParagraphStyled>
      {[twoColumnPrisma, twoColumnLumina, twoColumnAurea].map((data, index) => (
        <TwoColumn key={index} data={data} index={index} />
      ))}
      {/* <ColumnTitle /> */}
      {/* <ThreeColumn data={threeColumnData} /> */}
      <Footer />
    </>
  );
};
export default HomePage;
