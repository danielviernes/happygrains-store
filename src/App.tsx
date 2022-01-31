import React from 'react';
import logo from './logo.svg';
import './globalStyle.js';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/Navigation';
import LandingSection from './Components/LandingSection';
import GlobalStyle from './globalStyle.js';

function App() {
  return (<div>
    <GlobalStyle />
    <Navigation />
    <LandingSection />
    </div>
  );
}

export default App;
