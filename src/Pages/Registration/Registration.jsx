import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import {
  Join,
  ShortLogo,
  ShortUrl,
  Button,
  InputField,
  Label,
  OnclickBtn,
  LinkPage,
  Ptag,
  LoadingP,
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
import { login, register } from '../../api/auth';
import { saveToken } from '../../utils';

const Home = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;
const ErrorTag = styled.div`
  width: 100%;
  color: red;
  display: flex;
  min-height: 100vh;
  height: fit-content;
  align-items: center;
  justify-content: center;
`;

function Registration() {
  const navigate = useNavigate();
  const [show, setShow] = useState({ err: false, loading: false });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShow(() => ({ err: false, loading: true, erMsg: false }));
    const { target } = e;
    const userData = {
      user_name: target.username.value,
      email_address: target.email.value,
      password: target.password.value,
      confirmpassword: target.confirmpassword.value,
    };

    if (userData.password !== userData.confirmpassword) {
      setShow(() => ({ err: true, loading: false }));
      setTimeout(() => {
        setShow((prev) => ({ ...prev, err: false }));
      }, 2500);

      return;
    }

    await register(userData)
      .then(() =>
        login(userData.email_address, userData.password).then(({ data }) => {
          saveToken(data.token);
          navigate('/user');
        })
      )
      .catch(() =>
        setShow((prev) => ({ ...prev, erMsg: 'COULD_N0T_CREATE_USER' }))
      )
      .finally(() =>
        setShow((prev) => ({ ...prev, err: false, loading: false }))
      );
  };

  return (
    <Home>
      <NavBar>
        <LogoHolder>
          <ShortLogo />
          <ShortUrl>ShorTY</ShortUrl>
        </LogoHolder>
        <ButtonHolder>
          <Button type="button" onClick={() => navigate('/login')}>
            Login
          </Button>
          <Button type="button" onClick={() => navigate('/')} $primary>
            Home
          </Button>
        </ButtonHolder>
      </NavBar>

      <Form onSubmit={handleSubmit}>
        <JoinHolder>
          <Join>Join ShorTY,</Join>
          <Join $primary>Make It Short!</Join>
        </JoinHolder>
        {show.loading && <LoadingP>loading...</LoadingP>}
        {show.erMsg && <Ptag $error>{show.erMsg}</Ptag>}
        <Label>UserName</Label>
        <InputField placeholder="Enter Username" name="username" required />
        <Label>Email</Label>
        <InputField placeholder="Enter EmailAdress" name="email" required />
        <PassConfirm>
          <PassHolder>
            <Label>Password</Label>
            <InputField
              placeholder="Enter Password"
              type="password"
              name="password"
              required
            />
          </PassHolder>
          <PassHolder>
            <Label>Password Confirm</Label>
            <InputField
              placeholder="Confirm Password"
              type="password"
              name="confirmpassword"
              required
            />
          </PassHolder>
        </PassConfirm>
        {show.err && <ErrorTag>password confirmation failed</ErrorTag>}
        <FormBottom>
          <OnclickBtn type="submit">Create Account</OnclickBtn>
          <FormBottomR>
            <Ptag $primary>
              Already have an account{' '}
              <LinkPage onClick={() => navigate('/login')}>Login</LinkPage>{' '}
            </Ptag>
          </FormBottomR>
        </FormBottom>
      </Form>
      <OrgF />
    </Home>
  );
}

export default Registration;
