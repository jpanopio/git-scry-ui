import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import { COLOR_PRIMARY, COLOR_FONT_PRIMARY } from '../constants/colors';

const StyledHeader = styled.header`
  padding: 1rem 0;
  background-color: ${COLOR_PRIMARY};
`;

const StyledTitle = styled.h1`
  font-size: 2rem;
  color: ${COLOR_FONT_PRIMARY};
`;

const Header = () => (
  <StyledHeader>
    <Container>
      <Row>
        <Col>
          <img src="/static/images/logoTypographicWhite.png" />
        </Col>
      </Row>
    </Container>
  </StyledHeader>
);

export default Header;
