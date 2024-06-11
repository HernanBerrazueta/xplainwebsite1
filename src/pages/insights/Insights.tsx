import ImageComponent from "../../components/insights/imageComponent/ImageComponent";
import Footer from "../../components/footer/Footer";
import ThreeColumn from "../../components/homepage/threeColumnsComponent/ThreeColumnsComponent";
import { threeColumnData } from "../../components/insights/threeColumnsComponent/data";

const Insights = () => {
  return (
    <>
      <ImageComponent />
      <ThreeColumn data={threeColumnData} />
      <Footer />
    </>
  );
};

export default Insights;
