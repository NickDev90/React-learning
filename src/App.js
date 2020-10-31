import React from 'react';
import './App.css';
import Header from './Components/Header/Header.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Profile from './Components/Profile/Profile.jsx';
import Dialogs from './Components/Dialogs/Dialogs.jsx';




function App() {
  return (
      <div className="app-wrapper">

        <Header/>

        <Navbar />
        
        <div className="app-wrapper-content">
	        {/*<Profile />*/}
	        <Dialogs />
    	</div>

      </div> 
    
  );
}

export default App;
