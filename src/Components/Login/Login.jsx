import React from 'react';
import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form'; 
import {Input} from './../common/FormsControls/FormsControls.js';
import {required, maxLengthCreator} from './../../utils/validators.js';
import {loginThunk} from './../../redux/auth-reducer.js';
import {Redirect} from 'react-router-dom';
import style from './../common/FormsControls/FormsControls.module.css';



const maxLength20 = maxLengthCreator(20);


const LoginForm = (props) => {
	// const handleSubmit = props => {
	// 	console.log("hello");
	// };

	return (
			<form onSubmit={props.handleSubmit}>
				<div>
					<Field component={Input} type="text" name="email" 
					placeholder='Email' validate={[required]}/>
				</div>
				<div>
					<Field component={Input} name="password" type="password" 
					placeholder='password' validate={[required, maxLength20]} />				</div>
				<div>
					<Field component={'input'} name="rememberMe" type="checkbox"/> Remember me
				</div>
				<div>
					<button type='submit'>Login</button>
				</div>
				{ 
					props.error && <div className={style.formSummaryError}>
							{props.error}
					</div>
				}
			</form>
		)
}

const LoginReduxForm = reduxForm({ 
	form: 'login'
})(LoginForm)

// evaluate it for ContactForm component

const Login = (props) => {
	const onSubmit = (formData) => {
		props.loginThunk(formData.email, formData.password, formData.rememberMe);
	}



	if (props.isAuthed) {
		return <Redirect to={`/profile`} />
	}else {
		return <div>
			<h1>LOGIN</h1>
			<LoginReduxForm onSubmit={onSubmit}/>
		</div>
	}

}

const mapStateToProps = (state) => ({
	isAuthed : state.auth.isAuthed
})

export default connect(mapStateToProps, {loginThunk})(Login);