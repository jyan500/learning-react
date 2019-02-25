import React from 'react';

const imageStyle = {
	width: '200px',
	height : '200px'
};
const divStyle = {
	display : 'inline-block',
	padding : '20px',
	margin : '10px',
	backgroundColor: 'whitesmoke',
	fontFamily: 'Roboto',
};
class Inventory extends React.Component{
	render(){
		return (
			<div style = {divStyle}>
				<img style = {imageStyle} src = {this.props.info.url}/>		
				<h2>{this.props.info.name}</h2>
				<p> Price: {this.props.info.price.toLocaleString('en-US', {style: 'currency', currency: 'USD'})} </p>
				<p> Weight: {this.props.info.weight} grams </p>
				<p> In Stock: {this.props.info.quantity} </p>
			</div>
		)	
	}
}

export default Inventory