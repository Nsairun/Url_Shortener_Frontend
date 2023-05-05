/* eslint-disable no-console */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
import { register } from '../../api/auth';

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
  align-items: center;
  justify-content: center;
`;

function Registration({ placeholder, name }) {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { target } = e;
    const data = {
      user_name: target.username.value,
      email_address: target.email.value,
      password: target.password.value,
      confirmpassword: target.confirmpassword.value,
    };
    console.log(data);
    if (data.password === data.confirmpassword) {
      await register(data);
      navigate('/');
    } else {
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 2500);
    }
  };

  return (
    <Home>
      <NavBar>
        <LogoHolder>
          <ShortLogo />
          <ShortUrl>ShorTY</ShortUrl>
        </LogoHolder>
        <ButtonHolder>
          <Button onClick={() => navigate('/login')}>Login</Button>
          <Button onClick={() => navigate('/')} $primary>
            Home
          </Button>
        </ButtonHolder>
      </NavBar>
      <Form onSubmit={handleSubmit}>
        <JoinHolder>
          <Join>Join ShorTY,</Join>
          <JoinSpan>Save Time</JoinSpan>
        </JoinHolder>
        <Ptag>Don't think about it, do it!</Ptag>
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
        {show && <ErrorTag>password confirmation failed</ErrorTag>}
        <FormBottom>
          <OnclickBtn type="submit">Create Account</OnclickBtn>
          <FormBottomR>
            <Ptag $primary>Already have an account </Ptag>
            <Button onClick={() => navigate('/login')} $secondry>
              Login
            </Button>
          </FormBottomR>
        </FormBottom>
      </Form>
      <OrgF />
    </Home>
  );
}

export default Registration;
