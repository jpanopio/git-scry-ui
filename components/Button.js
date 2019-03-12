import React from 'react';
import styled from 'styled-components';
import {
  COLOR_PRIMARY,
  COLOR_FONT_PRIMARY,
} from '../constants/colors';

const StyledButton = styled.button`
  width: ${(props) => props.s.width || '100%'};
  height: 50px;
  margin: 15px 0;
  font-size: 20px;
  color: ${COLOR_FONT_PRIMARY};
  background-color: ${COLOR_PRIMARY};
  cursor: pointer;
`;

const Button = ({
  s = {},
  children,
}) => (
  <StyledButton s={s}>
    <span>
      {children}
    </span>
  </StyledButton>
);

export default Button;
