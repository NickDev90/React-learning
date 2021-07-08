import React from 'react';
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import './App.css';
import HeaderContainer from './Components/Header/HeaderContainer.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import ProfileContainer from './Components/Profile/ProfileContainer.jsx';
import DialogsContainer from './Components/Dialogs/DialogsContainer.jsx';
import Feed from './Components/Feed/Feed.jsx';
import Music from './Components/Music/Music.jsx';
import Login from './Components/Login/Login.jsx';
import Settings from './Components/Settings/Settings.jsx';
import FriendsContainer from './Components/Friends/FriendsContainer.jsx';
import Preloader from './Components/Friends/Preloader/Preloader.jsx';
// import Preloader from './redux/auth-reducer.js';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {initializeApp} from './redux/app-reducer.js'


class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  componentDidUpdate() {
    console.log('App did update')
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

   return (

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
          <Route path='/login' render={ () =>
              <Login />} />
          
    	</div>

      </div>   
   );
 }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})


export default compose(
  withRouter,
  connect(mapStateToProps, {initializeApp})) (App);
