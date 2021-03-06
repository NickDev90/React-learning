import React from 'react';
import s from './Dialogs.module.css';
import Dialogs from './Dialogs.jsx';
import {updateNewMessageTextCreator, sendMessageCreator} from './../../redux/dialogs-reducer.js';
import {connect} from 'react-redux';
import {withAuthRedirect} from './../../HOC/withAuthRedirect.js';
import {compose} from 'redux';



// const DialogsContainer = (props) => {

// 	let state = props.store.getState();
// 	let dialogsPage = state.dialogsPage;

// 	let sendMessage = () => {
// 		props.store.dispatch(sendMessageCreator()); 
// 	}

// 	let onTextMessageChange = (textChange) => {
// 		props.store.dispatch(updateNewMessageTextCreator(textChange));
// 	}

// 	return (
// 		<Dialogs sendMessage={sendMessage}
// 			onTextMessageChange={onTextMessageChange} dialogsPage={dialogsPage}
// 		 />
// 	)
// }

function mapStateToProps (state) {
	return {
		dialogsPage: state.dialogsPage
	}
}

function mapDispatchToProps (dispatch) {
	return {
		sendMessage: (messageByReduxForm) => {
			dispatch(sendMessageCreator(messageByReduxForm))
		},
		onTextMessageChange: (textChange) => {
			dispatch(updateNewMessageTextCreator(textChange))
		}
	}
}



// let AuthRedirectDialogs = withAuthRedirect(Dialogs);

const DialogsContainer = compose (
	connect(mapStateToProps, mapDispatchToProps),
	withAuthRedirect
)(Dialogs)



export default DialogsContainer;

