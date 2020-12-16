import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {

	let path = "/dialogs/" + props.id;

	return <div className={s.dialog + ' ' + s.active}>
				<NavLink to={path}> {props.name} </NavLink> 
			</div>
};

const Message = (props) => {
	return (
		<div className={s.message}> {props.message} </div>
	)
};

let dialogsData = [
	{id: 1, name: 'Kolyan'}, 
	{id: 'Mariana', name: 'Mariana'}, 
	{id: '3', name: 'Lesia'}, 
	{id: 4, name: 'Andrew'}, 
	{id:6, name: 'Iryna'},
	{id: 'Oksi', name: 'Oksana'}
]

let messagesData = [
	{id: 1, message: 'Hello!'},
	{id: 2, message: 'How are you?'},
	{id: 3, message: 'Do you like react?'},
	{id: 4, message: "I'm just learning it now"},
	{id: 5, message: 'How is your IT-Kamasutra?'},
	{id: 6, message: "It's very interesting now"},
]


const Dialogs = (props) => {
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				<DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
				<DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
				<DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
				<DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
				<DialogItem name='Oksana' id='Oksi' />
				<DialogItem name='Iryna' id='6' />		
			</div>

			<div className={s.messages}>
				<Message message={messagesData[0].message} />
				<Message message={messagesData[1].message}/>
				<Message message={messagesData[2].message} />
				<Message message={messagesData[3].message} />
				<Message message={messagesData[4].message} />
				<Message message={messagesData[5].message} />
			</div>
		</div>
	
	
	) 	
}

export default Dialogs;