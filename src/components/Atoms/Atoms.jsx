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
`;

export const SocialF = styled(FaFacebookF)`
  color: #fff;
  font-size: 25px;
  margin: 0;
`;

export const SocialT = styled(FaTwitter)`
  color: #fff;
  font-size: 25px;
  margin: 0;
`;

export const ShortUrl = styled.h2`
  font-family: acumin-pro;
  font-eight: 400;
  font-size: 25px;
  margin: 0;
  font-lineheight: 15.6px;
  color: #009cff;
  font-style: normal;
`;

export const Join = styled.h1`
  font-family: acumin-pro;
  font-eight: 600;
  font-size: 35px;
  margin: 0;
  font-lineheight: 15.6px;
  color: #009cff;
  font-style: normal;
`;

export const JoinSpan = styled.h1`
  font-family: acumin-pro;
  font-eight: 600;
  font-size: 35px;
  margin: 0;
  font-lineheight: 15.6px;
  color: #ff621f;
  font-style: normal;
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
      border: 2px solid #fff;
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
`;

export const InputField = styled.input`
  padding: 12px 10px;
  color: #fff;
  font-size: 14px;
  width: 100%;
  border-radius: 5px;
  border: none;
  color: #b6b6b6;
  height: 40px;
  background-color: #374151;
`;

export const Ptag = styled.p`
  font-size: 16px;
  color: #fff;
  width: 50%;
  max-width: 80%
    ${(props) =>
      props.$primary &&
      css`
        color: #b6b6b6;
        font-size: 16px;
      `};
`;

export const Label = styled.label`
  color: #fff;
  font-size: 16px;
`;

export const OnclickBtn = styled.button`
  padding: 10px 30px;
  color: #fff;
  background-color: #009cff;
  border-radius: 10px;
  border: none;
  font-size: 14px;
  width: 40%;
  ${(props) =>
    props.$secondry &&
    css`
      width: 100%;
    `}
`;
