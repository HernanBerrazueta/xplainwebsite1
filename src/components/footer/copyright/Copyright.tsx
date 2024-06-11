import React from "react";
import {
  CopyrightWrapper,
  PoliciesWrapper,
  SpanWrapper,
  policies,
  office,
  copyright,
  PolicyLink,
} from "./Copyright.styled";

const Copyright: React.FC = () => {
  return (
    <>
      <CopyrightWrapper container>
        <SpanWrapper>
          <span>{copyright}</span>
        </SpanWrapper>
        <PoliciesWrapper>
          {policies.map(({ title, to }) => (
            <PolicyLink key={title} to={to}>
              <span>{title}</span>
            </PolicyLink>
          ))}
        </PoliciesWrapper>
        <SpanWrapper>
          <span>{office}</span>
        </SpanWrapper>
      </CopyrightWrapper>
    </>
  );
};

export default Copyright;
