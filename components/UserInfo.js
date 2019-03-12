import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import Card from './Card';
import { COLOR_PRIMARY, COLOR_FONT_PRIMARY,COLOR_CARD_BORDER } from '../constants/colors';

const StyledImage = styled.img`
  width: 4.25rem;
  height: 4.25rem;
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
          <StyledImage src={avatarUrl}/>
        </Col>
        <Col>
          <StyledUser
            style={{
              margin: '25px 0px 30px -20px',
            }}
          >User Info</StyledUser>
        </Col>
      </Row>
        <StyleFont>Name: <StyledTitle>{login}</StyledTitle></StyleFont>
        <StyleFont>Company: <StyledTitle>{company}</StyledTitle></StyleFont>
        <StyleFont>Location: <StyledTitle>{location}</StyledTitle></StyleFont>
        <StyleFont>Bio: <StyledTitle>{bio}</StyledTitle></StyleFont>
    </Container>
  </Card>
);

export default UserInfo;
