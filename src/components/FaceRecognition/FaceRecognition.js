import React from 'react'; 
import './FaceRecognition.css';

const FaceRecognition = ({imageUrl, box, boxInfo}) => {
	return (
		<div className='center mt5'>
			<div className='imageContainer'>
			<img id='inputImage' className="imageArea" alt='' src={imageUrl} />
			{	boxInfo.map ( (box, i) => {
				return ( 
					<div key ={i} className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div> );
		      })
		   }
			</div>
		</div>	
	); 
}

export default FaceRecognition; 

