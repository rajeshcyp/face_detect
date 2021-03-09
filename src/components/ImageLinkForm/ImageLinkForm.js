import React from 'react'; 
import './ImageLinkForm.css'; 

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
	return (
		<div> 
			<p className="f2 b mt5 mb2 helvetica light-purple washed-green">
			{'[ face.detect ]'}
			</p>
			<p className="f4 mt1 mb5 helvetica gold">
			{'detect faces in images'}
			</p>
			<div className='center'>
				<div className ='center form pa4 br3 shadow-5'> 
					<input className='f4 pa2 w-70 center1 b--gold' type='text' placeHolder='Enter an image URL here ..' onChange={onInputChange} /> 
					<button className='w-30 br1 b--gold ml2 f5 b link ph3 pv2 dib near-black bg-gold pointer' onClick={onButtonSubmit}> Detect </button> 
				</div> 
			</div> 
		</div> 
	); 
}

export default ImageLinkForm; 