import styled from "styled-components";
import theme from "../../theme";

export const Container = styled.div`
  width: 600px;
  height: 400px;
  background-color: ${theme.palette.primary.main};
  display: flex;
  flex: wrap;
  margin-left: 24px;

  -webkit-box-shadow: 7px 7px 11px -7px rgba(0, 0, 0, 0.7);
  box-shadow: 8px 8px 11px -7px rgba(0, 0, 0, 0.7);
`;

export const ImageWrapperStyled = styled.div`
  display: flex;
  flex: 2 1 0%;
  flex-wrap: wrap;
`;

export const ImageInnerWrapperStyled = styled.div`
  width: 200px;
`;

export const ImageStyled = styled.img`
  padding: 5px;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  color: #fff;
`;

export const FirstFlexElement = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const SecondFlexElement = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const FirstUpperSpan = styled.span`
  color: #bba5e0;
  padding-left: 30px;
  font-weight: bold;
`;

export const FirstLowerSpan = styled.span`
  max-width: 160px;
  padding-left: 30px;
  font-weight: 500;
`;

export const SecondUpperSpan = styled.span`
  font-weight: 800;
  font-size: 20px;
  letter-spacing: 3px;
  max-width: 150px;
  padding-left: 30px;
`;

export const SecondLowerSpan = styled.span`
  color: ${theme.palette.primary.light};
  max-width: 150px;
  padding-left: 30px;
`;
