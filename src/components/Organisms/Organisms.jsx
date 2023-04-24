/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import React from 'react';
import { SocialF, SocialT, ShortLogo, ShortUrl } from '../Atoms/Atoms';
import { FooterL, FooterR, LogoHolder } from '../Molecules/Molecules';

export const NavBar = styled.div`
  display: flex;
  padding: 15px 80px;
  justify-content: space-between;
  align-items: center;
`;

export const Form = styled.form`
  align-self: center;
  justify-self: center;
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: auto;
  text-align: left;
  padding: 5px 10px;
  background-color: #1b1c2d70;
`;

export const Footer = styled.div`
  display: flex;
  padding: 12px 80px;
  justify-content: space-between;
  align-items: center;
  bottom: 0;
  background-color: #1b1c2d70;
`;

function OrgF() {
  return (
    <Footer>
      <FooterL>
        <LogoHolder>
          <ShortLogo />
          <ShortUrl>UrlShortener</ShortUrl>
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
