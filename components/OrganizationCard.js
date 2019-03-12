import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import Card from './Card';
import { COLOR_PRIMARY } from '../constants/colors';

const StyledImage = styled.img`
  width: 3.75rem;
  height: 3.75rem;
`;

const StyledLink = styled.a`
  color: ${COLOR_PRIMARY};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const OrganizationCard = ({
  id,
  login,
  avatarUrl,
  description,
}) => (
  <StyledLink href={`http://localhost:3000/pullRequests?orgName=${login}`}>
    <Card s={{ width: '6.25rem', height: '6.25rem' }}>
      <Container>
        <Row justify="center">
          <StyledImage src={avatarUrl}/>
        </Row>
        <Row justify="center">
          <p>{login}</p>
        </Row>
      </Container>
    </Card>
  </StyledLink>
);

export default OrganizationCard;
