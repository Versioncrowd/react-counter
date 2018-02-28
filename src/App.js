import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CountUp from './Components/CountUp';
import CountDown from './Components/CountDown';
import Toggler from './Components/Toggler';
import CounterBox from './Components/CounterBox';

class App extends Component {
  state = {
    count: 0,
    show: true
  }

countUpHandler = (count) => {
  this.setState((prevState) => {
    return {count: prevState.count + 1};
  })
}

countDownHandler = (count) => {
  this.setState((prevState) => {
    return {count: prevState.count - 1};
  })
}

toggler = (show) => {
  this.setState((prevState) => {
    return {show: !prevState.show} 
  })
}


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Counter</h1>
        </header>
       
        <CountUp count={this.state.count} click={this.countUpHandler} />
        <CountDown count={this.state.count} click={this.countDownHandler} />
        <Toggler click={this.toggler}/>
        {this.state.show ? <CounterBox count={this.state.count} /> : '' }
       
      </div>
    );
  }
}

export default App;
