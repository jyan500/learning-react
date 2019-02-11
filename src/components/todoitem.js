import React from 'react';

const checkboxStyle = {
	padding: '30px',
	textDecoration: 'None'
};
const labelStyle = {
	padding: '10px',
	color: 'blue'
};
const sectionStyle = {
	padding: '10px',
	fontSize: '1em',
	fontFamily: 'Roboto'
};
function TodoItem(){
	return(
		<div style = { sectionStyle }>
			<input style = {checkboxStyle} name = "chore" type = "checkbox"/>
			<label style = {labelStyle} for = "chore"> My Chore </label>
			<hr/>
		</div>
	)
}

export default TodoItem