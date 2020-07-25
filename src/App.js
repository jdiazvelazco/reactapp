import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Content from './components/Content';
import Clock from './components/Clock';

function App() {
  return (
    <div className="App">
    <Header/>
    <Menu/>
    <Content/>
    <Clock/>
    <Footer year ="2023"/>
    </div>
  );
}

export default App;
