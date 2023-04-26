/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {
  Join,
  JoinSpan,
  OnclickBtn,
  InputField,
  Label,
  Button,
  Ptag,
  ShortUrl,
  ShortLogo,
} from '../../components/Atoms/Atoms';
import {
  JoinHolder,
  FormBottomR,
  LogoHolder,
  ButtonHolder,
} from '../../components/Molecules/Molecules';
import OrgF, { Form, NavBar } from '../../components/Organisms/Organisms';

const LogMain = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const FormSec = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: center;
  width: 50%;
  margin: auto;
`;

function Login({ placeholder, name, required, type }) {
  const navigate = useNavigate();
  const toSignUp = () => {
    navigate('/register');
  };
  const toLogIn = () => {
    navigate('/register');
  };

  return (
    <LogMain>
      <NavBar>
        <LogoHolder>
          <ShortLogo />
          <ShortUrl>UrlShortener</ShortUrl>
        </LogoHolder>
        <ButtonHolder>
          <Button onClick={toLogIn}>Login</Button>
          <Button onClick={toSignUp} $primary>
            Sign Up
          </Button>
        </ButtonHolder>
      </NavBar>
      <FormSec>
        <JoinHolder>
          <Join>Get</Join>
          <JoinSpan>Started</JoinSpan>
          <Join>Today</Join>
        </JoinHolder>
        <Ptag>
          Hey buddy! Listen, login to your account now so that you can manage
          all your shorten links more succesfully.
        </Ptag>
        <Form>
          <Label>Email</Label>
          <InputField placeholder="Enter EmailAdress" name="email" required />
          <Label>Password</Label>
          <InputField placeholder="Enter Password" name="password" required />
          <OnclickBtn type="submit" $secondry>
            Sign In
          </OnclickBtn>
          <FormBottomR>
            <Ptag>No Account </Ptag>
            <Button onClick={toSignUp} $secondry>
              Sign Up
            </Button>
          </FormBottomR>
        </Form>
      </FormSec>
      <OrgF />
    </LogMain>
  );
}

export default Login;
