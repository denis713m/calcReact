import React from 'react';
import styles from './Calculator.module.css';
import Button from '../Button/Button.js';

class Calculator extends React.Component{

  onClickActions =(e) =>{
    console.log("Click-calc");
    this.props.onHandleCLick(e.target.value);
  };
  render () {
    return(
      <table className={styles.container}>
        <tbody>
        <tr>
          <Button text="+" onHandleCLick={this.onClickActions}/>
          <Button text="-"/>
          <Button text="*"/>
          <Button text="/"/>
        </tr>
        <tr>
          <td >7</td>
          <td >8</td>
          <td >9</td>
          <td rowSpan={4} className={styles.calculate}>=</td>
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