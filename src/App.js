import React,{ Component} from "react";
import "./App.css";
import {fetchData} from "./api/api";
import InputBox from './Components/InputBox'
import 'tachyons';

class App extends Component {
  constructor(){
    super();
    this.state = {
      input:''
    }
  }
  onInputChange = (event) =>{
    // console.log(event.target.value);
    this.setState({input:event.target.value})
  }
onButtonSubmit = () =>{
  // alert(this.state.input)
  console.log('Button Clicked')
  fetchData(this.state.input)
}
  render(){
    return(
      <div>
        <div>
    <InputBox onInputChange = {this.onInputChange} onButtonSubmit= {this.onButtonSubmit}/>
  </div>
      </div>
    );
  }
}

export default App
