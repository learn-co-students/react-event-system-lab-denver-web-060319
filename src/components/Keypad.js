import React, {Component} from 'react'

export default class Keypad extends Component{
    constructor(){
        super()
        this.state = {

        }
    }
    render(){
        return (
            <form>

                <input
                onKeyUp={() => console.log('Entering password...')}
                type='password'>
                </input>
            </form> 
        )
    }

}