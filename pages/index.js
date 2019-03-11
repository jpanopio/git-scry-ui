import React, { Component } from 'react';
import {
  ScreenClassProvider,
  Container,
  Row,
  Col,
} from 'react-grid-system';
import fetch from 'isomorphic-unfetch';
import App from '../components/App';
import Card from '../components/Card';

class Index extends Component {
  static async getInitialProps({ req = {} }) {
    const response = await fetch('https://google.com');

    console.log('result', response);

    return {};
  }

  render() {
    return (
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
  }
}

export default Index;
