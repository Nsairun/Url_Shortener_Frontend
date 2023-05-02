import React from 'react';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { NavBar } from '../../components/Organisms/Organisms';

import {
  ButtonHolder,
  JoinHolder,
  LogoHolder,
} from '../../components/Molecules/Molecules';
import {
  Button,
  InputField,
  Join,
  JoinSpan,
  Ptag,
  ShortLogo,
  ShortUrl,
} from '../../components/Atoms/Atoms';

const RegMain2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 100vh;
  width: 100vw;
`;

const LongUrlField = styled.div`
  width: 30vw;
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 25px;
`;

function HomePage() {
  const navigate = useNavigate();
  return (
    <div>
      <RegMain2>
        <NavBar>
          <LogoHolder>
            <ShortLogo />
            <ShortUrl>UrlShortener</ShortUrl>
          </LogoHolder>
          <ButtonHolder>
            <Button onClick={() => navigate('login')}>Login</Button>
            <Button onClick={() => navigate('register')} $primary>
              Sign Up
            </Button>
          </ButtonHolder>
        </NavBar>

        <JoinHolder>
          <Join>Shortened and Readable URLs</Join>
          <JoinSpan>Made Free</JoinSpan>
        </JoinHolder>
        <Ptag>Shorten your long URL in the field below</Ptag>
        <LongUrlField>
          <InputField placeholder="Enter LongUrl" name="url" type="url" />
          <Button onClick={() => navigate('')}>Shorten</Button>
        </LongUrlField>
      </RegMain2>
    </div>
  );
}

export default HomePage;
