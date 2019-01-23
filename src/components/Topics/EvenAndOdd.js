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

    updateUserInput = (event) => {
        this.setState({
            userInput: event.target.value
        });
    }

    splitEvenAndOdds = () => {
        let tempCurrent = this.state.userInput.split('').map(Number);
        let tempEven = tempCurrent.filter(element => element % 2 === 0);
        let tempOdd = tempCurrent.filter(element => element % 2 === 1);
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