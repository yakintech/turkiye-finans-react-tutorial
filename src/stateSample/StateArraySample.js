import React, { useState } from 'react'

function StateArraySample() {

  const [cities, setcities] = useState(['İzmir', 'Ankara', 'İstanbul', 'Aydın', 'Muğla']);

  const clearCities = () => {

    setcities([]);

  }

  return (<>
    <h1>Cities: {cities?.length}</h1>
    
    <ul>
      {
        cities && cities.map((item) => <li>{item}</li>)
      }
    </ul>
    <button onClick={() => clearCities()}>Clear</button>
  </>
  )
}

export default StateArraySample