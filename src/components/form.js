import React from 'react'

/* Useful Form Elements */
/*
	for the input name, use the same name as the variable in state 

	<textarea value = {} /> is a self closing element in react, and takes value as a parameter
	<input type = "checkbox" name = "isFriendly" checked = {this.state.isFriendly} onChange = {this.handleChange} />
	<input type = "radio" checked = {this.state.gender} onChange = {this.handleChange} />
	<input type = "select" onChange = {this.state.favColor> name = "favColor">
		<option value = "blue"> Blue </option>

	<button></button>

*/
class Form extends React.Component{
	constructor(){
		super()
		this.state = {
			firstName: '',
			lastName: '',
			isFriendly: true,
			gender: '',
			favColor: 'blue'
		}
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event){
		// best practice: pull the values out of the event to variables

		const {name, value, type, checked} = event.target
		// if the type of the input is a checkbox, change the check mark, else change the input based on its current value
		type === "checkbox" ? this.setState({ [name] : checked }) : this.setState({[name]: value})
		console.log('handling change in the form')
	}
	render(){
		return (
			<form>
				<input type = "text" value = {this.state.firstName} name = "firstName" placeholder = "First Name" onChange = {this.handleChange}/>
				<input type = "text" value = {this.state.lastName} name = "lastName" placeholder = "Last Name" onChange = {this.handleChange}/>
				<input type = "checkbox" name = "isFriendly" checked = {this.state.isFriendly} onChange = {this.handleChange} />
				<label>
					<input type = "radio" name = "gender" value = "male" checked={this.state.gender === "male"} onChange = {this.handleChange} /> Male
					<input type = "radio" name = "gender" value = "female" checked={this.state.gender === "female"} onChange = {this.handleChange} /> Female
				</label>
				<br/>
				<select value = {this.state.favColor} onChange = {this.handleChange} name = "favColor">
					<option value = "blue"> Blue </option>
					<option value = "red"> Red </option>
					<option value = "yellow"> Yellow </option>
				</select>
				<h1> {this.state.firstName} {this.state.lastName} </h1>
				<h2> You are {this.state.gender}</h2>
				<h2> Your favorite color is {this.state.favColor} </h2>
			</form>
		)
	}
}

export default Form