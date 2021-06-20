import React from 'react';
import { Field, reduxForm } from 'redux-form';

export const required = (value) => {
	if (value) return undefined; 
	return 'The field is required';  
}

export const maxLengthCreator = (maxLength) => (value) => {
	if (value && value.length > maxLength) return `Max length is ${maxLength} symbols`; 
	return undefined;  
}

export const maxLength = (value) => {
	if (value && value.length > 30) return "Max length is 30 symbols"; 
	return undefined;  
}

export default required;