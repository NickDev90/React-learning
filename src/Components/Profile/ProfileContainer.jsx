import React from 'react';
import {withRouter} from 'react-router-dom';
import Profile from './Profile.jsx';
import * as axios from 'axios';
import {connect} from 'react-redux';
import thunk from 'redux-thunk';
import {getUserProfile} from './../../redux/profile-reducer.js'
import {friendsAPI} from '../../API/api.js'



class ProfileContainer extends React.Component {

	componentDidMount() {
		
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = 2;
		}

		this.props.getUserProfile(userId);
	}
 
	render() { 
		return <Profile {...this.props} profile={this.props.profile}/>

	}
}


let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	isAuthed: state.auth.isAuthed
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect (mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent); 