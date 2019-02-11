import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/navbar';
import MainContent from './components/maincontent';
import Footer from './components/footer';
function MyApp(){
	return (
		<div>
			<NavBar/>
			<MainContent/>
		</div>
	)
}

ReactDOM.render(<MyApp/>, document.getElementById('root'));