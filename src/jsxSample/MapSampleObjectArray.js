import React from 'react'

function MapSampleObjectArray() {

    let webUsers = [
        {
            id: 1,
            name: 'Çağatay',
            surname: 'Yıldız',
            age: 18
        },
        {
            id: 2,
            name: 'Aykut',
            surname: 'Arslan',
            age: 30
        },
        {
            id: 3,
            name: 'Ebru',
            surname: 'Ata',
            age: 25
        },
        {
            id: 4,
            name: 'Hikmet',
            surname: 'Yılmaz',
            age: 50
        },
        {
            id: 5,
            name: 'Oya',
            surname: 'Bayraktar',
            age: 15
        }
    ]


    return (<>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {
                    webUsers.map((user) => {

                        if (user.age > 18) {
                            return <tr>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.surname}</td>
                                <td>{user.age}</td>
                            </tr>
                        }
                    })
                }
            </tbody>
        </table>
    </>)
}

export default MapSampleObjectArray