import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import Card from './Card';
import { COLOR_PRIMARY, COLOR_FONT_PRIMARY,COLOR_CARD_BORDER } from '../constants/colors';

const StyledImage = styled.img`
  width: 4.5rem;
  height: 4.5rem;
`;

const StyleFont = styled.h1`
  font-size: 17px;
  color: ${COLOR_CARD_BORDER};
`;

const StyledTitle = styled.h1`
  border: 1.2px;
  border-style:solid;
  border-color:${COLOR_CARD_BORDER};
  padding: 0.5em;
  font-size: 17px;
  color: ${COLOR_PRIMARY};
`;

const StyledUser = styled.h1`
  font-size: 28px;
  color: ${COLOR_PRIMARY};
`;

const StyledLink = styled.a`
  color: ${COLOR_PRIMARY};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const UserInfo = ({
  id,
  login,
  avatarUrl,
  company,
  location,
  bio,
}) => (
  <Card s={{ width: '17rem', height: '27rem' }}>
    <Container>
      <Row>
        <Col>
          <StyledLink href={`https://github.com/${login}`}>
            <StyledImage src={avatarUrl}/>
          </StyledLink>
        </Col>
        <Col>
          <StyledUser
            style={{
              margin: '25px 0px 30px -20px',
            }}
          >User Info</StyledUser>
        </Col>
      </Row>
        <StyleFont>Name: </StyleFont>
        <StyledTitle>{login}</StyledTitle>
        <StyleFont>Company: </StyleFont>
        <StyledTitle>{company}</StyledTitle>
        <StyleFont>Location: </StyleFont>
        <StyledTitle>{location}</StyledTitle>
        <StyleFont>Bio: </StyleFont>
        <StyledTitle>{bio}</StyledTitle>
    </Container>
  </Card>
);

export default UserInfo;
