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
import { APP_NAME, SHORT_BASE_URL } from '../../constant';
import useAlert from '../../components/Custom/UseAlert';

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

  const { AlertComponet, displayAlert, alertMsg } = useAlert();

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/', { replace: true });
    window.location.reload();
  };

  const deleteUrl = async (id) => {
    await deleteOneUrl(id);
  };

  const viewUrlStats = (url) => {
    sessionStorage.setItem('currentUrl', JSON.stringify(url));
    navigate('/stats');
  };

  return (
    <User>
      {alertMsg.show && <AlertComponet />}
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
          <Join $primary>{currentUser.user_name}</Join>
        </JoinHolder>
        <Ptag>What will you like to shorten today</Ptag>
        <LongUrlField onSubmit={(e) => handleSubmit(e, currentUser.id)}>
          <InputField placeholder="Enter LongUrl" name="long_url" type="url" />
          <Button type="submit">Shorten</Button>
        </LongUrlField>
      </MainHolder>
      <UrlHolder>
        {userUrls?.map((urldata) => (
          <UrlCard key={urldata.id}>
            <UrlTxt>{urldata.long_url}</UrlTxt>
            <UrlTxt id="shorturl" $primary>
              ${APP_NAME}${urldata.short_url}
            </UrlTxt>
            <CardBottom>
              <ViewIcon onClick={() => viewUrlStats(urldata)} />
              <UrlTxt $secondry>
                {new Date(urldata.createdAt).toLocaleTimeString()}
              </UrlTxt>
              {copy ? (
                <CopyIconCopied />
              ) : (
                <CopyIcon
                  onClick={() => {
                    copyText(`${SHORT_BASE_URL}${urldata.short_url}`);
                    displayAlert('link copied');
                  }}
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
