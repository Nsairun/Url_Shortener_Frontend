/* eslint-disable no-plusplus */
/* eslint-disable no-console */
import React, { useContext } from 'react';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import OrgF, {
  MainHolder,
  NavBar,
  UrlHolder,
  PhraseHolder,
} from '../../components/Organisms/Organisms';

import {
  ButtonHolder,
  JoinHolder,
  LogoHolder,
  UrlCard,
  CardBottom,
  LongUrlField,
} from '../../components/Molecules/Molecules';

import {
  Button,
  InputField,
  Join,
  Ptag,
  ShortLogo,
  ShortUrl,
  UrlTxt,
  ViewIcon,
  CopyIconCopied,
  PharseBtn,
  PharseTxt,
} from '../../components/Atoms/Atoms';
import MyContext from '../../context';
import { SHORT_BASE_URL } from '../../constant';

const Home = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: relative;
`;

function HomePage() {
  const { urls, handleSubmit, copy, copyText, setPhrase, phrase } =
    useContext(MyContext);
  const navigate = useNavigate();
  return (
    <Home>
      <NavBar>
        <LogoHolder>
          <ShortLogo />
          <ShortUrl>ShorTy</ShortUrl>
        </LogoHolder>
        <ButtonHolder>
          <Button onClick={() => navigate('login')}>Login</Button>
          <Button onClick={() => navigate('register')} $primary>
            Sign Up
          </Button>
        </ButtonHolder>
      </NavBar>
      <MainHolder>
        <JoinHolder>
          <Join>Shortened and Readable URLs</Join>
          <Join $primary>Made Free</Join>
        </JoinHolder>
        <Ptag>Shorten your long URL in the field below</Ptag>
        <LongUrlField onSubmit={handleSubmit}>
          <InputField placeholder="Enter LongUrl" name="long_url" type="url" />
          <Button type="submit">Shorten</Button>
        </LongUrlField>
      </MainHolder>
      <UrlHolder>
        {urls?.map((urldata) => (
          <UrlCard>
            <UrlTxt>{urldata.long_url}</UrlTxt>
            <UrlTxt id="shorturl" $primary>
              `${SHORT_BASE_URL}${urldata.short_url}`
            </UrlTxt>
            <CardBottom>
              <ViewIcon />
              <UrlTxt $secondry>6 seconds ago</UrlTxt>
              <CopyIconCopied
                copy={copy}
                onClick={() =>
                  copyText(`${SHORT_BASE_URL}${urldata.short_url}`)
                }
              />
            </CardBottom>
          </UrlCard>
        ))}
      </UrlHolder>
      <OrgF />
      {phrase && (
        <PhraseHolder>
          <PharseTxt>
            Would you like to keep track of clicks on your Url?
          </PharseTxt>
          <PharseTxt $primary>
            Its an optional something fam!! Dont think too much about it.
          </PharseTxt>
          <PharseBtn
            onClick={() => {
              navigate('/register');
              setPhrase(false);
            }}
          >
            Yes, lets do it.
          </PharseBtn>
          <PharseBtn onClick={() => setPhrase(false)} $primary>
            No thanks, im good.
          </PharseBtn>
        </PhraseHolder>
      )}
    </Home>
  );
}

export default HomePage;
