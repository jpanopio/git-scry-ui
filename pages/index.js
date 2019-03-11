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
import App from '../components/App';
import Card from '../components/Card';

const Index = () => (
  <App>
    <Container>
      <Card>
        <Row>
          <Col>
            <p>Hello next.js</p>
          </Col>
          <Col>
            <p>YEET.js</p>
          </Col>
        </Row>
      </Card>
    </Container>
  </App>
);

export default Index;
