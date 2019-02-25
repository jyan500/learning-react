import React from 'react'
import ReactDOM from 'react-dom'

class InfoState extends React.Component{
	constructor(){
		super()
		this.state = {
			name: 'Jansen Yan',
			age: '22',
			loggedIn: true 
		}
		this.handleClick = this.handleClick.bind(this)
	}
	handleClick(){
		this.setState( (prevState) => {
			console.log('setting state for login')
			prevState = {loggedIn: !prevState.loggedIn}
			return prevState
			console.log('current state: ' , prevState)
		})
	}
	render(){
		let display
		if (this.state.loggedIn){
			display = "I am logged in"
		}
		else{
			display = "I am logged out"
		}
		return (
			<div>
				<h1> My name is {this.state.name} </h1>
				<h3> I am {this.state.age} years old </h3>
				<h3> Status: { display } </h3>
				<button onClick = { () => this.handleClick()}> {this.state.loggedIn ? "logout" : "login"}</button>
			</div>
		)
	}	
}


export default InfoState