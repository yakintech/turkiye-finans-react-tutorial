import React from 'react'
import { useParams } from 'react-router-dom'

function ToDoDetail() {

    let { categoryid, id } = useParams();


    return (<>
        <h1>Category Id: {categoryid}</h1>
        <h1>Id: {id}</h1>
    </>

    )
}

export default ToDoDetail