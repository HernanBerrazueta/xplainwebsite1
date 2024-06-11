import Footer from "../../components/footer/Footer";
import FormComponent from "../../components/forms/FormComponent";
import { Container } from "../../components/forms/FormComponent.styled";

const Form = () => {
  const handleSubmit = () => {
    console.log("Form submitted!");
  };

  return (
    <>
      <Container>
        <FormComponent onSubmit={handleSubmit} />
        <Footer />
      </Container>
    </>
  );
};

export default Form;
