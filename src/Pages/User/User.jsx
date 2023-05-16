/* eslint-disable react/prop-types */
import React, { useContext, useState, useEffect } from 'react';

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
  Heading2,
} from '../../components/Atoms/Atoms';
import MyContext from '../../context';
import AuthGuard from '../../components/AuthGuard/AuthGuard';
import { deleteOneUrl } from '../../api/urlauth';
import { APP_NAME, SHORT_BASE_URL } from '../../constant';
import useAlert from '../../components/Custom/UseAlert';
import { removeFromSession } from '../../utils';

const User = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  height: fit-content;
  width: 100vw;
  position: relative;
  padding-bottom: 90px;
`;

const Deletebg = styled.div`
  display: flex;
  z-index: 1;
  background-color: #a39f9faa;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const DeleteForm = styled.div`
  display: flex;
  background-color: #fff;
  flex-direction: column;
  align-items: center;
  height: 20vh;
  width: 300px;
  max-width: 90vw;
  border-radius: 5px;
  justify-content: space-evenly;

  @media only screen and (max-width: 430px) {
    width: 250px;
  }
`;

function UserPage({ currentUser, userUrls }) {
  const navigate = useNavigate();
  const [delInfo, setDelInfo] = useState({ see: false, info: '' });
  const { handleSubmit, copy, setCopied, copyText } = useContext(MyContext);

  const { AlertComponent, displayAlert, myAlert } = useAlert();

  const logout = () => {
    localStorage.removeItem('token');
    sessionStorage.removeItem('userUrls');
    sessionStorage.removeItem('currentUrl');
    sessionStorage.removeItem('uri');
    navigate('/', { replace: true });
    window.location.reload();
  };

  const deleteUrl = async (id) => {
    await deleteOneUrl(id);
    removeFromSession(id);
    // window.location.reload(true);
  };

  const viewUrlStats = (urlId) => {
    sessionStorage.setItem('uri', urlId);
    navigate('/stats');
  };

  useEffect(() => {
    const lgi = +sessionStorage.getItem('lgi');
    if (!lgi) {
      sessionStorage.setItem('lgi', 1);
    }

    setCopied(() => {
      const holder = {};
      userUrls.forEach((urlObj) => {
        holder[`${urlObj.id}`] = false;
      });

      return holder;
    });
  }, []);

  return (
    <User>
      {myAlert.show && <AlertComponent />}
      <NavBar>
        <LogoHolder>
          <ShortLogo />
          <ShortUrl>ShorTY</ShortUrl>
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
          <InputField
            placeholder="Enter LongUrl"
            name="long_url"
            type="url"
            required
          />
          <Button type="submit">Shorten</Button>
        </LongUrlField>
      </MainHolder>
      <UrlHolder>
        {userUrls?.map((urldata) => (
          <UrlCard key={urldata.short_url}>
            <UrlTxt>{urldata.long_url}</UrlTxt>
            <UrlTxt id="shorturl" $primary>
              {APP_NAME + urldata.short_url}
            </UrlTxt>
            <CardBottom>
              <ViewIcon
                title="view url stats"
                onClick={() => viewUrlStats(urldata.id || urldata.short_url)}
              />
              <UrlTxt $secondry>
                created at {new Date(urldata.createdAt).toLocaleTimeString()}
              </UrlTxt>
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
              <DeleteIcon
                title="delete url"
                onClick={() => setDelInfo({ see: true, info: urldata.id })}
              />
            </CardBottom>
          </UrlCard>
        ))}
      </UrlHolder>
      <OrgF />
      {delInfo.see && (
        <Deletebg>
          <DeleteForm>
            <Heading2>Are you sure you want to delete this Url.</Heading2>
            <Ptag $tertiary>
              This will delete this Url permently. you can not undo this action
            </Ptag>
            <LongUrlField $primary>
              <Button
                $tertiary
                onClick={() => setDelInfo((prev) => ({ ...prev, see: false }))}
              >
                Cancel
              </Button>
              <Button $quatinary onClick={() => deleteUrl(delInfo.info)}>
                Delete
              </Button>
            </LongUrlField>
          </DeleteForm>
        </Deletebg>
      )}
    </User>
  );
}

export default AuthGuard(UserPage);
