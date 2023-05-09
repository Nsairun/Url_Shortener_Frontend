/* eslint-disable react/prop-types */
import React, { useContext } from 'react';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import OrgF, {
  MainHolder,
  NavBar,
  UrlHolder,
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
  JoinSpan,
  Ptag,
  ShortLogo,
  ShortUrl,
  UrlTxt,
  ViewIcon,
  CopyIcon,
  DeleteIcon,
  CopyIconCopied,
} from '../../components/Atoms/Atoms';
import MyContext from '../../context';
import AuthGuard from '../../components/AuthGuard/AuthGuard';
import { deleteOneUrl } from '../../api/urlauth';
import { SHORT_BASE_URL } from '../../constant';

console.log('this shot_url_base', SHORT_BASE_URL);

const User = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: relative;
`;

function UserPage({ currentUser, userUrls }) {
  const navigate = useNavigate();
  const { handleSubmit, copy, copyText } = useContext(MyContext);
  const logout = () => {
    localStorage.removeItem('token');
    navigate('/', { replace: true });
    window.location.reload();
  };

  const deleteUrl = async (id) => {
    console.log(id);
    await deleteOneUrl(id);
  };

  const viewUrlStats = (url) => {
    sessionStorage.setItem('currentUrl', JSON.stringify(url));
    navigate('/stats');
  };

  return (
    <User>
      <NavBar>
        <LogoHolder>
          <ShortLogo />
          <ShortUrl>ShorTy</ShortUrl>
        </LogoHolder>
        <ButtonHolder>
          <Ptag $secondry>Hi {currentUser.user_name}</Ptag>
          <Button onClick={logout} $primary>
            LogOut
          </Button>
        </ButtonHolder>
      </NavBar>
      <MainHolder>
        <JoinHolder>
          <Join>Welcome my friend</Join>
          <JoinSpan>{currentUser.user_name}</JoinSpan>
        </JoinHolder>
        <Ptag>What will you like to shorten today</Ptag>
        <LongUrlField
          onSubmit={(e) => {
            handleSubmit(e, currentUser.id);
            window.location.reload();
          }}
        >
          <InputField placeholder="Enter LongUrl" name="long_url" type="url" />
          <Button type="submit">Shorten</Button>
        </LongUrlField>
      </MainHolder>
      <UrlHolder>
        {userUrls?.map((urldata) => (
          <UrlCard key={urldata.id}>
            <UrlTxt>{urldata.long_url}</UrlTxt>
            <UrlTxt id="shorturl" $primary>
              `${SHORT_BASE_URL}${urldata.short_url}`
            </UrlTxt>
            <CardBottom>
              <ViewIcon onClick={() => viewUrlStats(urldata)} />
              <UrlTxt $secondry>6 seconds ago</UrlTxt>
              {copy ? (
                <CopyIconCopied />
              ) : (
                <CopyIcon
                  onClick={() =>
                    copyText(`${SHORT_BASE_URL}${urldata.short_url}`)
                  }
                />
              )}
              <DeleteIcon
                onClick={() => {
                  deleteUrl(urldata.id);
                  window.location.reload(true);
                }}
              />
            </CardBottom>
          </UrlCard>
        ))}
      </UrlHolder>
      <OrgF />
    </User>
  );
}

export default AuthGuard(UserPage);
