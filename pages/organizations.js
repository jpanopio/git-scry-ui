import React, { Component } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import fetch from 'isomorphic-unfetch';
import { GIT_SCRY_GET_ORGANIZATIONS, GIT_SCRY_GET_USER_INFO } from '../constants/endpoints';
import App from '../components/App';
import OrganizationCard from '../components/OrganizationCard';
import UserInfo from '../components/UserInfo';

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
    const user_info_response = await fetch(
      GIT_SCRY_GET_USER_INFO,
      {
        headers: {
          cookie: ctx.req.headers.cookie,
        },
      },
    );
    const organizations = await response.json();
    const user_info = await user_info_response.json();
    return { organizations, user_info };
  }

  render() {
    const { organizations, user_info } = this.props;

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
        <Container>
          <div
            style={{
              margin: '-166px -5px',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'flex-start',
            }}
          >
            <UserInfo
              key={user_info.id}
              id={user_info.id}
              login={user_info.login}
              avatarUrl={user_info.avatar_url}
              company={user_info.company}
              location={user_info.location}
              bio={user_info.bio}
            />
          </div>
        </Container>
      </App>
    );
  }
}

export default Organizations;
