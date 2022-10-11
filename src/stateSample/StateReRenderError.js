import React, { useState } from 'react'

function StateReRenderError() {

    const [counter, setcounter] = useState(0);


    setcounter(5);

  return (
    <div>StateReRenderError</div>
  )
}

export default StateReRenderError