import React, { Component } from "react";
import "./App.css";
import InputBox from './Components/InputBox'
import 'tachyons';
import {Grid} from '@material-ui/core'
import RepoList from './Components/RepoList'
class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      isClicked: false,
      user_input: '',
      input_status:false
    }
  }
  onInputChange = (event) => {
    ((event.target.value.length) > 0) ? this.setState({ input_status:true}):this.setState({ input_status:false}) 
    // console.log(event.target.value.length)
    this.setState({ input: event.target.value })
  }
  onButtonSubmit = () => {
    console.log('Button Clicked')
    // console.log(this.state.input)
    this.setState({isClicked:true})
    this.setState({user_input :this.state.input});
    //this.setState({user_input :"krsamir"});
  }
  render() {
    const isClicked = this.state.isClicked;
    const input_status = this.state.input_status;
    let button;
    if(isClicked && !input_status){
      button = <Grid>
                  <h3>Invalid Username!</h3>
              </Grid>
    }
    if(isClicked){
      button = <RepoList input={this.state.user_input}/>;
    }
    return (
      <div>
        <div>
          <InputBox onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
          {button}
        </div>
      </div>
    );
  }
}

export default App
