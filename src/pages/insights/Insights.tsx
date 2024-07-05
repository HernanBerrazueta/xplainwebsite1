import Footer from "../../components/footer/Footer";
import NewsDigest from "../../components/homepage/threeColumnsComponent/ThreeColumnsComponent";
import { digestData } from "../../components/insights/threeColumnsComponent/data";
import HeroComponent from "../../components/treasurers/heroComponent/HeroComponent";

const Insights = () => {
  return (
    <>
      <HeroComponent />
      <NewsDigest data={digestData} />
      <Footer />
    </>
  );
};

export default Insights;
