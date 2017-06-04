import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyC_PjBTl4txc9C_EWDjsz5otQvLRLW7smI'; // Youtube Search API Key

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {videos : []};

        // Make a request to search videos
        YTSearch({key: API_KEY, term: 'reactJS'}, (videos) => {
            this.setState({ videos }); // ES6 compact the asignation when the key and the values has the same name
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

ReactDOM.render(
    <App />, document.querySelector('.container')
);