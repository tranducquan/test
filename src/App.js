import Nav from './nav/Nav';
import Main from './main/Main'
import './App.css';
import Banner from './banner/Banner'
import Btn from './btn/Btn';
import Foot from './footer/Foot'
import React from "react";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Btn/>
      <Main/>
      <Foot/>
    </div>
  );
}

export default App;
