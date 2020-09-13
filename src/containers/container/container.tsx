import React from "react";

import { WithChildren } from "../../helpers/types";

import { StyledContainer } from "./container-styles";

type ContainerProps = WithChildren <{
  as?: never;
}>;

const Container = ({ as, children }: ContainerProps) => {
  return <StyledContainer as={as}>{children}</StyledContainer>
};

export default Container;