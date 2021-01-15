import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';



const Dialogs = (props) => {

	let dialogsElements = props.state.dialogsData.map( (dialog) => {
		return <DialogItem name={dialog.name} id={dialog.id} 
				src={dialog.src} sendMessage={props.sendMessage}/>
	}); 

	let messagesElements = props.state.messagesData.map(function(mess) {
		return <Message message={mess.message} />
	});

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