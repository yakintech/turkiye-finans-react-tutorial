import React from 'react'
import './style.css'

function JsxStyle() {

    let pStyle = {
        color:'tomato'
    }


  return (<>
    <p style={{color:'brown'}}>Türkiye</p>
    <p style={pStyle}>Türkiye</p>
    <p className='post'>Türkiye</p>

  </>
  )
}

export default JsxStyle