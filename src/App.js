import React from 'react';
import Display from './components/Display/Display.js';
import Calculator from './components/Calculator/Calculator.js';

class App extends React.Component{
  constructor (props){
    super(props);
    this.state={
      display: "React!!"
    }
  }

  onClickActions =(e) =>{
    this.setState({
      display: "click"
                  })
  };
  render (){
    return (
      <>
        <Display text={this.state.display}/>
        <Calculator onHandleCLick={this.onClickActions}/>
      </>
    );
  };


}

export default App;
