import React from 'react';
import s from './Dialogs.module.css';
import Dialogs from './Dialogs.jsx';
import {updateNewMessageTextCreator, sendMessageCreator} from './../../redux/dialogs-reducer.js';
import {connect} from 'react-redux';


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
		sendMessage: () => {
			dispatch(sendMessageCreator())
		},
		onTextMessageChange: (textChange) => {
			dispatch(updateNewMessageTextCreator(textChange))
		}
	}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)



export default DialogsContainer;

