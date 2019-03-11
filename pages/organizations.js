import React, { Component } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import App from '../components/App';
import OrganizationCard from '../components/OrganizationCard';

class Organizations extends Component {
  static async getInitialProps() {
    const organizations = [
      {
        "id": 2824164,
        "login": "hackreactor",
        "avatar_url": "https://avatars3.githubusercontent.com/u/2824164?v=4",
        "description": ""
      },
      {
        "id": 4503814,
        "login": "narvar",
        "avatar_url": "https://avatars0.githubusercontent.com/u/4503814?v=4",
        "description": ""
      }
    ];

    return { organizations };
  }

  render() {
    const { organizations } = this.props;

    return (
      <App>
        <div
          style={{
            paddingTop: '4rem',
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
