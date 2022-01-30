import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/Navigation';
import LandingSection from './Components/LandingSection';

function App() {
  return (<div>
    <Navigation />
    <LandingSection />
    </div>
  );
}

export default App;
