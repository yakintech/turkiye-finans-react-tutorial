import React from 'react'

function IfElseSample() {

    let onlineStatus = true;

    return (<>

        {
          onlineStatus == true ? <span>User Online!</span> : <span>Offline!</span>
        }

    </>)
}

export default IfElseSample