import React from 'react';
import SecondComponent from './SecondComponent';


class FirstComponent extends React.Component {

  render() {
    return (
      <>
        {this.props.names.map(name => (
          <SecondComponent
            key={name.id}
            name={name}
            names={this.props.names}
            setNames={this.props.setNames} />
          ))
        }
      </>
    );
  }
}

export default FirstComponent;