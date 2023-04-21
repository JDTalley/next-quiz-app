/* A component to embed a video */
import { NextPage } from 'next'

const Video = ({ videoID }) => {
    const videoURL = "https://www.youtube.com/embed/" + videoID

    if (videoID) {
        return (
            <>
                <iframe 
                    width="560" 
                    height="315" 
                    src={videoURL} 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                </iframe>
            </>
        )
    } else {
        return null
    }
}

export default Video