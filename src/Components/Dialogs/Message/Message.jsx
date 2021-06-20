import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import { Form, Field } from 'react-final-form';


const Message = (props) => {

	return (

		<div className={s.message}> 
			{props.message}
		</div>
	)
};
 

export default Message;