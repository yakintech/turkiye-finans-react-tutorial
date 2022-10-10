import React, { useState } from 'react'

function StateSample2() {

    console.log('STATE sample 2 comp rendered!');

    //counter değişkenimin kendisi
    //setCounter değişkeni DEĞİŞTİRECEK TEK FONKSİYON
    //use state içerisindeki "0" değeri ise default value
    const [counter, setCounter] = useState(0);


    return (<>
        <h1>Counter: {counter}</h1>
        <button onClick={() => setCounter(10)}>Change</button>
    </>
    )
}

export default StateSample2