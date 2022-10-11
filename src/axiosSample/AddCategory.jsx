import axios from 'axios'
import React, { useState } from 'react'
import { axiosInstance } from './axiosInstance';

function AddCategory() {

    const [name, setname] = useState('');
    const [description, setdescription] = useState('');
    //fetch veya axios

    const add = () => {

        //yeni bir kategori objesi oluşturuyorum.
        let newCategory = {
            name: name,
            description: description
        };

        axiosInstance.post("/categories", newCategory)
            .then(response => {
                console.log('Response', response);
                alert('Success')
            })
            .catch(err => {
                console.log('ERROR', err);
            })
    }

    return (<>
        <div>
            <label>Name:</label>
            <input type='text' onChange={(e) => setname(e.target.value)} />
        </div>
        <div>
            <label>Description:</label>
            <input type='text' onChange={(e) => setdescription(e.target.value)} />
        </div>
        <div>
            <button onClick={() => add()}>Add</button>
        </div>
    </>
    )
}

export default AddCategory