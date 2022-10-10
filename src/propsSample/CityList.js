import React from 'react'

function CityList({ cities }) {

    
    return (<>
        <ul>
            {
                cities.map((item) => <li>{item}</li>)
            }
        </ul>
    </>
    )
}

export default CityList