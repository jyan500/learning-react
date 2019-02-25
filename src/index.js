import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/navbar';
import MainContent from './components/maincontent';
import Footer from './components/footer';
import Inventory from './components/inventory';
import InfoState from './components/infostate';
import yoyoList from './components/yoyolist';
import Form from './components/form';
import FormChallenge from './components/formchallenge';
// Notes:
// Props are immutable
// State is mutable.
// To use state: Must be a class based component, needs constructor

// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch -- CORS enabled http requests
// https://swapi.co/ ---- star wars api 
// https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261


class MyApp extends React.Component{
	constructor(){

		// call super to get React.Component properties
		super()
		this.state = {
			answer: "Yes",
			yoyoList: yoyoList,
			count: 0,
			loading: false,
			character: {}
		}
		// any method that calls setState must be binded to the class	
		this.handleClick = this.handleClick.bind(this)
	}
	// Component Lifecycles
	// ********************//	
	componentDidMount(){
		this.setState({
			loading: true
		})
		// GET the data I need to correctly display
		fetch("https://swapi.co/api/people/1")
			.then((response) => response.json())
			.then(data => {
				console.log(data)
				this.setState({
					character: data,
					loading: false
				})	

			})
	}
	// THIS IS DEPRACATED	
	// componentWillReceiveProps(){
	// 	// check to see what will happen when component receives props 
	// }
	static getDerivedStateFromProps(props, state){
		// should return the updated state based on the props
		// should check if you really need to use this method, its discouraged, only for rare cases only
	}
	getSnapshotBeforeUpdate(){
		// create an object called snapshot that is a backup of the current "way things are" 
	}
	shouldComponentUpdate(incomingProps, incomingState){
		// check to see if a component should update
		// must return true if we want to update, or false if we don't want to update
		return true
	}
	componentWillUnmount(){
		// essentially a destructor	
		// i.e if you made an event listener in componentDidMount(), you would destroy that listener here
	}

	// ******************** //
	handleClick(){
	// any method that calls setState must be binded to the class	
		// use setState to change the values within state, and don't modify state directly as a variable
		// setState can take as a parameter an object (representing the new state), or a function
		// passing the previous state, and returning a new count + 1 for the new state 
		this.setState( (prevState) => {
			return { count: prevState.count + 1 }	
		})
	}
	// render is reserved name
	render(){
		const inventoryComponentList = this.state.yoyoList.map(function( yoyo ){
			return (
				<Inventory 
					key = {yoyo.id}
					info = {yoyo}
				/>
			)
		})
		return (
			<div>
				<h2>{this.state.loading ?"loading..." : ''}</h2>
				<NavBar/>
				<MainContent/>
				<hr/>
				<h2> My Yoyo Store </h2>
				{inventoryComponentList}
				<h2> Is state important to know? {this.state.answer} </h2>
				<InfoState/>
				<h2> Count </h2>
				<h2> {this.state.count} </h2>
				<button onClick = {this.handleClick }> Change! </button>
				<h2> {this.state.character.name} </h2>
				<Form/>
				<hr/>
				<FormChallenge/>	
			</div>
		
		)
	}	
}

ReactDOM.render(<MyApp/>, document.getElementById('root'));