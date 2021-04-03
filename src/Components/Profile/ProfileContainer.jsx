import React from 'react';
import {withRouter} from 'react-router-dom';
import Profile from './Profile.jsx';
import * as axios from 'axios';
import {connect} from 'react-redux';
import thunk from 'redux-thunk';
import {getUserProfile} from './../../redux/profile-reducer.js';
import {friendsAPI} from '../../API/api.js';
import {Redirect} from 'react-router-dom';
import {withAuthRedirect} from './../../HOC/withAuthRedirect.js';
import {compose} from 'redux';



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

// compose(
// 	connect(mapStateToProps, {getUserProfile})
// 	withRouter,
// 	withAuthRedirect
// )(ProfileContainer)

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer); // H O C used

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile,
})

// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default compose(
	connect(mapStateToProps, {getUserProfile}),
	withRouter,
	withAuthRedirect
)(ProfileContainer);