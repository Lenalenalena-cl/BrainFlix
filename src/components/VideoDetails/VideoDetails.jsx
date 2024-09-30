import "./VideoDetails.scss";
import viewsIcon from "./../../assets/icons/views.svg";
import likesIcon from "./../../assets/icons/likes.svg";

const VideoDetails = ({ mainVideo }) => {

    
    const formattedDate = new Date(mainVideo.timestamp).toLocaleString("en-US", { year: "numeric", month: "numeric", day: "numeric" });

    return (
        <main className="main-video__content">
            <h1 className="main-video__title">{mainVideo.title}</h1>
            <div className="main-video__info">
                <div className="main-video__upload">
                    <p className="main-video__author">{`By ${mainVideo.channel}`}</p>
                    <p className="main-video__date">{formattedDate}</p>
                </div>
                <div className="main-video__stats">
                    <div className="main-video__views">
                        <img src={viewsIcon} alt="views icon" />
                        <p className="main-video__views-count">{mainVideo.views}</p>
                    </div>
                    <div className="main-video__likes">
                        <img src={likesIcon} alt="likes icon" />
                        <p className="main-video__likes-count">{mainVideo.likes}</p>
                    </div>
                </div>
            </div>
            <p className="main-video__description">{mainVideo.description}</p>
        </main>
    );
};

export default VideoDetails;