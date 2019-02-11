import React from 'react';
// const styles = {
// 	navbarStyle : {
// 		padding: '30px',
// 		fontSize: '1.2em',
// 		'& a':{
// 			textDecoration: 'none',
// 			color: 'white'
// 		},
// 		'& a:hover':{
// 			textDecoration: 'underline'
// 		}
// 	},
// }
const navbar = {
	padding: '10px',
	backgroundColor: 'black',
}
const link = {
	padding: '30px',
	fontSize: '1.2em',
	color: 'white',
	textDecoration: 'None' 
}
function NavBar(){
	return (
		<nav style = {navbar}>
			<a style = {link} href = "#"> First </a>
			<a style = {link} href = "#"> Second </a>
			<a style = {link} href = "#"> Third </a>
		</nav>

	)	
}
export default NavBar