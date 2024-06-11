import styled from "styled-components";
import { Button } from "@mui/material";

export const ScrollBtnStyled = styled(Button)`
  position: fixed !important;
  bottom: 50px !important;
  right: 50px !important;
  z-index: 100 !important;
  background-color: #00000042 !important;
  border-radius: 50px !important;

  &:hover {
    background-color: #805cdd75 !important;
  }
`;
