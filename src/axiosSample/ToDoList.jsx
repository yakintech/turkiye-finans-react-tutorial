import axios from 'axios'
import React, { useEffect, useState } from 'react'



function ToDoList() {

    const [todos, setTodos] = useState([]);

    useEffect(() => {

        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(response => {
                setTodos(response.data);
            })

    }, [])


    return (<>
    <h1>Length: {todos.length}</h1>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>User Id</th>
                    <th>Title</th>
                </tr>
            </thead>

            <tbody>
                {
                    todos && todos.map((item) => {
                        return <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.userId}</td>
                            <td>{item.title}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </>)
}

export default ToDoList