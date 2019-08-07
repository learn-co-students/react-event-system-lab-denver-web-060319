// Code Keypad Component Here
import React, {Component} from 'react'

export default class Keypad extends Component {

  keyPress = () => {console.log('Entering password...')}

  render() {
    return <input onKeyUp={this.keyPress} type="password" />;
  }
}