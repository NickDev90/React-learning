import React from 'react';
import Header from './Header.jsx';
import * as axios from 'axios';
import {connect} from 'react-redux';
// import {getAuthUserData} from './../../redux/auth-reducer.js';
import {logoutThunk} from './../../redux/auth-reducer.js';





class HeaderContainer extends React.Component {


	render() {
		return <Header {...this.props}/>
	}
	
}

let mapStateToProps = (state) => ({
	isAuthed: state.auth.isAuthed,
	login: state.auth.login
 });

export default connect(mapStateToProps, {logoutThunk}) (HeaderContainer);