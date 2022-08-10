import React from 'react';
import SecondComponent from './SecondComponent';


class FirstComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.textInput = React.createRef();  
  };

  componentDidMount() {
    this.textInput.current.focusTextInput();
  };

  render() {
    return (
      {props.names.map(name => (
        <SecondComponent
          ref={this.textInput}
          name={props.name}
          names={props.names}
          setNames={props.setNames} />
        ))
      }
    );
  }
}

export default FirstComponent;