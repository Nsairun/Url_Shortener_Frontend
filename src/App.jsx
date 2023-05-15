/* eslint-disable react/jsx-no-constructed-context-values */
import './App.css';
import React, { useState } from 'react';
import validUrl from 'valid-url';
import { customAlphabet } from 'nanoid';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { registerUrl } from './api/urlauth';
import MyContext from './context';
import Registeration from './Pages/Registration/Registration';
import Login from './Pages/Login/Login';
import UsersPage from './Pages/User/User';
import HomePage from './Pages/homepage/HomePage';
import UrlStats from './Pages/Urlstats/UrlStats';
import useAlert from './components/Custom/UseAlert';
import { existInSession, saveToSession } from './utils';

function App() {
  const [urls, setUrls] = useState([]);
  const [copy, setCopied] = useState({});
  const [phrase, setPhrase] = useState(false);
  const { AlertComponent, displayAlert, myAlert } = useAlert();

  const nanoId = customAlphabet(
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
    6
  );

  const copyText = (textToCopy, shorturl) => {
    setCopied((prev) => {
      const holder = prev;
      holder[`${shorturl}`] = true;
      return { ...holder };
    });
    navigator.clipboard.writeText(textToCopy);

    setPhrase(true);

    setTimeout(() => {
      setCopied((prev) => {
        const holder = prev;
        holder[`${shorturl}`] = false;
        return { ...holder };
      });
    }, 3000);
  };

  const handleSubmit = (e, UserId = null) => {
    e.preventDefault();
    const formInput = e.target.long_url.value;
    e.target.long_url.value = '';

    if (formInput.length <= 0) {
      displayAlert('Please input a long url');
      return;
    }

    const urlExist = existInSession(formInput);

    if (urlExist) {
      displayAlert('url already exist');
      return;
    }

    if (!validUrl.isUri(formInput)) {
      displayAlert(`NOT_A_VALID_URL`);
      return;
    }

    const data = {
      long_url: formInput,
      short_url: nanoId(),
      createdAt: new Date().toLocaleTimeString(),
      UserId,
    };

    registerUrl(data).then(() => {
      setUrls((prev) => [...prev, data]);
      saveToSession([data]);
    });
  };

  return (
    <MyContext.Provider
      value={{
        setPhrase,
        phrase,
        copy,
        setCopied,
        urls,
        handleSubmit,
        copyText,
        setUrls,
      }}
    >
      <div className="App">
        {myAlert.show && <AlertComponent />}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registeration />} />
            <Route path="/user" element={<UsersPage />} />
            <Route path="/stats" element={<UrlStats />} />
          </Routes>
        </BrowserRouter>
      </div>
    </MyContext.Provider>
  );
}

export default App;
