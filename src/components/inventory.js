import React from 'react';

function Inventory(props){
	const imageStyle = {
		width: '200px',
		height : '200px'
	};
	const divStyle = {
		display : 'inline-block',
		padding : '10px',
		margin : '10px',
		backgroundColor: 'whitesmoke',
	}
	const textStyle = {
		fontFamily: 'Roboto',
		fontSize: '20px' 
	}
	return (
		<div style = {divStyle} >
			<img style = {imageStyle} src = {props.info.url}/>
			<h2 style = {textStyle} >{props.info.name}</h2>		
			<p style = {textStyle}> Price: {props.info.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })} </p>
			<p style = {textStyle}> Weight: {props.info.weight} grams </p>
			<p style = {textStyle}> In Stock: {props.info.quantity} </p>
		</div>
	)
}
export default Inventory