import React from 'react';
import Display from './components/Display/Display.js';
import Calculator from './components/Calculator/Calculator.js';

class App extends React.Component{
  constructor (props){
    super(props);
    this.state={
        display:'',
    }
  }

  onClickActions =(text, type) =>{
      if(type === "d"){
          if(this.state.action){
              this.setState({

                  display: `${text}`
              })
          }
          else{
              this.setState({
                  display: `${this.state.display}${text}`
              })
          }

      }
      else{
          if(text === "="){
              switch(this.state.action){
                  case "+":
                      this.setState({
                          display: `${+this.state.display+this.state.prevDisplay}`,
                          prevDisplay: '',
                          action:'',
                      });
                      break;
                  case "-":
                      this.setState({
                          display: `${(+this.state.prevDisplay) - (+this.state.display)}`,
                          prevDisplay: '',
                          action:'',
                      });
                      break;
                  case "*":
                      this.setState({
                          display: `${(+this.state.prevDisplay)*(+this.state.display)}`,
                          prevDisplay: '',
                          action:'',
                      });
                      break;
                  case "/":
                      this.setState({
                          display: `${(+this.state.prevDisplay)/(+this.state.display)}`,
                          prevDisplay: '',
                          action:'',
                      });
                      break;


              }
          }
          else{
          this.setState({
              prevDisplay: this.state.display,
              action: `${text}`
          })
          }
      }

  };
  render (){
    return (
      <>
        <Display text={this.state.display}/>
        <Calculator onHandleClick={this.onClickActions}/>
      </>
    );
  };


}

export default App;
