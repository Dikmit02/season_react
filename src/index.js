import React from 'react';
import ReactDOM from 'react-dom';

// const App=()=>{
//   window.navigator.geolocation.getCurrentPosition(
//     position=>console.log(position),
//     err=> console.log(err)
//   )
// return <div>'jknkfj</div>
// }

class App extends React.Component {

  constructor(props) {
    super(props);


    //this is the only time we do direct assignment
    // to this.state
    this.state = { lat: null ,lang:null,errorMessage:''};

    window.navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position)
        // we called setState
        this.setState({ lat: position.coords.latitude ,lang:position.coords.longitude})


        //never ever do this
        // this.state.lat=position.coords.latitude
      },
      err =>{
        this.setState({errorMessage:err.message})
      }
    )
  }


  componentDidMount(){
    console.log(" componentDidMount ");
  }

  componentWillUpdate(){
    console.log(" componentWillUpdate ");
  }

  
  //React says we always have to define a Rander !!!
  render() {
    // never ever call the function that takes some time to fetch eg the latitude/Comditional Rendering

    // /
    if(this.state.errorMessage && !this.state.lat)
    return <div>ERROR: {this.state.errorMessage}</div>
    else if(this.state.lat && !this.state.errorMessage)
    return <div>LOCATION: {this.state.lat}</div>
    else if(!this.state.lang && !this.state.errorMessage)
    return <div>LOADING!!!!</div>

  }
}

ReactDOM.render(

  <App />,

  document.querySelector('#root')
);
