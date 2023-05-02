/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';
import { login } from '../../api/auth';
import { saveToken } from '../../utils';
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

function Login({ placeholder, name }) {
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { target } = e;
    const user = {
      email_address: target.email.value,
      password: target.password.value,
    };
    setIsloading(true);
    setError('');
    try {
      const { data } = await login(user.email_address, user.password);
      saveToken(data.token);
      navigate('/');
    } catch (e) {
      if (e.response.status === 401) {
        setError('Invalid username or password');
      }
    } finally {
      setIsloading(false);
    }
  };
  const toSignUp = () => {
    navigate('/register');
  };
  const toLogIn = () => {
    navigate('/register');
  };

  return (
    <LogMain onSubmit={handleSubmit}>
      <NavBar>
        <LogoHolder>
          <ShortLogo />
          <ShortUrl>UrlShortener</ShortUrl>
          {isLoading && <Ptag>Loading...</Ptag>}
          {error && <Ptag>Error...</Ptag>}
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
        <Ptag $secondry>
          Hey buddy! Listen, login to your account now so that you can manage
          all your shorten links more succesfully
        </Ptag>
        <Form>
          <Label>Email</Label>
          <InputField placeholder="Enter EmailAdress" name="email" required />
          <Label>Password</Label>
          <InputField placeholder="Enter Password" name="password" required />
          <OnclickBtn $secondry>Sign In</OnclickBtn>
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
