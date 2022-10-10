import React from 'react'

function PostDetail(props) {

    return (<>
        <h1>{props.id}</h1>
        <h1>{props.title}</h1>
        <h1>{props.detail}</h1>
    </>
    )
}

export default PostDetail