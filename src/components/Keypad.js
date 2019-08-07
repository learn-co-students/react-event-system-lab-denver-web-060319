import React, { Component } from "react";

export default class Keypad extends Component {
    constructor() {
        super()
    }

    enteringPassword = () => {
        console.log("Entering password...")
    }

    render() {
        return (
            <input onKeyUp={this.enteringPassword} type="password" />
        )
    }
}