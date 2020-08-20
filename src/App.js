import React, { Component } from "react";
import "./App.css";
import InputBox from './Components/InputBox'
import 'tachyons';
import RepoList from './Components/RepoList'
class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      isClicked: false,
      user_input: ''
    }
  }
  onInputChange = (event) => {
    this.setState({ input: event.target.value })
  }
  onButtonSubmit = () => {
    console.log('Button Clicked')
    // console.log(this.state.input)
    this.setState({isClicked:true})
    this.setState({user_input :this.state.input});
    // this.setState({user_input :"krsamir"});
  }
  render() {
    const isClicked = this.state.isClicked;
    let button;
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
