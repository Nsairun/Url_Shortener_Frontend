/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';
import React from 'react';
import { SocialF, SocialT, ShortLogo, ShortUrl } from '../Atoms/Atoms';
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
`;

export const Form = styled.form`
  align-self: center;
  justify-self: center;
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: auto;
  text-align: left;
  padding: 10px 20px;
  border-radius: 10px;
  background-color: #1f2937b1;
  max-width: 80%;
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
`;

export const MainHolder = styled.div`
  margin-top: 50px;
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
        <SocialF />
        <SocialT />
      </FooterR>
    </Footer>
  );
}

export default OrgF;
