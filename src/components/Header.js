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
							<li class="red"><Link to={paths.HOME}>Home</Link></li>
							<li class= "green"><Link to={paths.ABOUTUS}>About Us</Link></li>
							<li class="yellow"><Link to={paths.HISTORY}>History</Link></li>
					 </ul>
				</div>


				<ul class="logo-menu">
					<a href="/" class="logo">

						<img class="logo-white" src={MainLogo} alt=""/>

						<img class="logo-dark" src={MainLogo} alt=""/>
					</a>
				</ul>


				<div class="top-nav right-menu  background-red-dott">
					 <ul class="top-ul chevron " >

							<li class="blue"><Link to={paths.MEMBERS}>Members</Link></li>
							<li class="purple"><Link to={paths.CONTACT}>Contact</Link></li>
					 </ul>
				</div>
			</div>
		</nav>
	</header>
		);
	}
}
