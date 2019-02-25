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
const lineThrough = {
	padding: '10px',
	color: 'black',
	textDecoration: 'line-through',
	fontStyle : 'italic'
}
function TodoItem(props){
	return(
		<div style = { sectionStyle }>
			<input style = {checkboxStyle}  type = "checkbox" checked = {props.checked} onChange = {() => props.handleChange(props.item.id)} />
			<label style = {props.checked ? lineThrough : labelStyle}> {props.item.chore} </label>
			<hr/>
		</div>
	)	
}
export default TodoItem