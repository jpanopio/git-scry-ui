import React from 'react';
import styled from 'styled-components';
import { COLOR_PRIMARY } from '../constants/colors';

const StyledContainer = styled.div`
  border-bottom: 1px solid #ccc;
`;

const StyledHeader = styled.h2`
  margin-bottom: 0;
  font-size: 1.2rem;
  color: ${COLOR_PRIMARY};
`;

const StyledP = styled.p`
  margin-top: 0.3rem;
`;

const PullRequest = ({
  title,
  body,
}) => (
  <StyledContainer>
    <StyledHeader>{title}</StyledHeader>
    <StyledP>{body}</StyledP>
  </StyledContainer>
);

export default PullRequest;
