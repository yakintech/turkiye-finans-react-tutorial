import React from 'react'

function MapSample() {

    let countries = ['Türkiye', 'Azerbaycan', 'İran', 'Rusya', 'Almanya', 'Fransa'];



    return (<>

        <ul>
            {
                countries.map((item) => {
                    return <li>{item}</li>
                })
            }
        </ul>

    </>
    )
}

export default MapSample