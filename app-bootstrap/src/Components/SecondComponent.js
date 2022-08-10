import React from 'react';

class SecondComponent extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    }
  };
  render() {
    return (
      <>
        <h3>SecondComponent</h3>
        <h2>{props.names}</h2>
      </>
    );
  }
};

export default SecondComponent;