import TwoColumn from "../../components/homepage/twoColumnsComponent/TwoColumnsComponent";
// import ThreeColumn from "../../components/homepage/threeColumnsComponent/ThreeColumnsComponent";
import Hero from "../../components/hero/Hero";
import Footer from "../../components/footer/Footer";
import twoColumnImage from "../../assets/images/homepage/xplainPhoto1.webp";
// import { threeColumnData } from "../../components/homepage/threeColumnsComponent/data";
// import ColumnTitle from "../../components/homepage/threeColumnsComponent/ColumnTitle";

const HomePage = () => {
  return (
    <>
      <Hero />
      <TwoColumn image={twoColumnImage} />
      {/* <ColumnTitle /> */}
      {/* <ThreeColumn data={threeColumnData} /> */}
      <Footer />
    </>
  );
};
export default HomePage;
