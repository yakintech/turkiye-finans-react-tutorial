import React, { useEffect, useState } from 'react'

function EffectSample() {

    console.log('Component rendered! ');
    const [counter, setcounter] = useState(0);
    const [counter2, setcounter2] = useState(0);


    //apiden data çekmek istersem?
    //herhangi bir metodu çalıştırmak istersem?

    //UseEffect içerisindeki kod SADECE BİR KERE ÇALIŞIR! Eğer dependency yok ise!
    useEffect(() => {
        console.log('Use effect!');
    }, [])

    //UseEffect içerisindeki kod counter-2 state değiştiğinde çalışır!
    useEffect(() => {
        console.log('Use effect-2');
    }, [counter2]);
    

    //Tüm state değişikliklerinde çalışır
    useEffect(() => {
        if(counter > 10){
            console.log('Use Effect - 3');
        }
    })


    return (<>
        <div>
            <h1>{counter}</h1>
            <button onClick={() => setcounter(counter + 1)}>Increase</button>
        </div>
        <div>
            <h1>{counter2}</h1>
            <button onClick={() => setcounter2(counter2 + 1)}>Increase-2</button>
        </div>

    </>
    )
}

export default EffectSample