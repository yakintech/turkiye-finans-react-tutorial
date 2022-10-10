import React from 'react'

function StateSample() {

    let sayac = 0;

    const arttir = () => {
        sayac = sayac + 1;
        console.log('SAYAÇ', sayac);
        
    }

    return (<>
        <h1 id='syc'>Sayaç: {sayac}</h1>
        <button onClick={() => arttir()}>Arttir</button>
    </>
    )
}

export default StateSample