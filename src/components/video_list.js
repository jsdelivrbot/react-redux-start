import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    // Returns an array with the result of the callback function on each element
    const videoItems = props.videos.map((video) => {
        return (
            <VideoListItem
                onVideoSelect = {props.onVideoSelect}
                key={video.etag} 
                video={video} />
        );
    });

    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
}

export default VideoList;