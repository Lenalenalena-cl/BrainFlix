import "./VideoDetails.scss";

const VideoDetails = ({ title, channel, description, views, likes, timestamp}) => {
    const formattedDate = new Date(timestamp).toLocaleString("en-US", { year: "numeric", month: "numeric", day: "numeric" })

    return (
      
            <div className="main-video__content">
                <h1 className="main-video__title">{title}</h1>
                <div className="main-video__info">
                    <div className="main-video__upload">
                        <p className="main-video__author">{`By ${channel}`}</p>
                        <p className="main-video__date">{formattedDate}</p>
                    </div>
                    <div className="main-video__stats">
                        <div className="main-video__views">
                            <img src="src/assets/icons/views.svg" alt="views icon" />
                            <p className="main-video__views-count">{views}</p>
                        </div>
                        <div className="main-video__likes">
                            <img src="src/assets/icons/likes.svg" alt="likes icon" />
                            <p className="main-video__likes-count">{likes}</p>
                        </div>
                    </div>
                </div>
                <p className="main-video__description">{description}</p>
            </div>
    );
};

export default VideoDetails;