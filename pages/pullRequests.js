import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import querystring from 'querystring';
import {
  Container,
  Row,
  Col,
} from 'react-grid-system';
import App from '../components/App';
import Card from '../components/Card';
import PullRequest from '../components/PullRequest';
import Button from '../components/Button';
import { GIT_SCRY_GET_PULL_REQUESTS } from '../constants/endpoints';

class PullRequests extends Component {
  static async getInitialProps(ctx) {
    const params = ctx.req.url.split('?')[1];
    const { orgName } = querystring.parse(params);

    const response = await fetch(
      `${GIT_SCRY_GET_PULL_REQUESTS}?orgName=${orgName}`,
      {
        headers: {
          cookie: ctx.req.headers.cookie,
        },
      },
    );

    const result = await response.json();
    const {
      total_count: totalCount,
      items: pullRequests,
    } = result;

    return { totalCount, pullRequests };
  }

  render() {
    const { totalCount, pullRequests } = this.props;

    return (
      <App>
        <Container>
          <Row>
            <Col md={10}>
              <Card>
                {pullRequests.map(
                  (pullRequest) => {
                    const {
                      id,
                      title,
                      body,
                    } = pullRequest;

                    return (
                      <PullRequest
                        key={id}
                        title={title}
                        body={body}
                      />
                    );
                  }
                )}
              </Card>
            </Col>
            <Col>
              <Button>
                EXPORT
              </Button>
            </Col>
          </Row>
        </Container>
      </App>
    );
  }
}

export default PullRequests;
