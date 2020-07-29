import React from 'react';
import './index.css';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  document.getElementById('root')
);

