import './VideoPlayerGeneral.scss'

const VideoPlayerGeneral = ({image, duration, video, timestamp }) =>{
    const formattedDate = new Date(timestamp).toLocaleString("en-US", { year: "numeric", month: "2-digit", day: "2-digit" });

    return (
        <main className="main-video">
            <div className="main-video__player-wrapper">
                <video className="main-video__player" controls poster={image}>
                    <source src={video} type="video/mp4" />
                </video>
            </div>

        </main>
    );
}

export default VideoPlayerGeneral;