/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';
import React from 'react';
import { SocialF, SocialT, ShortLogo, ShortUrl, Ptag } from '../Atoms/Atoms';
import { FooterL, FooterR, LogoHolder } from '../Molecules/Molecules';

export const NavBar = styled.div`
  display: flex;
  padding: 15px 80px;
  justify-content: space-between;
  align-items: center;
  background: #1b1c2d70;
  top: 0;
  background-color: #1b1c2d70;
  width: 100vw;
  @media only screen and (max-width: 768px) {
    padding: 10px 25px;
  }
`;

export const Form = styled.form`
  align-self: center;
  justify-self: center;
  width: 95vw;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: auto;
  text-align: left;
  padding: 10px 20px;
  border-radius: 10px;
  min-height: fit-content;
  background-color: #1f2937b1;
  max-width: 600px;
  @media only screen and (max-width: 768px) {
    gap: 10px;
    padding: 8px 15px;
  }
`;

export const Footer = styled.div`
  display: flex;
  margin-top: auto;
  padding: 12px 80px;
  justify-content: space-between;
  align-items: center;
  bottom: 0;
  justify-self: flex-end;
  width: 100vw;
  background-color: #1b1c2d70;
  @media only screen and (max-width: 768px) {
    padding: 8px 15px;
  }
`;

export const MainHolder = styled.div`
  margin-top: 50px;
`;

export const UrlHolder = styled.div`
  width: 800px;
  max-width: 70vw;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: fit-content;
  gap: 20px;
`;

export const PhraseHolder = styled.div`
  width: 90vw;
  max-width: 400px;
  display: flex;
  align-items: center;
  height: fit-content;
  max-height: 90vh;
  gap: 30px;
  flex-direction: column;
  justify-content: center;
  background-color: #1f272e;
  right: 15px;
  bottom: 0;
  padding: 15px;
  margin: 0 0 100px 0;
  z-index: 1;
  position: fixed;
  animation: slideFromBottom;
  animation-duration: 800ms;

  @keyframes slideFromBottom {
    from {
      transform: translateY(300px);
    }

    to {
      transform: translateY(0);
    }
  }
`;

function OrgF() {
  return (
    <Footer>
      <FooterL>
        <LogoHolder>
          <ShortLogo />
          <ShortUrl>ShorTY</ShortUrl>
        </LogoHolder>
      </FooterL>
      <FooterR>
        <Ptag $primary>Contact us on</Ptag>
        <SocialF />
        <SocialT />
      </FooterR>
    </Footer>
  );
}

export default OrgF;
