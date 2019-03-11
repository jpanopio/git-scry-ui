import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import Card from './Card';

const StyledImage = styled.img`
  width: 3.75rem;
  height: 3.75rem;
`;

const OrganizationCard = ({
  id,
  login,
  avatarUrl,
  description,
}) => (
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
);

export default OrganizationCard;
