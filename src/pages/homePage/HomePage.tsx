import TwoColumn from "../../components/homepage/twoColumnsComponent/TwoColumnsComponent";
import Hero from "../../components/hero/Hero";
import Footer from "../../components/footer/Footer";
import {
  twoColumnPrisma,
  twoColumnLumina,
  twoColumnAurea,
  paragraph,
} from "../../components/homepage/twoColumnsComponent/data";
import { ParagraphStyled } from "../../components/homepage/twoColumnsComponent/TwoColumnsComponent.styled";

const HomePage = () => {
  return (
    <>
      <Hero />
      <ParagraphStyled>{paragraph}</ParagraphStyled>
      {[twoColumnPrisma, twoColumnLumina, twoColumnAurea].map((data, index) => (
        <TwoColumn key={index} data={data} index={index} />
      ))}
      <Footer />
    </>
  );
};
export default HomePage;
