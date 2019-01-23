import React, { Component } from "react";

export default class Palindrome extends Component {
    constructor() {
        super();

        this.state = {
            result: '',
            userInput: '',
        }
    }

    //Purpose: Update the user input for each change.
    //Parameters: event, the event that took place.
    //returns: none
    //outcome: user input state is updated.
    updateUserInput = (event) => {
        this.setState({userInput: event.target.value})
    }

    //Purpose: Find out if the given string can be splleded both backwards and upwords.
    //Parameters: none.
    //Return: none.
    //Outcome: Result state is updated.
    checkPalindrome = () => {
        //create temp variables
        let tempResult = this.state.result;
        let tempInput = this.state.userInput.toLocaleLowerCase();

        //reverse the input
        let reversedInput = tempInput.split('').reverse().join('');

        //check if the reversed input is the same as the temp input.
        //if they are the same set restult to true, else to false
        tempResult = reversedInput === tempInput ? 'true' : 'false';

        //update state.
        this.setState({
            result: tempResult
        })
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Paladrome</h4>
                <input className="inputLine" onChange={this.updateUserInput} value={this.state.userInput}/>
                <button className="confirmationButton" onClick={this.checkPalindrome}>Check</button>
                <span className="resultsBox">Paladrome: {this.state.result}</span>
            </div>
        );
    }
}