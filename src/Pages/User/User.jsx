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
  Heading2,
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
  width: 30vw;
  border-radius: 5px;
  justify-content: space-evenly;

  @media only screen and (max-width: 430px) {
    width: 250px;
  }
`;

function UserPage({ currentUser, userUrls }) {
  const navigate = useNavigate();
  const [see, setsee] = useState(false);
  const [info, setinfo] = useState();
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
                  setsee(true);
                  setinfo(urldata.id);
                }}
              />
            </CardBottom>
          </UrlCard>
        ))}
      </UrlHolder>
      <OrgF />
      {see && (
        <Deletebg>
          <DeleteForm>
            <Heading2>Are you sure you want to delete this Url</Heading2>
            <Ptag $tertiary>
              This will delete this Url permently. you can not undo this action
            </Ptag>
            <LongUrlField $primary>
              <Button $tertiary onClick={() => setsee(!see)}>
                Cancel
              </Button>
              <Button
                $quatinary
                onClick={() => {
                  deleteUrl(info);
                  window.location.reload(true);
                }}
              >
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
