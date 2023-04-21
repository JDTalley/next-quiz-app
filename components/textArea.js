/* A component to hold text on a page */
import { NextPage } from 'next'

const TextArea = ({ data }) => {
    return (
        <>
            <p>{data}</p>
        </>
    )
}

export default TextArea