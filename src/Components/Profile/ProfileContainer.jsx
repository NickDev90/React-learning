import React from 'react';
import {withRouter} from 'react-router-dom';
import Profile from './Profile.jsx';
import * as axios from 'axios';
import {connect} from 'react-redux';
import thunk from 'redux-thunk';
import {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile} from './../../redux/profile-reducer.js';
import {friendsAPI} from '../../API/api.js';
import {Redirect} from 'react-router-dom';
import {withAuthRedirect} from './../../HOC/withAuthRedirect.js';
import {compose} from 'redux';



class ProfileContainer extends React.Component {
	refreshProfile() {
		let userId = this.props.match.params.userId; 
		if (!userId) {
			userId = this.props.authorizedUserId;
			if (!userId) {
				this.props.history.push('login') // Старатися не використовувати
				//цей метод, оскільки він втручається в ЖЦ компоненти
			}
		}
		this.props.getUserProfile(userId);
		this.props.getStatus(userId);
	}

	componentDidMount() {
		this.refreshProfile();
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if(this.props.match.params.userId != prevProps.match.params.userId) {
			this.refreshProfile();
		}
	}
 
	render() {  
		return <Profile {...this.props} profile={this.props.profile}
				status={this.props.status} updateStatus={this.props.updateStatus}
				isOwner={!this.props.match.params.userId} savePhoto={this.props.savePhoto}/>
	}
}

// compose(
// 	connect(mapStateToProps, {getUserProfile})
// 	withRouter,
// 	withAuthRedirect
// )(ProfileContainer)

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer); // H O C used

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
	status: state.profilePage.status, 
	authorizedUserId: state.auth.userId,
	isAuthed: state.auth.isAuthed
})

// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default compose(
	connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
	withRouter,
	withAuthRedirect
)(ProfileContainer);