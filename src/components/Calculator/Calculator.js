import React from 'react';
import styles from './Calculator.module.css';
import Button from '../Button/Button.js';

class Calculator extends React.Component{

  onClickActions =(text, type) =>{
    this.props.onHandleClick(text, type);
  };
  render () {
    return(
      <table className={styles.container}>
        <tbody>
        <tr>
          <Button text="+" onHandleCLick={this.onClickActions}/>
          <Button text="-" onHandleCLick={this.onClickActions}/>
          <Button text="*" onHandleCLick={this.onClickActions}/>
          <Button text="/" onHandleCLick={this.onClickActions}/>
        </tr>
        <tr>
          <Button text="7" type="d" onHandleCLick={this.onClickActions}/>
          <Button text="8" type="d" onHandleCLick={this.onClickActions}/>
          <Button text="9" type="d" onHandleCLick={this.onClickActions}/>
          <Button text="=" rowSpan={4} className={styles.calculate} onHandleCLick={this.onClickActions}/>
        </tr>
        <tr>
          <td >4</td>
          <td >5</td>
          <td >6</td>

        </tr>
        <tr>
          <td >1</td>
          <td >2</td>
          <td >3</td>

        </tr>
        <tr>
          <td >0</td>
          <td >.</td>
          <td >C</td>

        </tr>
        </tbody>
      </table>
    );
  }
}

export default Calculator;