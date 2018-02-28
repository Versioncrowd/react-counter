import React from 'react';

class Toggler extends React.Component {
  render() {
    return (
      <button onClick={this.props.click} >Toggle Counter</button>
    )
  }
}

export default Toggler;