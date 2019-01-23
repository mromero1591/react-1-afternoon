import React, {Component} from 'react';

export default class FilterString extends Component {
    constructor() {
        super()
        this.state = {
            unFilteredNames: [ "Jolene", "Harry", "Chirs", "Colleen", "Alysha", "Brad", "Anthony", "Meli" ],
            userInput: '',
            filteredNames: []
        }
    }

    //Purpose: Update the user input for each change.
    //Parameters: event, the event that took place.
    //returns: none
    //outcome: user input state is updated.
    updateUserInput = (event) => {
        this.setState({
            userInput: event.target.value
        })
    }

    //Purpose: Find the stings in the array, that contained a given value.
    //Parameters: none
    //Returns: none
    //Outcome: filteredNames, is updated
    filterNames = () => {
        //create temp variables for the filtered names, search value, and unfiltered names
        let tempUnFilteredNames = this.state.unFilteredNames;
        let tempFilteredNames = [];
        let searchKey = this.state.userInput;

        //loop through the string
        tempUnFilteredNames.forEach(element => {
            //check to see if the element contains the given string.
            if(element.includes(searchKey)) {
                tempFilteredNames.push(element);
            }
            //if the element does contain it, push it to the filtered array.
        });

        //update the state
        this.setState({
            filteredNames: tempFilteredNames
        })
    }

    render() {
        return(
            <div className="puzzleBox filterStringPB">
                <h4> Filter Strings </h4>
                <span className="puzzleText"> Original: {JSON.stringify(this.state.unFilteredNames, null, 10)}</span>
                <input className="inputLine" onChange={this.updateUserInput} value={this.state.userInput}/>
                <button className="confirmationButton" onClick={this.filterNames}>Filter</button>
                <span  className="resultsBox filterStringRB">Filtered: {JSON.stringify(this.state.filteredNames, null,10)}</span>
            </div>
        );
    }
}