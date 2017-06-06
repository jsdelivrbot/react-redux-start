import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyC_PjBTl4txc9C_EWDjsz5otQvLRLW7smI'; // Youtube Search API Key

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos : [],
            selectedVideo : null
        };

        // Initial video search
        this.videoSearch('ReactJS');
    }

    videoSearch(term) {        
        // Make a request to Youtube API
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({ 
                videos : videos,
                selectedVideo : videos[0]
            });
        });
    }



    render() {
        // Generate a debouce function that execute once every 300 mseconds
        const videoDebounceSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

        return (
            <div>
                <SearchBar onSearchTermChange={ videoDebounceSearch } />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    onVideoSelect={ selectedVideo => this.setState( {selectedVideo}) }
                    videos={this.state.videos} />
            </div>
        );
    }
}

ReactDOM.render(
    <App />, document.querySelector('.container')
);