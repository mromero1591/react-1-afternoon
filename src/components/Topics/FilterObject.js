import React, { Component } from 'react';

export default class FilterObject extends Component {
    constructor() {
        super();

        this.state = {
            unfilteredArray: 
            [
                { 
                    "name": "Jimmy Joe", 
                    "title": "Hack0r", 
                    "age": 12 
                }, 
                { 
                    "name": "Jeremy Schrader", 
                    "age": 24, 
                    "hairColor": "brown" 
                }, 
                { 
                    "name": "Carly Armstrong", 
                    "title": "CEO" 
                }
            ],
            userInput: '',
            filteredArray: []
        }
    }

    //Purpose: Update the user input for each change.
    //Parameters: event, the event that took place.
    //returns: none
    //outcome: user input state is updated.
    updateUserInput = (event) => {
        this.setState({userInput: event.target.value});
    }
    
    //Purpose: filters an array of object for objects that do not contain the given property.
    //Parameters: none
    //returns: none
    //outcome: filteredArry state is updated.
    filterArray = () => {
        //create variable for the unfilted and filtered array.
        let tempUnfiltered = this.state.unfilteredArray;
        let tempFiltered = [];
        let keySearch = this.state.userInput;

        //Loop through each object in the array.
        tempUnfiltered.forEach(element => {
            //for each object check the properties in it. If not then push it into the filtered array.
            if(!element.hasOwnProperty(keySearch)) {
                tempFiltered.push(element);
            }
        });

        //set the updated state
        this.setState({
            filteredArray: tempFiltered
        })
    }

    render() {
        return(
            <div className='puzzleBox filterObjectPB'>
                <h4 className=''>Filter Objects</h4>
                <span className='puzzleText'>Original: { JSON.stringify(this.state.unfilteredArray, null,10)}</span>
                <input className='inputLine'onChange={this.updateUserInput} value={this.state.userInput}/>
                <button className='confirmationButton' onClick={this.filterArray}>Filter</button>
                <span className="resultsBox filterObjectRB"> Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        );
    }
}