import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/navbar';
import MainContent from './components/maincontent';
import Footer from './components/footer';
import Inventory from './components/inventory';
function MyApp(){
	let yoyoList = [
		{id: 1, name: 'TopYo Silenus', price: 30.99, weight: 67.5, quantity: 5, url: 'https://cdn.shopify.com/s/files/1/0748/4967/products/Silenus-RedBlue-1_1024x1024.jpg?v=1544478338'}, 
		{id: 2, name: 'TopYo Mojo', price: 13.99, weight: 68, quantity: 6, url: 'https://cdn.shopify.com/s/files/1/0748/4967/products/Mojo-Black-1_1024x1024.jpg?v=1507670572'},
		{id: 3, name: 'MagicYoYo Y01 Node', price: 14.99, weight: 68, quantity: 3, url: 'https://ae01.alicdn.com/kf/HTB1bHipSFXXXXX2XpXXq6xXFXXXl/MAGICYOYO-Y01-NODE-YO-YO-10-ball-stainless-KK-bearing-Simple-sports-and-practice-yoyo-free.jpg'},
		{id: 4, name: 'MagicYoYo N12 Shark Honor', price: 14.99, weight: 68, quantity: 4, url: 'https://yoyobestbuy.com/wp-content/uploads/magi-510x510.jpg'},
		{id: 5, name: 'YoYoRecreation Draupnir', price: 249.99, weight: 64, quantity: 0, url: 'http://cdn.shopify.com/s/files/1/0748/4967/products/POM-Draupnir-Black-2_grande.jpg?v=1498770728'},
		{id: 6, name: 'YoYoFactory Shutter', price: 44.99, weight: 66, quantity: 25, url: 'http://static1.squarespace.com/static/56706fc905f8e26b0fc028a0/5a542fb0419202695f3da5a5/5717ba1eb654f9906acb3c39/1521672177846/Aqua+Shutter+%283+of+3%29.jpg'}
	];
	let inventoryComponentList = yoyoList.map(function( yoyo ){
		return (
			<Inventory 
				key = {yoyo.id}
				info = {yoyo}
			/>
		)
	});
	return (
		<div>
			<NavBar/>
			<MainContent/>
			<hr/>
			<h2> My Yoyo Store </h2>
			{inventoryComponentList}
		</div>
	)
}

ReactDOM.render(<MyApp/>, document.getElementById('root'));