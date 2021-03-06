import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import { COLOR_CARD_BACKGROUND, COLOR_CARD_BORDER } from '../constants/colors';

const StyledDiv = styled.div`
  width: ${(props) => props.s.width || 'auto'};
  height: ${(props) => props.s.height || 'auto'};
  margin: ${(props) => props.s.margin || '1rem'};
  border: 1px solid ${COLOR_CARD_BORDER};
  border-radius: 2px;
  padding: 1rem;
  background-color: ${COLOR_CARD_BACKGROUND};
`;

const Card = ({ s = {}, children }) => (
  <StyledDiv s={s}>
    {children}
  </StyledDiv>
);

export default Card;
