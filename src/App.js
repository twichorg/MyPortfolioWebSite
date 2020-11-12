import React from 'react';
import './App.css';
import MyNavbar from './components/my-navbar/mynavbar.component';
import MyCarousal from './components/my-carousal/my-carousal.component';
import TitleMessage from './components/tittle-message/title.message.component';
import About from './pages/about/about.component';
import Fade from "react-reveal/Fade";
import { Parallax } from 'react-parallax';
import Container from 'react-bootstrap/Container';
import Skills from './pages/skills/skills.component';
import Rotate from 'react-reveal/Rotate';
import ProjectTimeLine from './components/project-timeline/project-timeline.component';

const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
     <MyNavbar/>
      <MyCarousal/>
       <TitleMessage/>
       <Fade bottom big duration={50}>
        <About/>
          </Fade>
            <Fade>
              <Skills/>
            </Fade>
            <ProjectTimeLine/>
    </div>
  );
}

export default App;
