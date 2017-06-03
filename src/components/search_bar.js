//Babel transform JSX code to vainilla JavaScript: 
//  -> React.createElement('input', null, '') so we need to import React from our node_modules to this context
import React, { Component } from 'react'; 

// The objective of this component is when the user inputs keys, make a request to the YouTube API
class SearchBar extends Component {
    constructor(props) {
        super(props);

        // Initialitze the state with a JavaScript plain object
            // Is the only place where the state can be settet
        this.state = { term: '' };
    }


    render() {
        return (
            <div>
                <input onChange={(event) => this.setState({ term: event.target.value })} />
                <br/>
                Value of the input is: {this.state.term}
            </div>
        );
    }

}

// Make the SearchBar component importable from other files
export default SearchBar; 