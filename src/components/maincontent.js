import React from 'react';
import TodoItem from './todoitem';

const sectionStyle = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center'
};

const todoStyle = {
	textAlign: 'center',
	padding: '30px',
	backgroundColor: 'whiteSmoke',
	width: '300px',
	height: '1000px'
}
function MainContent(){
	return (
		<section style = {sectionStyle} >
			<div style = {todoStyle} >
				<h2 > My Todo App </h2>
				<TodoItem/>
				<TodoItem/>
				<TodoItem/>
			</div>
		</section>
	)
}
export default MainContent
