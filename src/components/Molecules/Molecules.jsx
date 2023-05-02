/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

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
  text-align: center;
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

export const LongUrlField = styled.div`
  display: flex;
  align-items: center;
  width: 80vw;
  margin: 20px auto;
  max-width: 700px;
  gap: 8px;
`;
