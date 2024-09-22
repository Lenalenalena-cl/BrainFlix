import { useState } from 'react'
import './App.scss'
import Header from './components/Header/Header'
import VideoPlayerGeneral from './components/VideoPlayerGeneral/VideoPlayerGeneral'
import videos from './data/video-details.json'
import VideoPlayerDetails from './components/VideoPlayerDetails/VideoPlayerDetails'

function App() {
  const [video, setVideo] = useState(videos[0])
  return (
    <>
      <Header/>
      <VideoPlayerGeneral
      image={video.image}
      duration={video.duration}
      video={video.video}
      timestamp={video.timestamp}/>
      <VideoPlayerDetails
      title={video.title} 
      channel={video.channel}
      description={video.description}
      views={video.views}
      likes={video.likes}
      timestamp={video.timestamp}
      />
    </>
  )
}

export default App
