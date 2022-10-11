import React, { useState } from 'react'

function StateInputSample() {


    const [names, setnames] = useState(['Çağatay', 'Hikmet']);
    const [name, setname] = useState('');


    const addName = () => {
        
        setnames([...names, name]);
        setname('')

    }

    return (<>
        <div>
            <label>Name: </label>
            <input type='text' value={name} onChange={(e) => setname(e.target.value)} />
        </div>
        <div>
            <button onClick={() => addName()}>Add</button>
        </div>
        <div>
            <ul>
                {
                    names.map((item) => {
                      return  <li>{item}</li>
                    })
                }
            </ul>
        </div>
    </>)
}

export default StateInputSample