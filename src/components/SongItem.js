import React from 'react';

const SongItem = props => {
    const [likes]= useState(0)

    return (
        <tr>
            <td>{props.title}</td>
            <td>{props.artist}</td>
            <td><button onClick={null /* Put your click handler here */}>Play Now</button></td>
            <td><button onClick={null /* Put your click handler here */}>Add to Queue</button></td>
            <td onClick={""}>{props.favorite ? "💚" : "♡"}</td>
            <td>Likes: {likes}<button onClick={/*need to create a helper method*/}>Like</button></td>
        </tr>
    )
}

export default SongItem;