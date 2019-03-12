import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import querystring from 'querystring';
import App from '../components/App';
import Card from '../components/Card';
import PullRequest from '../components/PullRequest';
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
        <Card>
          {pullRequests.map(
            (pullRequest) => {
              const {
                title,
                body,
              } = pullRequest;

              return (
                <PullRequest
                  title={title}
                  body={body}
                />
              );
            }
          )}
        </Card>
      </App>
    );
  }
}

export default PullRequests;
