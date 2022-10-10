import React from 'react'

function ClickComp(props) {

    return (<>
        <button onClick={props.hello}>Click Me!</button>
        <button onClick={() => props.calc(10)}>Calc!</button>
    </>)
}

export default ClickComp