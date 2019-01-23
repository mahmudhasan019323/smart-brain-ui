import React, { Component } from 'react';
import './App.css';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Particles from 'react-particles-js';
import 'tachyons';
import SignIn from './components/Signin/SignIn';
import SignUp from './components/Signup/SignUp';

const particlesOptions = {
  "particles": {
      "number": {
          "value": 100,
          "density": {
            "enable": true,
            "value_area": 800
          }
      },
      "size": {
          "value": 3
      }
  },
  "interactivity": {
      "events": {
          "onhover": {
              "enable": false,
              "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          }
      }
  }
};

const initialState = {
  input : '',
  imgUrl : '',
  box : {},
  route: 'signin',
  issignedin: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  }
}

class App extends Component {
  constructor(){
    super();
    this.state = initialState;
  }
  
  calculateFaceLocation(data){
    const faceBox = data.outputs[0].data.regions[0].region_info.bounding_box;
    const inputImg = document.querySelector('#inputImg');
    const width = Number(inputImg.width);
    const height = Number(inputImg.height);

    return {
      topRow : faceBox.top_row * height,
      rightCol : width - (faceBox.right_col * width),
      bottomRow : height - (faceBox.bottom_row * height),
      leftCol : width * faceBox.left_col
    }

  }
  displayFaceBox = (box)=>{
    this.setState({box : box});
  }

  onInputChange = (e)=>{
    this.setState({input : e.target.value})
  };

  onClick = (e)=>{
      this.setState({imgUrl : this.state.input});    
      fetch('http://localhost:3000/imageurl', {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            input: this.state.input
          })
      })
      .then(response => response.json())
      .then(response => {
        if(response){
          fetch('http://localhost:3000/image', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
           .then(res => res.json())
           .then(data=>{
             this.setState(Object.assign(this.state.user,{entries: data}));
           });
        }
        
        
        this.displayFaceBox(this.calculateFaceLocation(response));
      })
      .catch(err => console.log(err));
  };

  onRouteChange = (route)=>{
    this.setState({route : route});
    if(route === 'home'){
      this.setState({issignedin : true});
    }
    else if(route === 'signout'){
      this.setState(initialState);
    }
  }
  
  loadUser = (data)=>{
    const {id,email,name,entries,joined} = data;
    this.setState({
      user: {
        id: id,
        name: name,
        email: email,
        entries: entries,
        joined: joined
      }
    })
  }
        
  render() {
    return (
      <div className="App">
        <Particles params={particlesOptions} className="particles"/>
        <Navigation onRouteChange={this.onRouteChange} isSignedIn={this.state.issignedin}/>
        {
          this.state.route === 'signin' 
          ? <SignIn onRouteChange={this.onRouteChange} loadUser={this.loadUser}/>

          : this.state.route === 'signup' 

           ? <SignUp onRouteChange={this.onRouteChange} loadUser={this.loadUser}/>
           : <div>
              <Logo />
              <Rank rank={this.state.user.entries} name={this.state.user.name}/>
              <ImageLinkForm onChange={this.onInputChange} onClick={this.onClick}/>
              <FaceRecognition box={this.state.box} imgUrl={this.state.imgUrl}/>
            </div>
        }
      
      </div>
    );
  }
}

export default App;
