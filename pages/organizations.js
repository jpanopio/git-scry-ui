import React, { Component } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import fetch from 'isomorphic-unfetch';
import { GIT_SCRY_GET_ORGANIZATIONS } from '../constants/endpoints';
import App from '../components/App';
import OrganizationCard from '../components/OrganizationCard';

class Organizations extends Component {
  static async getInitialProps(ctx) {
    const response = await fetch(
      GIT_SCRY_GET_ORGANIZATIONS,
      {
        headers: {
          cookie: ctx.req.headers.cookie,
        },
      },
    );

    const organizations = await response.json();

    return { organizations };
  }

  render() {
    const { organizations } = this.props;

    return (
      <App>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {organizations.map(
            (org) => {
              const {
                id,
                login,
                avatar_url: avatarUrl,
                description,
              } = org;

              return (
                <OrganizationCard
                  key={id}
                  id={id}
                  login={login}
                  avatarUrl={avatarUrl}
                  description={description}
                />
              );
            }
          )}
        </div>
      </App>
    );
  }
}

export default Organizations;
