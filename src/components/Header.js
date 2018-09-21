import React, { Component } from'react';
import '../styles/Header.css';
import MainLogo from '../images/RoboLogo.png';
import * as paths from '../constants/paths.js'
import {Link } from 'react-router-dom';

export default class Header extends Component{
	render(){
		return(
	<header role="banner" class="position-absolute">
		<nav class=" full-width sticky">
			<div class="top-nav">

				<div class="logo hide-l hide-xl hide-xxl">
						<img class="logo-dark" src={MainLogo} alt=""/>
				</div>
				<p class="nav-text"></p>


				<div class="top-nav left-menu">
					 <ul class="right top-ul chevron">
							<li class="red"><a href="index.html">Home</a></li>
							<li class= "green"><a href="about-us.html">About Us</a></li>
							<li class="yellow"><Link to={paths.HISTORY}>History</Link></li>
					 </ul>
				</div>


				<ul class="logo-menu">
					<a href="index.html" class="logo">

						<img class="logo-white" src={MainLogo} alt=""/>

						<img class="logo-dark" src={MainLogo} alt=""/>
					</a>
				</ul>


				<div class="top-nav right-menu  background-red-dott">
					 <ul class="top-ul chevron " >

							<li class="blue"><a href="gallery.html">Members</a></li>
							<li class="purple"><a href="contact.html">Contact</a></li>
					 </ul>
				</div>
			</div>
		</nav>
	</header>
		);
	}
}
