import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Profile from './Components/Profile/Profile.jsx';
import Dialogs from './Components/Dialogs/Dialogs.jsx';
import Feed from './Components/Feed/Feed.jsx';
import Music from './Components/Music/Music.jsx';
import Settings from './Components/Settings/Settings.jsx';
import Friends from './Components/Navbar/Friends/Friends.jsx';




function App(props) {

  // let posts = props.state.posts;

  // let d_data = props.state.dialogsData;
  // let m_data = props.state.messagesData;
  
  return (

    <BrowserRouter>
      <div className="app-wrapper">

        <Header/>

        <Navbar />
        
        <div className="app-wrapper-content">
          <Route path='/profile' render={ () => 
              <Profile profilePage={props.state.profilePage}
                addPost={props.addPost} 
                updateNewPostText={props.updateNewPostText} />} />
          <Route path='/dialogs' render={ () =>
              <Dialogs state={props.state.dialogsPage}
                sendMessage={props.sendMessage}/>} />
          <Route path='/feed' component={Feed} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
          <Route path='/friends' component={Friends} />
    	</div>

      </div> 
    </BrowserRouter>
    
  );
}

export default App;
