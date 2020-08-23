import React from 'react';
import './App.css';
import Header from 'components/Header';
import SideNav from 'components/SideNav';
import Content from 'components/Content';
import Footer from 'components/Footer';

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <SideNav/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
