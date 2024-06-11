import Footer from "../../components/footer/Footer";
import ArticleFormComponent from "../../components/forms/ArticleFormComponent";

const Article: React.FC = () => {
  const handleSubmit = () => {
    console.log("Form submitted!");
  };

  return (
    <>
      <ArticleFormComponent onSubmit={handleSubmit} />
      <Footer />
    </>
  );
};

export default Article;
