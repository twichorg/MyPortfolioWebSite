import React from 'react';
import './App.css';
import MyNavbar from './components/my-navbar/mynavbar.component';
import MyCarousal from './components/my-carousal/my-carousal.component';
import TitleMessage from './components/tittle-message/title.message.component';
import About from './pages/about/about.component';
import Fade from "react-reveal/Fade";
import { Parallax } from 'react-parallax';
import Container from 'react-bootstrap/Container';

const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
     <MyNavbar/>
      <MyCarousal/>
       <TitleMessage/>
        <About/>
    </div>
  );
}

export default App;
