// Code EyesOnMe Component Here
import React, {Component} from 'react'

export default class EyesOnMe extends Component {


  focusMe = () => {console.log('Good!')}

  blurMe = () => {console.log('Hey! Eyes on me!')}

  render () {
    return (
        <button onFocus={this.focusMe} onBlur={this.blurMe}>Press Me!</button>
      );
  }
}