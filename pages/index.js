import React from 'react';
import {
  ScreenClassProvider,
  Container,
  Row,
  Col,
} from 'react-grid-system';
import styled from 'styled-components';
import { COLOR_MAIN_BACKGROUND } from '../constants/colors';
import Header from '../components/Header';

const Index = () => (
  <ScreenClassProvider>
    <Header />
    <style jsx global>
      {`
        body {
          margin: 0;
          background-color: ${COLOR_MAIN_BACKGROUND};
          font-family: helvetica;
        }
      `}
    </style>
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
