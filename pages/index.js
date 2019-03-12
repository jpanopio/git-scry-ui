import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import styled from 'styled-components';
import {
  ScreenClassProvider,
  Container,
  Row,
  Col,
} from 'react-grid-system';
import Header from '../components/Header';
import App from '../components/App';
import Card from '../components/Card';
import CrystalBall from '../components/CrystalBall';
import {
  COLOR_CARD_BACKGROUND,
  COLOR_CARD_BORDER,
  COLOR_PRIMARY,
  COLOR_FONT_PRIMARY,
  COLOR_MAIN_BACKGROUND
} from '../constants/colors';
import {
  GIT_SCRY_CHECK_LOGGED_IN,
  GIT_SCRY_LOGIN_URL,
} from '../constants/endpoints';

const StyledTitle = styled.h1`
  font-size: 1.5rem;
  color: ${COLOR_PRIMARY};
`;

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
          <Card s={{ margin: '3rem 1rem' }}>
            <Row>
              <Col>
                <StyledTitle>Why Git Scry?</StyledTitle>
                <p>During your company's self-reflection and review periods,
                Git Scry allows you to simply click a few buttons to export
                your work history during the past cycle in a useful format.
                Currently, engineers spend at least couple of hours writing their
                self reflections. Git Scry can save a company these countless
                engineering hours, encourage descriptive pull request titles and descriptions,
                and help engineers set sights on future areas for growth and development.</p>
                <StyledTitle>How to Use?</StyledTitle>
                <p>Click the button below, log in to github and select the repo and PRs you want to
                include in your self-reflection. It's that easy!</p>
                <a href={GIT_SCRY_LOGIN_URL}>
                  <button
                    style={{
                      width: '100%',
                      fontSize: 20,
                      color: COLOR_FONT_PRIMARY,
                      height: '50px',
                      margin: '15px 0',
                      backgroundColor: COLOR_PRIMARY,
                    }}
                  >
                    Log in with GitHub
                  </button>
                </a>
              </Col>
              <Col>
                <CrystalBall />
              </Col>
            </Row>
          </Card>
        </Container>
      </App>
    );
  }
}

export default Index;
