import React from 'react';
import styled from 'styled-components';
import OrgF, { NavBar, MainHolder } from '../../components/Organisms/Organisms';
import {
  Button,
  InputField,
  Join,
  JoinSpan,
  Ptag,
  ShortLogo,
  ShortUrl,
} from '../../components/Atoms/Atoms';
import {
  ButtonHolder,
  JoinHolder,
  LogoHolder,
  LongUrlField,
} from '../../components/Molecules/Molecules';

const Home = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

function HomePage() {
  return (
    <Home>
      <NavBar>
        <LogoHolder>
          <ShortLogo />
          <ShortUrl>ShorTY</ShortUrl>
        </LogoHolder>
        <ButtonHolder>
          <Ptag>Hi! Alaric </Ptag>
          <Button>Logout</Button>
        </ButtonHolder>
      </NavBar>
      <MainHolder>
        <JoinHolder>
          <Join>Shortened and Readable Urls </Join>
          <JoinSpan>Made Free</JoinSpan>
        </JoinHolder>
        <Ptag>Shorten your long Url in the input field below!</Ptag>
        <LongUrlField>
          <InputField placeholder="Enter long Url" name="longurl" />
          <Button>Shorten</Button>
        </LongUrlField>
      </MainHolder>
      <OrgF />
    </Home>
  );
}

export default HomePage;
