import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'
// const App=()=>{
//   window.navigator.geolocation.getCurrentPosition(
//     position=>console.log(position),
//     err=> console.log(err)
//   )
// return <div>'jknkfj</div>
// }

class App extends React.Component {

  // constructor(props) {
  //   super(props);


  //   //this is the only time we do direct assignment
  //   // to this.state
  //   this.state= { lat: null ,lang:null,errorMessage:''};

    
  // }

  state= { lat: null ,lang:null,errorMessage:''};

  //this .state inside constructor and state outside constructor are doing the same task
  // as state outside will undergoe into babel and produce the same constructor there fore we can simply remove the constructor

  componentDidMount(){

    //preloading like geolocation can be done in constructor as well as in componentDidMount
    //but professional prefer 
    window.navigator.geolocation.getCurrentPosition(
      position => {
        // we called setState and set stte will chnge and call render
        // console.log(position.coords.latitude)
        this.setState({ lat: position.coords.latitude ,lang:position.coords.longitude})
         //never ever do this because render pr no farak
        // this.state.lat=position.coords.latitude
      },
      err =>{
        this.setState({errorMessage:err.message})
      }
    )
  }
   

  renderContent(){
    // never ever call the function that takes some time to fetch eg the latitude/Comditional Rendering

    // /
    if(this.state.errorMessage && !this.state.lat)
    return <div>ERROR: {this.state.errorMessage}</div>


    else if(this.state.lat && !this.state.errorMessage)
    return <div><SeasonDisplay lat={this.state.lat }/></div>
    //taking state(lat) from one component(App) and passing as a prob to child component(SaeasonDisplay)
    //Whenever the this.setState is called  the lat property of app component will be change(App rerender itself) ,
    // since lat is changing  so  new value of latite will
    // be pass to the SeasonDispay and dthus the SeasonDisplay will also be rerendered


    else if(!this.state.lang && !this.state.errorMessage)
    return <Spinner message='please accept location'/>
  }
  
  //React says we always have to define a Rander !!!
  render() {
    //if we want to have border red on no matter which if condtion to be executed
    //then we will create a helper function renderContent which hepls int the exection od correct if statement and in this
    //render function we can simply add the property

    return(
      <div className="border red">
       { this.renderContent()}
      </div>
    )

  }
}

ReactDOM.render(

  <App />,

  document.querySelector('#root')
);
