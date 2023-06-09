import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';
import { login } from '../../api/auth';
import { saveToken } from '../../utils';
import {
  Join,
  OnclickBtn,
  InputField,
  Label,
  Button,
  Ptag,
  ShortUrl,
  LinkPage,
  ShortLogo,
  LoadingP,
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
  width: 98vw;
  max-width: 800px;
  margin: auto;
`;

function Login() {
  const [show, setShow] = useState({ err: false, loading: false });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { target } = e;
    const user = {
      email_address: target.email.value,
      password: target.password.value,
    };

    setShow(() => ({ err: false, loading: true }));
    try {
      const { data } = await login(user.email_address, user.password);
      saveToken(data.token);
      navigate('/user', { replace: true });
    } catch {
      setShow((prev) => ({ ...prev, err: 'Invalid username or password' }));
    } finally {
      setShow((prev) => ({ ...prev, loading: false }));
    }
  };

  return (
    <LogMain onSubmit={handleSubmit}>
      <NavBar>
        <LogoHolder>
          <ShortLogo />
          <ShortUrl>ShorTY</ShortUrl>
        </LogoHolder>
        <ButtonHolder>
          <Button type="button" onClick={() => navigate('/register')}>
            Sign Up
          </Button>
          <Button type="button" onClick={() => navigate('/')} $primary>
            Home
          </Button>
        </ButtonHolder>
      </NavBar>

      <FormSec>
        <JoinHolder>
          <Join>Get</Join>
          <Join $primary>Started</Join>
          <Join>Today</Join>
        </JoinHolder>
        <Ptag>
          Hey buddy! Listen, login to your account now so that you can manage
          all your shorten links more succesfully.
        </Ptag>

        <Form>
          {show.loading && <LoadingP>Loading...</LoadingP>}
          {show.err && <Ptag $error> {show.err || 'Error...'}</Ptag>}
          <Label>Email</Label>
          <InputField placeholder="Enter EmailAdress" name="email" required />
          <Label>Password</Label>
          <InputField
            placeholder="Enter Password"
            type="password"
            name="password"
            required
          />
          <OnclickBtn type="submit" $secondry>
            Sign In
          </OnclickBtn>
          <FormBottomR>
            <Ptag $normal>
              No Account{' '}
              <LinkPage onClick={() => navigate('/register')}>Sign Up</LinkPage>{' '}
            </Ptag>
          </FormBottomR>
        </Form>
      </FormSec>
      <OrgF />
    </LogMain>
  );
}

export default Login;
