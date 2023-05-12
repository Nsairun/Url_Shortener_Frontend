import styled, { css } from 'styled-components';

export const ButtonHolder = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  @media only screen and (max-width: 768px) {
    gap: 5px;
  }
`;

export const LogoHolder = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const JoinHolder = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-self: center;
  text-align: center;
  margin: auto;
`;

export const PassConfirm = styled.div`
  display: flex;
  gap: 30px;
  width: 100%;
`;

export const PassHolder = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
`;

export const FormBottom = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 20px;
`;

export const FormBottomR = styled.div`
  display: flex;
  align-items: center;
`;

export const FooterL = styled.div`
  display: flex;
  align-items: center;
`;

export const FooterR = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const LongUrlField = styled.form`
  display: flex;
  align-items: center;
  width: 80vw;
  margin: 20px auto;
  max-width: 700px;
  gap: 8px;
  ${(props) =>
    props.$primary &&
    css`
      width: 90%;
      margin: 0 auto;
      gap: 22%;
      justify-content: center;
    `}
`;

export const UrlCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 70vw;
  max-width: 250px;
  align-items: left;
  gap: 8px;
  text-align: left;
  padding: 10px;
  border-radius: 5px;
  background-color: #1b1c2d70;
  overflow: hidden;
  height: 90px;
`;

export const CardBottom = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
