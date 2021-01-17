import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {

	let path = "/dialogs/" + props.id;

	let newPostElement = React.createRef();

	let send = () => {
		  let text = newPostElement.current.value;
		  props.dispatch({type: 'SEND-MESSAGE', writeMe: text});
		  newPostElement.current.value = '';
	}

	return <div className={s.dialog}>
				<NavLink className={s.dialog_item} activeClassName={s.active} to={path}>
					<div className={s.member}>
						<img className={s.dial_ava} src={props.src} alt="" />
					 	{props.name} 
				 	</div>
				 	<div className={s.send_text}>
					  	<textarea ref={newPostElement} cols="20" rows="10"></textarea>
						<div><button onClick= {send} >Send message</button></div>
					</div>
				</NavLink> 

				
			</div>
};

export default DialogItem;