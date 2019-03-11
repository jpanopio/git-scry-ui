import React, { Component } from 'react';
import {
  ScreenClassProvider,
  Container,
  Row,
  Col,
} from 'react-grid-system';
import fetch from 'isomorphic-unfetch';
import { GIT_SCRY_CHECK_LOGGED_IN } from '../constants/endpoints';
import App from '../components/App';
import Card from '../components/Card';

class Index extends Component {
  static async getInitialProps({ req = {} }) {
    const response = await fetch(GIT_SCRY_CHECK_LOGGED_IN);
    const { loggedIn } = await response.json();

    return { loggedIn };
  }

  render() {
    const { loggedIn } = this.props;

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
