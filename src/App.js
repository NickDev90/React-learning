import React, {Suspense} from 'react';
import {BrowserRouter, Route, withRouter, Switch, Redirect} from 'react-router-dom';
import './App.css';
import HeaderContainer from './Components/Header/HeaderContainer.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import ProfileContainer from './Components/Profile/ProfileContainer.jsx';
// import DialogsContainer from './Components/Dialogs/DialogsContainer.jsx';
import Feed from './Components/Feed/Feed.jsx';
import Music from './Components/Music/Music.jsx';
import Login from './Components/Login/Login.jsx';
import Settings from './Components/Settings/Settings.jsx';
// import FriendsContainer from './Components/Friends/FriendsContainer.jsx';
import Preloader from './Components/Friends/Preloader/Preloader.jsx';
// import Preloader from './redux/auth-reducer.js';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {initializeApp} from './redux/app-reducer.js'

const FriendsContainer = React.lazy(()=> import('./Components/Friends/FriendsContainer.jsx'));
const DialogsContainer = React.lazy(()=> import('./Components/Dialogs/DialogsContainer.jsx'));
// const ProfileContainer = React.lazy(()=> import('./Components/Profile/ProfileContainer.jsx'));


class App extends React.Component {

  catchAllUnhandledErrors = () => {
    alert('some errors occured');
  }

  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
  }

  componentWillUnmount() {
    window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
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
      <Suspense fallback={Preloader}>
        <HeaderContainer />

        <Navbar />
        
        <div className="app-wrapper-content">

        <Switch>
          <Route exact path='/' render={ () =>
              <Redirect to={'profile'}  />} 
          /> 
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
       
          <Route path='/login/test-page' render={ () =>
              <div>Test login page</div>
            } />
          <Route  path='/login' render={ () =>
              <Login />} />

          <Route  path='*' render={ () =>
              <div>404 page doesn't exist</div>} />
        </Switch>
        </div>
      </Suspense>
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
