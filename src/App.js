import React from 'react';
import './App.css';
import MyNavbar from './components/my-navbar/mynavbar.component';
import MyCarousal from './components/my-carousal/my-carousal.component';
import TitleMessage from './components/tittle-message/title.message.component';
import About from './pages/about/about.component';
import Fade from "react-reveal/Fade";
import Container from 'react-bootstrap/Container';
import Skills from './pages/skills/skills.component';
import Rotate from 'react-reveal/Rotate';
import ProjectTimeLine from './components/project-timeline/project-timeline.component';
import Contact from './pages/contact/contact.component';
import FooterPanel from './components/footer/footer.component';

const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
     <MyNavbar/>
      <MyCarousal/>
       <TitleMessage/>
       <Fade bottom big duration={50}>
         <hr/>
        <About/>
          </Fade>
            <Fade>
            <hr/>
              <Skills/>
               <hr/>
                <ProjectTimeLine/>
                <hr />
                 <Contact/>  
            </Fade> 
             <hr/>
              <FooterPanel/> 
    </div>
  );
}

export default App;
