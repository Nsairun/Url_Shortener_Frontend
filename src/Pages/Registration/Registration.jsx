/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import {
  Join,
  JoinSpan,
  ShortLogo,
  ShortUrl,
  Button,
  InputField,
  Label,
  OnclickBtn,
  Ptag,
} from '../../components/Atoms/Atoms';
import {
  LogoHolder,
  ButtonHolder,
  JoinHolder,
  PassHolder,
  PassConfirm,
  FormBottom,
  FormBottomR,
} from '../../components/Molecules/Molecules';

import OrgF, { NavBar, Form } from '../../components/Organisms/Organisms';

const RegMain = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

function Registration({ placeholder, name }) {
  return (
    <RegMain>
      <NavBar>
        <LogoHolder>
          <ShortLogo />
          <ShortUrl>UrlShortener</ShortUrl>
        </LogoHolder>
        <ButtonHolder>
          <Button>Login</Button>
          <Button $primary>Sign Up</Button>
        </ButtonHolder>
      </NavBar>
      <Form>
        <JoinHolder>
          <Join>Join Shortly,</Join>
          <JoinSpan>Save Time</JoinSpan>
        </JoinHolder>
        <Ptag>Don't think about it, do it!</Ptag>
        <Label>UserName</Label>
        <InputField placeholder="username" name="username" />
        <Label>Email</Label>
        <InputField placeholder="emailAdress" name="email" />
        <PassConfirm>
          <PassHolder>
            <Label>Password</Label>
            <InputField placeholder="password" name="password" />
          </PassHolder>
          <PassHolder>
            <Label>Password Confirm</Label>
            <InputField placeholder="confirm password" name="confirmpassword" />
          </PassHolder>
        </PassConfirm>
        <FormBottom>
          <OnclickBtn>Create Account</OnclickBtn>
          <FormBottomR>
            <Ptag $primary>Already have an account </Ptag>
            <Button $secondry>Login</Button>
          </FormBottomR>
        </FormBottom>
      </Form>
      <OrgF />
    </RegMain>
  );
}

export default Registration;
