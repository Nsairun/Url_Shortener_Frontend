/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable prettier/prettier */
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Registeration from './Pages/Registration/Registration';
import Login from './Pages/Login/Login';
import HomePage from './Pages/homepage/HomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registeration />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
