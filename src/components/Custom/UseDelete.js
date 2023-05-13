import React, { useState } from 'react';

import styled from 'styled-components';

import { LongUrlField } from '../Molecules/Molecules';

import { Button, Ptag, Heading2 } from '../Atoms/Atoms';

const Deletebg = styled.div`
  display: flex;
  z-index: 1;
  background-color: #a39f9faa;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const DeleteForm = styled.div`
  display: flex;
  background-color: #fff;
  flex-direction: column;
  align-items: center;
  height: 20vh;
  width: 30vw;
  border-radius: 5px;
  justify-content: space-evenly;

  @media only screen and (max-width: 430px) {
    width: 250px;
  }
`;

const useDelete = () => {
  const [delInfo, setDelInfo] = useState({
    show: false,
    message1: '',
    message2: '',
    agreeTxt: '',
    disagreeTxt: '',
    taskFunction: null,
  });

  const clearDeletion = () =>
    setDelInfo({
      show: false,
      message1: '',
      message2: '',
      agreeTxt: '',
      disagreeTxt: '',
      taskFunction: null,
    });

  function DeleteComponent() {
    return (
      <Deletebg>
        <DeleteForm>
          <Heading2>{delInfo?.message1}</Heading2>
          <Ptag $tertiary>{delInfo?.message2}</Ptag>
          <LongUrlField $primary>
            <Button $tertiary onClick={() => clearDeletion()}>
              {delInfo.disagreeTxt || 'Cancel'}
            </Button>
            <Button
              $quatinary
              onClick={() => {
                delInfo.taskFunction();
                clearDeletion();
              }}
            >
              {delInfo.agreeTxt || 'Delete'}
            </Button>
          </LongUrlField>
        </DeleteForm>
      </Deletebg>
    );
  }

  const displayDelete = (options) => {
    setDelInfo({ ...options, show: true });
  };

  return { DeleteComponent, delInfo, displayDelete };
};

export default useDelete;
