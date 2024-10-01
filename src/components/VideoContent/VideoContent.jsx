import './VideoContent.scss';

import VideoDetails from './../../components/VideoDetails/VideoDetails';
import CommentSection from './../../components/CommentSection/CommentSection';
import VideoList from './../../components/VideoList/VideoList';

import { getVideoEndpoint } from "../../utils/utils";

import { useState, useEffect } from "react";

import axios from "axios";

const VideoContent = ({selectedVideoId, filteredVideos}) => {

    const [mainVideo, setMainVideo] = useState(null);

    const getMainVideo = async (videoId) => {
        try {
            let res = await axios.get(getVideoEndpoint(videoId));

            setMainVideo(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {

        getMainVideo(selectedVideoId);
    }, [selectedVideoId]); 

    if (! mainVideo) {
        return <p>loading...</p>;
      }


    return (

        <div className="app--desktop">
        <div className="app--tablet">
          <VideoDetails 
          mainVideo={mainVideo}
    
          />

          <CommentSection
            mainVideo={mainVideo}
            selectedVideoId={selectedVideoId}
            setMainVideo={setMainVideo}

          />
        </div>
    
        <VideoList 
          videos={filteredVideos}
        />

        </div>
    )
        
}




export default VideoContent;