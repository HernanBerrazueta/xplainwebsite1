import theme from "../../../theme";
import { HeaderTextStyle } from "../FormComponent.styled";

const FormTitle: React.FC = () => {
  return (
    <>
      <HeaderTextStyle
        variant="h4"
        align="center"
        gutterBottom
        style={{
          color: `${theme.palette.primary.main}`,
          padding: "0px 26px",
        }}
      >
        Find out how we can bring clarity, control and <br /> efficiency to your
        work with derivatives
      </HeaderTextStyle>
    </>
  );
};

export default FormTitle;
