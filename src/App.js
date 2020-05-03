import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Container from './components/Container';
import Nav from './components/Nav';
import Footer from './components/Footer'

function App() {
  return (
    <div >
      <Header/>
      <Nav/>
      <Container/>
      <Footer/>
    </div>
  );
}

export default App;
