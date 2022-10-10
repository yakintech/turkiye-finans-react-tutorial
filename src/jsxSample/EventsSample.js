
import React from 'react'

function EventsSample() {

    const merhaba = () => {
        alert('Merhaba Reactjs!!')
    }

    const getCountryCode = (e) => {
        
        console.log('element', e.target.value);
    }

    return (<>
        <div>
            <button onClick={merhaba}>Merhaba</button>
            <button onClick={() => merhaba()}>Merhaba-2</button>
        </div>

        <select onChange={(e) => getCountryCode(e)}>
            <option value={1}>Türkiye</option>
            <option value={2}>Almanya</option>
            <option value={3}>Yunanistan</option>
        </select>

    </>
    )
}

export default EventsSample