import React from 'react';
import TodoItem from './todoitem';
import todoList from './todoList';

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
class MainContent extends React.Component{
	constructor(){
		super()
		this.state = {
			todoList : todoList,
			checked: false
		}
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(id){
		console.log('handlechange id: ' , id)
		this.setState((prevState) => {
				const updatedTodos = prevState.todoList.map( todo => {
					if (todo.id === id){
						todo.completed = !todo.completed	
					}
					return todo
				})
				return {
					todoList: updatedTodos
				}
			}
		)
	}
	render(){
		const todoItems = this.state.todoList.map( item => 
			<TodoItem key = {item.id} item = {item} checked = {item.completed} handleChange = {this.handleChange}/>
		)
		return (
			<section style = {sectionStyle} >
				<h2 > My Todo App </h2>
				<div style = {todoStyle} >
					{todoItems}
				</div>
			</section>
		)	
	}	
	
}
export default MainContent
