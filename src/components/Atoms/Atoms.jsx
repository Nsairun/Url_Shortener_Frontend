/* eslint-disable no-lone-blocks */
/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { BiCodeCurly } from 'react-icons/bi';

{
  /* <i class="fa fa-arrows-alt" aria-hidden="true"></i> */
}
// FaExpandArrowsAlt

export const ShortLogo = styled(BiCodeCurly)`
  color: #ff621f;
  font-size: 40px;
  margin: 0;
  @media only screen and (max-width: 768px) {
    font-size: 25px;
  }
`;

export const SocialF = styled(FaFacebookF)`
  color: #fff;
  font-size: 25px;
  margin: 0;
  @media only screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const SocialT = styled(FaTwitter)`
  color: #fff;
  font-size: 25px;
  margin: 0;
  @media only screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const ShortUrl = styled.h2`
  font-family: 'acumin-pro';
  font-eight: 400;
  font-size: 25px;
  font-lineheight: 15.6px;
  color: #009cff;
  font-style: normal;
  @media only screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Join = styled.h1`
  font-family: 'acumin-pro';
  font-eight: 600;
  font-size: 35px;
  font-lineheight: 15.6px;
  color: #009cff;
  font-style: normal;
  @media only screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

export const JoinSpan = styled.h1`
  font-family: acumin-pro;
  font-eight: 600;
  font-size: 35px;
  font-lineheight: 15.6px;
  color: #ff621f;
  font-style: normal;
  @media only screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Button = styled.button`
  background: #ff621f;
  border-radius: 5px;
  border: none;
  color: #fff;
  font-size: 18px;
  margin: 0;
  padding: 0.5em 1em;

  ${(props) =>
    props.$primary &&
    css`
      background: transparent;
      border: 1px solid #fff;
    `}
  ${(props) =>
    props.$secondry &&
    css`
      text-decoration: underline;
      font-style: italic;
      background: transparent;
      border: none;
      color: #009cff;
      font-size: 16px;
    `}

    @media only screen and (max-width: 768px) {
    font-size: 12px;
    padding: 5px 10px;
  }
`;

export const InputField = styled.input`
  padding: 12px 10px;
  color: #fff;
  font-size: 16px;
  width: 100%;
  border-radius: 5px;
  max-width: 600px;
  border: none;
  color: #b6b6b6;
  height: 40px;
  background-color: #374151;
  @media only screen and (max-width: 768px) {
    height: 30px;
    font-size: 14px;
  }
  @media only screen and (max-width: 380px) {
    padding: 3px 6px;
    font-size: 12px;
  }
`;

export const Ptag = styled.p`
  font-size: 16px;
  color: #fff;
  width: 50%;
  max-width: 600px;
  ${(props) =>
    props.$primary &&
    css`
      color: #b6b6b6;
    `};
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
  @media only screen and (max-width: 380px) {
    font-size: 12px;
  }
`;

export const Label = styled.label`
  color: #fff;
  font-size: 16px;
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
  @media only screen and (max-width: 380px) {
    font-size: 12px;
  }
`;

export const OnclickBtn = styled.button`
  color: #fff;
  background-color: #009cff;
  border-radius: 10px;
  border: none;
  font-size: 16px;
  width: 50%;
  padding: 0.5em 1em;
  max-width: 100%;
  ${(props) =>
    props.$secondry &&
    css`
      width: 100%;
    `}
  @media only screen and (max-width: 768px) {
    padding: 6px 10px;
    font-size: 14px;
  }
  @media only screen and (max-width: 380px) {
    padding: 3px 6px;
    font-size: 12px;
  }
`;
