import React from 'react';

class Button extends React.Component{

  handleClick = (e)=> {
    console.log("Click-button");
    this.props.onHandleCLick(e.target.value);
  }

  render () {
    return(
    <td onClick={this.handleClick}>{this.props.text}</td>);
  }
}

export default Button