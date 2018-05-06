import React, { Component } from 'react';

class Progress extends Component {
  componentDidMount = () => {
    this.props.getProgressData();
  }
  render() {
    return (
      <div>
        <h1>Progress</h1>
      </div>
    );
  }
}
export default Progress;