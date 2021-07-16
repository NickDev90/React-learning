import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';
import {connect} from 'react-redux';

  

const Dialogs = (props) => {

	
	let newMessageText = props.dialogsPage.newMessageText;


	let dialogsElements = props.dialogsPage.dialogsData.map( (dialog) => {
		return <DialogItem name={dialog.name} id={dialog.id} src={dialog.src}
		 newMessageText={newMessageText} sendMessage={props.sendMessage}
			onTextMessageChange={props.onTextMessageChange} key={dialog.id}/>
	}); 


	let messagesElements = props.dialogsPage.messagesData.map(function(mess) {
		return <Message message={mess.message} key={mess.id}/>
	});


	// if (!props.isAuthed)	return <Redirect to={"/login"} />

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogsElements}
			</div>
			<div className={s.messages}>
				{messagesElements}
			</div>
		</div>	
	) 	
}

export default Dialogs;
