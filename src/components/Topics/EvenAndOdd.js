import React, {Component} from 'react';

export default class EvenAndOdd extends Component {
    constructor() {
        super();
        
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }

    //Purpose: Update the user input for each change.
    //Parameters: event, the event that took place.
    //returns: none
    //outcome: user input state is updated.
    updateUserInput = (event) => {
        this.setState({
            userInput: event.target.value
        });
    }

    //Purpose: Split a given array into two array, once of even and one of odd
    //Parameters: none.
    //returns: none
    //Outcome: odd and even array are updated in state.
    splitEvenAndOdds = () => {
        
        //Create a temp array with the user input split into an array of numbers
        let tempCurrent = this.state.userInput.split('').map(Number);

        //filter the array for even numbers.
        let tempEven = tempCurrent.filter(element => element % 2 === 0);
        //filter the array for odd numbers.
        let tempOdd = tempCurrent.filter(element => element % 2 === 1);

        //update state.
        this.setState({
            evenArray: tempEven,
            oddArray: tempOdd,
            userInput: ''
        })
    }

    render() {
        return(
            <div className='puzzleBox evenAndOddPB'>
                <h4>Even And Odds</h4>
                <input 
                    className='inputLine'
                    onChange={this.updateUserInput}
                    value={this.state.userInput}/>
                <button className='confirmationButton' onClick={this.splitEvenAndOdds}>Split</button>
                <span className='resultsBox'> Even: { JSON.stringify(this.state.evenArray) }</span>
                <span className='resultsBox'> Odd: {JSON.stringify(this.state.oddArray)}</span>
            </div>
        );
    }
}