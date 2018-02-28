import React from 'react';

class CountUp extends React.Component {

  render() {
    return (
      <button onClick={this.props.click}>Count Up</button>
    )
  }
}

export default CountUp;