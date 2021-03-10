import React from 'react'; 
import logo from './logo.png';
import './Logo.css'; 

const Logo  = () => {
	return (
		<div className="logo-container"> 
		   <div className="image-container" >
				<img className="logo" src={logo} /> 
			</div>
			<div className="tagline">
			   <p className="f2 b mt5 mb2 helvetica light-purple washed-green">
				{'[ face.detect ]'}
				</p>
				<p className="f4 mt1 mb5 helvetica gold">
				{'detect faces in images'}
				</p>	
		  </div>			
		</div>
	); 
}

export default Logo; 