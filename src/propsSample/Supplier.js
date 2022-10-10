import React from 'react'

function Supplier(props) {


    return (<>
        <div style={{ backgroundColor: props.color }}>
            <h1>{props.detail.id}</h1>
            <h1>{props.detail.companyName}</h1>
            <h1>{props.detail.contact}</h1>
        </div>


    </>
    )
}

export default Supplier