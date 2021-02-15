import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import HeaderContainer from './Components/Header/HeaderContainer.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import ProfileContainer from './Components/Profile/ProfileContainer.jsx';
import DialogsContainer from './Components/Dialogs/DialogsContainer.jsx';
import Feed from './Components/Feed/Feed.jsx';
import Music from './Components/Music/Music.jsx';
import Settings from './Components/Settings/Settings.jsx';
import FriendsContainer from './Components/Friends/FriendsContainer.jsx';


function App(props) {
   return (
    <BrowserRouter>
      <div className="app-wrapper">

        <HeaderContainer />

        <Navbar />
        
        <div className="app-wrapper-content">
          <Route path='/profile/:userId?' render={ () => 
              <ProfileContainer /> }
          /> 
          <Route path='/dialogs' render={ () =>
              <DialogsContainer  />} 
          />
          <Route path='/friends' render={ () =>
              <FriendsContainer />} />

          <Route path='/feed' component={Feed} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
          
    	</div>

      </div> 
    </BrowserRouter>
    
  );
}

export default App;
