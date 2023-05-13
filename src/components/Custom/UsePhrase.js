import { useState } from 'react';

import { PhraseHolder } from '../Organisms/Organisms';

import { PharseBtn, PharseTxt } from '../Atoms/Atoms';

const usePhrase = () => {
  const [phrase, setPhrase] = useState({
    show: false,
    message1: '',
    message2: '',
    agreeTxt: '',
    disagreeTxt: '',
    taskFunction: null,
  });

  const clearPhrase = () =>
    setPhrase({
      show: false,
      message1: '',
      message2: '',
      agreeTxt: '',
      disagreeTxt: '',
      taskFunction: null,
    });

  function PhraseComponent() {
    return (
      <PhraseHolder>
        <PharseTxt>{phrase?.message1}</PharseTxt>
        <PharseTxt $primary>{phrase?.message2}</PharseTxt>
        <PharseBtn
          onClick={() => {
            phrase?.taskFunction();
            clearPhrase();
          }}
        >
          {phrase?.agreeTxt || 'Yes, lets do it'}.
        </PharseBtn>
        <PharseBtn onClick={() => clearPhrase()} $primary>
          {phrase?.disagreeTxt || 'No thanks, im good.'}
        </PharseBtn>
      </PhraseHolder>
    );
  }

  const displayPhrase = (options) => {
    setPhrase(() => ({ ...options, show: true }));
  };

  return { PhraseComponent, phrase, displayPhrase };
};

export default usePhrase;
