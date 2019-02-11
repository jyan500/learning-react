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
	let yoyolist = [
		{name: 'TopYo Silenus', price: '$30.99', weight: '67.5g'}, 
		{name: 'TopYo Mojo', price: '$13.99', weight: '68g'},
		{name: 'MagicYoYo Y01 Node', price: '$14.99', weight: '68g'},
		{name: 'MagicYoYo N12 Shark Honor', price: '$14.99', weight: '67g'},
		{name: 'YoYoRecreation Draupnir', price: '$249.99', weight: '64g'},
		{name: 'YoYoFactory Shutter', price: '$44.99', weight: '66g'}
	]
	return (
		<section style = {sectionStyle} >
			<div style = {todoStyle} >
				<h2 > My Todo App </h2>
				<TodoItem 
					obj = {{chore: 'Wash Dishes'}}
				/>
				<TodoItem
					obj = {{chore: 'Take out trash'}}
				/>
				<TodoItem obj = {{chore:'Time for React!'}}/>
			</div>
		</section>
	)
}
export default MainContent
