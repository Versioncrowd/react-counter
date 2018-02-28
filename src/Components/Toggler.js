import React from 'react';

class Toggler extends React.Component {
  render() {
    return (
      <button onClick={this.props.click} >Hide Counter</button>
    )
  }
}

export default Toggler;