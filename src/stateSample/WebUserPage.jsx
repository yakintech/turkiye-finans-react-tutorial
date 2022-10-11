import React, { useState } from 'react'

function WebUserPage() {

    const [name, setname] = useState('');
    const [surname, setsurname] = useState('');
    const [webusers, setwebusers] = useState([]);


    const addNewUser = () => {
        const randomId = Math.floor(Math.random() * 10000);

        let newUser = {
            id: randomId,
            name: name,
            surname: surname
        }

        //web api operation... 200, 201
        setwebusers([...webusers, newUser]);

        setname('');
        setsurname('')
    }


    const deleteUser = (id) => {

        let newUsers = webusers.filter(q => q.id != id);
        setwebusers([...newUsers])

    }

    return (<>

        <div>
            <div>
                <label>Name:</label>
                <input type='text' value={name} onChange={(e) => setname(e.target.value)} />
            </div>

            <div>
                <label>Surname:</label>
                <input type='text' value={surname} onChange={(e) => setsurname(e.target.value)} />
            </div>
            <div>
                <button onClick={() => addNewUser()}>Add</button>
            </div>
        </div>

        <h1>Webusers Count: {webusers.length}</h1>
        <button onClick={() => setwebusers([])}>Clear</button>
        <table>
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Surname</td>
                    <td>Delete</td>
                </tr>
            </thead>
            <tbody>
                {
                    webusers && webusers.map((item) => {
                        return <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.surname}</td>
                            <td><button onClick={() => deleteUser(item.id)}>Delete</button></td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </>
    )
}

export default WebUserPage