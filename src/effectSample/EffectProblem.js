import React, { useEffect, useState } from 'react'

function EffectProblem() {
    const [counter, setcounter] = useState(0);

    useEffect(() => {
        
     const myInterval = setInterval(() => {
            console.log('Hello!');
        }, 5000);
    
      return () => {
          
        clearInterval(myInterval)
      }

    }, [counter])
    


    return (<>
        <div>
            <h1>{counter}</h1>
            <button onClick={() => setcounter(counter + 1)}>Increase</button>
        </div>
    </>
    )
}

export default EffectProblem