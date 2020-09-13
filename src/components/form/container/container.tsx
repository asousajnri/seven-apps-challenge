import React from 'react';

import { WithChildren } from "../../../helpers/types";

import { StyledContainer } from './container-styles';

type ContainerProps = WithChildren <{
  submit(): void;
}>;

const Container = ({ children, submit }: ContainerProps) => {
  return (
    <StyledContainer onSubmit={submit}>{children}</StyledContainer>
  );
};

export default Container;