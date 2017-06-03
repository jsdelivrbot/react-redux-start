// Import node_modules referencing the namespace
import React from 'react';
import ReactDOM from 'react-dom';

// Import our components referencing the location file
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyC_PjBTl4txc9C_EWDjsz5otQvLRLW7smI';

// Create a new component. 
// This component should create HTML code

const App = () => { 
    return (
        <div>
            <SearchBar />
        </div>
    );
};


// React please, take this component generated with HTML and put it to the DOM
ReactDOM.render(
    <App />, document.querySelector('.container')
);

