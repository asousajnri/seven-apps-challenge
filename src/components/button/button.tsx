import React from 'react';

import { WithChildren } from '../../helpers/types';

import { StyledButton } from './button-styles';

type ButtonProps = WithChildren<{}>;

const Button = ({ children }: ButtonProps) => <StyledButton>{children}</StyledButton>;

export default Button;
