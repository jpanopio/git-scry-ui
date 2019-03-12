import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 16.875rem;
  height: 16.875rem;
`;

const CrystalBall = () => (
  <StyledImage src="/static/images/logoCrystalBall.png" />
);

export default CrystalBall;
