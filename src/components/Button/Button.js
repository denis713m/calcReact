import React from 'react';

class Button extends React.Component {

  handleClick = (e) => {
    this.props.onHandleCLick(e.target.innerText, this.props.type);
  };

  render() {
    let element = {};
    if (this.props.text === "=") {
      element = <td rowSpan={4} onClick={this.handleClick}>{this.props.text}</td>;
    } else {
      element = <td  onClick={this.handleClick}>{this.props.text}</td>;
    }
    return (<>{element}</>)
  }
}

export default Button