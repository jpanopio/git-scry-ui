import React from 'react';
import {
  ScreenClassProvider,
  Container,
  Row,
  Col,
} from 'react-grid-system';

const Index = () => (
  <ScreenClassProvider>
    <Container>
      <Row>
        <Col>
          <p>Hello next.js</p>
        </Col>
        <Col>
          <p>YEET.js</p>
        </Col>
      </Row>
    </Container>
  </ScreenClassProvider>
);

export default Index;
