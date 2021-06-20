import React from 'react';
import {withRouter} from 'react-router-dom';
import Profile from './Profile.jsx';
import * as axios from 'axios';
import {connect} from 'react-redux';
import thunk from 'redux-thunk';
import {getUserProfile, getStatus, updateStatus} from './../../redux/profile-reducer.js';
import {friendsAPI} from '../../API/api.js';
import {Redirect} from 'react-router-dom';
import {withAuthRedirect} from './../../HOC/withAuthRedirect.js';
import {compose} from 'redux';



class ProfileContainer extends React.Component {

	componentDidMount() {
		
		let userId = this.props.match.params.userId; 
		if (!userId) {
			userId = this.props.authorizedUserId;
			if (!userId) {
				this.props.history.push('login') // Страратися не використовувати
				//цей метод, оскільки він втручається в ЖЦ компоненти
			}

		}

		this.props.getUserProfile(userId);
		this.props.getStatus(userId);
	}
 
	render() {  
		return <Profile {...this.props} profile={this.props.profile}
				status={this.props.status} updateStatus={this.props.updateStatus}/>
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
	connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
	withRouter,
	withAuthRedirect
)(ProfileContainer);