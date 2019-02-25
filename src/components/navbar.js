import React from 'react';
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