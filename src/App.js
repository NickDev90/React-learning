import React from 'react';
import './App.css';
import Header from './Components/Header/Header.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Profile from './Components/Profile/Profile.jsx';



function App() {
  return (
      <div className="app-wrapper">

        <Header/>

        <Navbar />
        
        <Profile />

      </div> 
    
  );
}

export default App;
