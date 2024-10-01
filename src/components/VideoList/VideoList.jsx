import VideoObject from '../VideoObject/VideoObject';
import './VideoList.scss';

const VideoList = ({ videos }) => {

    return (
        <nav className="video-list">
            <h4 className="video-list__title">Next Videos</h4>
            <ul className="video-list__item-wrapper">
                {videos.map((video) => (
                    
                    <VideoObject 
                        key={video.id}
                        id={video.id}
                        image={video.image}
                        title={video.title}
                        channel={video.channel}
                    />
                ))}
            </ul>
        </nav>
    );
}

export default VideoList;