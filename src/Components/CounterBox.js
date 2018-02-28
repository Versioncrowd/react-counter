import React from 'react';

class CounterBox extends React.Component {

  render() {
    return   <div>
      <div className="CounterBox">{this.props.count}</div>
      </div>
  }
}


export default CounterBox;