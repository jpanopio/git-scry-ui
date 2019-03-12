import React, { Component } from 'react';
import {
  ScreenClassProvider,
  Container,
  Row,
  Col,
} from 'react-grid-system';
import fetch from 'isomorphic-unfetch';
import {
  GIT_SCRY_CHECK_LOGGED_IN,
  GIT_SCRY_LOGIN_URL,
} from '../constants/endpoints';
import App from '../components/App';
import Card from '../components/Card';

class Index extends Component {
  static async getInitialProps(ctx) {
    const response = await fetch(
      GIT_SCRY_CHECK_LOGGED_IN,
      {
        headers: {
          cookie: ctx.req.headers.cookie,
        },
      },
    );

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
                <a href={GIT_SCRY_LOGIN_URL}>WOAH</a>
              </Col>
            </Row>
          </Card>
        </Container>
      </App>
    );
  }
}

export default Index;
