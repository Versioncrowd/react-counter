import React from 'react';

class CountDown extends React.Component {
  render() {
    return (
      <button onClick={this.props.click}>Count Down</button>
    )
  }
}

export default CountDown;