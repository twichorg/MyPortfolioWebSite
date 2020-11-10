import React from 'react';
import './App.css';
import MyNavbar from './components/my-navbar/mynavbar.component';
import MyCarousal from './components/my-carousal/my-carousal.component';
import TitleMessage from './components/tittle-message/title.message.component';

const App = () => {
  return (
    <div className="App">
     <MyNavbar/>
     <MyCarousal/>
     <TitleMessage/>
    </div>
  );
}

export default App;
