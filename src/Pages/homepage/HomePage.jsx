import React from 'react';
import styled from 'styled-components';
import { NavBar } from '../../components/Organisms/Organisms';
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
  justify-content: center;
  height: 60vh;
  width: 100vw;
`;

function HomePage() {
  // function Registration({ placeholder, name }) {
  //   const navigate = useNavigate();

  //   const toLogin = () => {
  //     navigate('/login');
  //   };

  //   const toSignUp = () => {
  //     navigate('/register');
  //   };
  // }
  return (
    <Home>
      <NavBar>
        <LogoHolder>
          <ShortLogo />
          <ShortUrl>UrlShortener</ShortUrl>
        </LogoHolder>
        <ButtonHolder>
          <Ptag>Hi! Alaric </Ptag>
          <Button>Logout</Button>
        </ButtonHolder>
      </NavBar>
      <JoinHolder>
        <Join>Shortened and Readable Urls </Join>
        <JoinSpan>Made Free</JoinSpan>
      </JoinHolder>
      <Ptag>Shorten your long Url in the input field below!</Ptag>
      <LongUrlField>
        <InputField placeholder="Enter long Url" />
        <Button>Shorten</Button>
      </LongUrlField>
    </Home>
  );
}

export default HomePage;
