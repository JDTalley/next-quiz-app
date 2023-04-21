/* Chapter component contains a video section and a text section */
import TextArea from './textArea'
import Video from './video'

const Chapter = ({ id, name, videoID, data }) => {
    return (
        <>
            <h2>{name}</h2>
            <Video videoID={videoID}/>
            <TextArea data={data}/>
        </>
    )
}

export default Chapter