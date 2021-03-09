import React, {Component} from 'react';
import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
// import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import './App.css';

const app = new Clarifai.App({
  apiKey: "35426aed9e7c48d7b630462d82d494bb",
});

// const particleParams = {
//   particles: {
//     number: { 
//       density: {
//         enable:true,
//         value_area:800, 
//         factor:300
//       }
//     }
//   }
// }

class App extends Component {
  constructor (props) {
    super(props); 
    this.state = {
      input:'', 
      imageUrl:'', 
      boxInfo:[]
    }
  }

  onInputChange = (event) =>  {
    this.setState( {input: event.target.value} );
    // boxInfo needs to be initialized to empty, 
    // else the bounding boxes from previous runs gets 
    // rendered over the new image on rerun, 
    // until the new bounding boxes for new image is
    // calculated and boxInfo is updated again. 
    this.setState( {boxInfo:[]} ); 
  }

  // When button is clicked
  onButtonSubmit = () =>  {
    /* The imageUrl is not getting updated fast enough. 
     * this.setState({imageUrl: this.state.input});
     * this.setState({boxInfo: []});  
     * So we use input instead of imageUrl in Api call
    */
     app.models
      .predict( { 
        id: "a403429f2ddf4b49b307e318f00e528b", 
        version: "34ce21a40cc24b6b96ffee54aabff139",},
        this.state.input )
      .then( response =>  {
        console.log(response);
        this.setRegionInfo(response);
      })
      .catch(err => console.log("Clarifai Error:", err)); 
  }


  calculateFaceLocation = (region) => {
    const boxInfo = region.region_info.bounding_box; 
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
        leftCol: boxInfo.left_col * width,
        topRow : boxInfo.top_row * height,
        rightCol: width - (boxInfo.right_col * width),
        bottomRow: height - (boxInfo.bottom_row * height)
    }
  }

  setRegionInfo = (data) => {
     const boxArray = data.outputs[0].data.regions;
     let boxData = []; 
     boxArray.forEach ( (region) => {
        let bounding_box = this.calculateFaceLocation(region); 
        let boxInfoObject = {
          id : region.id, 
          leftCol: bounding_box.leftCol, 
          topRow: bounding_box.topRow,
          rightCol: bounding_box.rightCol, 
          bottomRow: bounding_box.bottomRow
        }; 
        boxData.push(boxInfoObject);
     });
     this.setState({boxInfo:boxData});
  }

  drawBoundingBox = (box) => {
    this.setState ({box: box});
  }

  render() {
    return (
      <div className="App">
        <ImageLinkForm onInputChange={this.onInputChange}  onButtonSubmit={this.onButtonSubmit} />
        <FaceRecognition box={this.state.box} boxInfo={this.state.boxInfo} imageUrl={this.state.input} />
      </div>
    );
  } 
}

export default App;
