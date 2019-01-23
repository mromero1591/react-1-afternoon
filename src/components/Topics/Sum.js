import React, {Component} from 'react';

export default class Sum extends Component {
    constructor() {
        super();

        this.state = {
            numberOne: 0,
            numberTwo: 0,
            sum: null
        }
    }

    //Purpose: Update the user input, numone, for each change.
    //Parameters: event, the event that took place.
    //returns: none
    //outcome: numberOne state is updated.
    updateNumOne = (event) => {
        this.setState({numberOne: event.target.value})
    }

    //Purpose: Update the user input, numTwo, for each change.
    //Parameters: event, the event that took place.
    //returns: none
    //outcome: numberTwo state is updated.
    updateNumTwo = (event) => {
        this.setState({numberTwo: event.target.value})
    }

    //Purpose: Sum two numbers
    //Parameters: none
    //Returns: None
    //outcome: sum state is upated.
    getSum = () => {
        //Sum the two numbers
        let sum = parseInt(this.state.numberOne, 10) + parseInt(this.state.numberTwo, 10);
        //updateState
        this.setState({sum: sum});
    }

    render() {
        return(
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" onChange={this.updateNumOne}/>
                <input className="inputLine" onChange={this.updateNumTwo}/>
                <button className="confirmationButton" onClick={this.getSum}>Sum</button>
                <span className="resultsBox"> Sum:{this.state.sum} </span>
            </div>
        );
    }
}