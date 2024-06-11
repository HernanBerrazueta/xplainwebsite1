import styled from "styled-components";
import theme from "../../../theme";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${theme.palette.primary.main};
  height: calc(100vh - 104px);
`;
export const InnerContainer = styled.div`
  max-width: 450px;
`;
