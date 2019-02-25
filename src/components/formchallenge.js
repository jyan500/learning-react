import React from 'react'

class FormChallenge extends React.Component{
	constructor(){
		super()
		this.state = {
			firstname: '',
			lastname: '',
			age: '',
			gender: '',
			location: '',
			isVegan: false,
			isKosher: false,
			isLactoseFree:false 

		}
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event){
		const {name, value, type, checked} = event.target
		console.log('name: ' ,name, 'type: ' , type ,'isChecked: ' , checked)
		type === 'checkbox' ? 
			this.setState({[name] : checked}) : this.setState({[name] : value})
	}
	render(){
		return (
			<main>
				<form>
					<input type = "text" placeholder = "First Name" name = "firstname" onChange = {this.handleChange}/><br/>
					<input type = "text" placeholder = "Last Name" name = "lastname" onChange = {this.handleChange}/><br/>
					<input type = "text" placeholder = "Age" name = "age" onChange = {this.handleChange}/><br/>
					<br/>
					<input type = "radio" name = "gender" value = "male" checked = {this.state.gender === 'male'} onChange = {this.handleChange}/> Male <br/>
					<input type = "radio" name = "gender" value = "female" checked = {this.state.gender === 'female'} onChange = {this.handleChange}/> Female <br/>
					<br/>
					<select name = "location" value = {this.state.location} onChange = {this.handleChange}>
						<option value = ""> --- Please Choose a Destination --- </option>
						<option value = "San Mateo"> San Mateo </option>
						<option value = "San Francisco"> San Francisco </option>
						<option value = "San Jose"> San Jose </option>
					</select>
					<br/>
					<input type = "checkbox" name = "isVegan" checked = {this.state.isVegan} onChange = {this.handleChange}/> Is Vegan?
					<input type = "checkbox" name = "isKosher" checked = {this.state.isKosher} onChange = {this.handleChange}/> Is Kosher?
					<input type = "checkbox" name = "isLactoseFree" checked = {this.state.isLactoseFree} onChange = {this.handleChange}/> Is Lactose Free?
					<hr/>
					<h2> Entered Information </h2>
					<p> Your Name: {this.state.firstname } {this.state.lastname} </p>
					<p> Your Age: {this.state.age} </p>
					<p> Your Gender: {this.state.gender} </p>
					<p> Your Location: {this.state.location} </p>
					<p> Your Dietary Restrictions </p>
					<p> Vegan: {this.state.isVegan ? "Yes" : "No"} </p>
					<p> Kosher: {this.state.isKosher ? "Yes" : "No"} </p>
					<p> Lactose Free: {this.state.isLactoseFree ? "Yes" : "No"} </p>
				</form>
			</main>
		)

	}
}

export default FormChallenge