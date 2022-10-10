import React from 'react'

function TRButton({ size, color, content }) {

    let btnSize = '50px'

    if (size == 'small') {
        btnSize = '25px'
    }
    else if (size == 'large') {
        btnSize = '100px'
    }

    return (<>
        <button style={{ fontSize: btnSize, color:color }}>{content}</button>
    </>
    )
}

export default TRButton