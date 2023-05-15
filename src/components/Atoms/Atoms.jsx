import styled, { css } from 'styled-components';
import { FaFacebookF, FaTwitter, FaCopy } from 'react-icons/fa';
import { BiCodeCurly } from 'react-icons/bi';
import { AiOutlineEye, AiOutlineCopy } from 'react-icons/ai';
import { RiDeleteBin6Line } from 'react-icons/ri';

export const AuthLoadinP = styled.p`
  height: 100vh;
  width: 100vw;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  letter-spacing: 3px;

  animation: LoadingAnime;
  animation-duration: 2000ms;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
`;

export const LoadingP = styled.p`
  font-size: 17px;
  align-self: left;
  max-width: 600px;
  margin: 10px 0 20px;
  letter-spacing: 2px;

  @media only screen and (max-width: 768px) {
    font-size: 15px;
  }

  animation: LoadingAnime;
  animation-duration: 2000ms;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
`;

export const ShortLogo = styled(BiCodeCurly)`
  color: #ff621f;
  font-size: 40px;
  margin: 0;
  @media only screen and (max-width: 768px) {
    font-size: 25px;
  }
`;

export const ViewIcon = styled(AiOutlineEye)`
  color: #aaacb0;
  font-size: 14px;
  cursor: pointer;
  transition: 0.7s;
  background: transparent;
  &:hover {
    box-shadow: 0 0 50px #374151;
  }
`;

export const CopyIconCopied = styled(FaCopy)`
  color: ${({ copy }) => (copy ? '#009cff' : '#fff')};
  font-size: 14px;
  cursor: pointer;
  transition: 0.7s;
  &:hover {
    box-shadow: 0 0 50px #374151;
  }
`;

export const CopyIcon = styled(AiOutlineCopy)`
  color: #009cff;
  font-size: 14px;
  cursor: pointer;
  transition: 0.7s;
  &:hover {
    text-shadow: #374151;
    box-shadow: #374151;
  }
`;

export const DeleteIcon = styled(RiDeleteBin6Line)`
  font-size: 14px;
  cursor: pointer;
  color: #fb0f30;
  transition: 0.7s;
  &:hover {
    box-shadow: #374151;
    text-shadow: #374151;
  }
`;

export const SocialF = styled(FaFacebookF)`
  color: #fff;
  font-size: 25px;
  margin: 0;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const SocialT = styled(FaTwitter)`
  color: #fff;
  font-size: 25px;
  margin: 0;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const ShortUrl = styled.h2`
  font-family: 'Lobster', cursive;
  letter-spacing: 3px;
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
  font-family: 'Acme', sans-serif;
  font-eight: 600;
  font-size: 35px;
  font-lineheight: 15.6px;
  color: #009cff;
  font-style: normal;
  ${(props) =>
    props.$primary &&
    css`
      color: #ff621f;
    `}
  ${(props) =>
    props.$secondry &&
    css`
      color: #000;
    `}
  @media only screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

export const Heading2 = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-eight: 600;
  font-size: 22px;
  font-lineheight: 15.6px;
  color: black;
  font-style: normal;
  @media only screen and (max-width: 768px) {
    font-size: 15px;
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

  &:hover {
    background: #fff;
    color: #000;
    direction: rtl;
    transition: 0.5s ease-in-out;
  }
  ${(props) =>
    props.$primary &&
    css`
      background: transparent;
      border: 1px solid #fff;
      &:hover {
        background: #009cff;
        color: #fff;
        direction: initial;
        transition: 0.5s ease-in-out;
      }
    `}
  ${(props) =>
    props.$tertiary &&
    css`
      background: transparent;
      border: 2px solid black;
      color: black;
    `} 
    
    ${(props) =>
    props.$quatinary &&
    css`
      background: red;
      border: 2px solid red;
    `}  

    @media only screen and (max-width: 768px) {
    font-size: 12px;
    padding: 5px 10px;
  }
`;

export const UrlTxt = styled.p`
  font-size: 15px;
  color: #fff;
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  ${(props) =>
    props.$primary &&
    css`
      width: 220px;
      color: #ff621f;
      direction: rtl;
      font-size: 17px;
    `}
  ${(props) =>
    props.$secondry &&
    css`
      width: fit-content;
      color: #aaacb0;
    `}

    @media only screen and (max-width: 768px) {
    font-size: 13px;
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
  align-self: left;
  max-width: 600px;
  margin-bottom: 30px;
  ${(props) =>
    props.$primary &&
    css`
      margin-bottom: 0;
      color: #b6b6b6;
    `};
  ${(props) =>
    props.$secondry &&
    css`
      font-size: 25px;
      margin-bottom: 0;
    `};
  ${(props) =>
    props.$normal &&
    css`
      margin-bottom: 0;
    `};

  ${(props) =>
    props.$tertiary &&
    css`
      color: black;
      font-size: 15px;
      margin-bottom: 0;
    `};
  ${(props) =>
    props.$error &&
    css`
      color: #ff4500;
      margin: 10px 0 20px;
    `}

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
  @media only screen and (max-width: 380px) {
    font-size: 12px;
  }
`;

export const Label = styled.label`
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
  @media only screen and (max-width: 380px) {
    font-size: 12px;
  }
`;

export const LinkPage = styled.a`
  text-decoration: underline;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
  font-style: italic;
  border: none;
  color: #009cff;
  font-size: 16px;
  margin: auto;
`;

export const OnclickBtn = styled.button`
  color: #fff;
  background-color: #009cff;
  border-radius: 10px;
  border: none;
  font-size: 16px;
  width: 50%;
  padding: 0.5rem 1rem;
  max-width: 100%;
  &:hover {
    background: #0566a2;
    color: #fff;
    direction: initial;
    transition: 0.5s ease-in-out;
  }

  ${(props) =>
    props.$secondry &&
    css`
      width: 100%;
    `}

  @media only screen and (max-width: 768px) {
    &:hover {
      background-color: #009cff;
      color: #fff;
      direction: initial;
    }
  }

  @media only screen and (max-width: 450px) {
    font-size: 14px;
  }
`;

export const PharseBtn = styled.button`
  padding: 15px 20px;
  color: #fff;
  font-size: 18px;
  width: 97%;
  max-width: 250px;
  background-color: #009cff;
  font-weight: 500;
  ${(props) =>
    props.$primary &&
    css`
      background: transparent;
      border: 2px solid #009cff;
      color: #009cff;
    `}
`;

export const PharseTxt = styled.p`
  color: #009cff;
  font-size: 35px;
  font-weight: 800;
  font-family: 'Lora';
  ${(props) =>
    props.$primary &&
    css`
      color: #fff;
      font-weight: 500;
      font-size: 18px;
    `}

  @media only screen and (max-width: 768px) {
    font-size: 20px;
    ${(props) =>
      props.$primary &&
      css`
        font-size: 14px;
      `}
  }
`;
