import { useState } from 'react'
import './App.scss'
import Header from './components/Header/Header'
import VideoPlayerGeneral from './components/VideoPlayerGeneral/VideoPlayerGeneral'
import videos from './data/video-details.json'
import VideoDetails from './components/VideoDetails/VideoDetails'
import VideoList from './components/VideoList/VideoList'
import Comments from './components/Comments/comments'

function App() {
  const [video, setVideo] = useState(videos[0])
  const restVideos = videos.filter((restVid) => {
    return restVid.id !== video.id
  })

  const nextVideo = (id) => {
    const foundVideo = videos.find((video) => {
      return video.id === id;
    });

    setVideo(foundVideo);
  };


  return (
    <>
      <Header />
      <VideoPlayerGeneral
        image={video.image}
        duration={video.duration}
        video={video.video}
        timestamp={video.timestamp} />
      <div className='after-video'>

        <div className='content-left'>
              <VideoDetails
                title={video.title}
                channel={video.channel}
                description={video.description}
                views={video.views}
                likes={video.likes}
                timestamp={video.timestamp}
              />
            
            <Comments
              comments={video.comments} />
          </div>
          <VideoList
            videos={restVideos}
            switchNewVideo={nextVideo} />

        
      </div>
    </>
  )
}

export default App
