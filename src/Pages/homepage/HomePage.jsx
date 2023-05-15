/* eslint-disable react/prop-types */
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
  CopyIcon,
  UrlTxt,
  ViewIcon,
  CopyIconCopied,
  PharseBtn,
  PharseTxt,
} from '../../components/Atoms/Atoms';
import MyContext from '../../context';
import { APP_NAME, SHORT_BASE_URL } from '../../constant';
import useAlert from '../../components/Custom/UseAlert';
import HomeGaurd from '../../components/AuthGuard/HomeGaurd';

const Home = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  height: fit-content;
  width: 100vw;
  position: relative;
`;

function HomePage({ urls }) {
  const { handleSubmit, copy, copyText, setPhrase, phrase } =
    useContext(MyContext);
  const { AlertComponent, displayAlert, myAlert } = useAlert();
  const navigate = useNavigate();
  return (
    <Home>
      {myAlert.show && <AlertComponent />}
      <NavBar>
        <LogoHolder>
          <ShortLogo />
          <ShortUrl>ShorTY</ShortUrl>
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
        <Ptag>
          Copy your shortened link by clicking the icon <CopyIcon />
        </Ptag>
        <LongUrlField onSubmit={handleSubmit}>
          <InputField
            placeholder="Enter Long_Url"
            name="long_url"
            type="url"
            required
          />
          <Button type="submit">Shorten</Button>
        </LongUrlField>
      </MainHolder>
      <UrlHolder>
        {urls?.map((urldata) => (
          <UrlCard key={urldata.short_url}>
            <UrlTxt>{urldata.long_url}</UrlTxt>
            <UrlTxt id="shorturl" $primary>
              {APP_NAME + urldata.short_url}
            </UrlTxt>
            <CardBottom>
              <ViewIcon
                title="signup  to view url stats"
                onClick={() => setPhrase(true)}
              />
              <UrlTxt $secondry>created at {urldata.createdAt}</UrlTxt>
              {copy[`${urldata.short_url}`] ? (
                <CopyIconCopied />
              ) : (
                <CopyIcon
                  title="copy url"
                  onClick={() => {
                    copyText(
                      `${SHORT_BASE_URL}${urldata.short_url}`,
                      urldata.short_url
                    );
                    displayAlert('link copied');
                  }}
                />
              )}
            </CardBottom>
          </UrlCard>
        ))}
      </UrlHolder>
      <OrgF />
      {phrase && (
        <PhraseHolder>
          <PharseTxt>
            Would you like to keep track of each click on your Url?
          </PharseTxt>
          <PharseTxt $primary>
            know how many people have used it and where. make a choice!!
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

export default HomeGaurd(HomePage);
