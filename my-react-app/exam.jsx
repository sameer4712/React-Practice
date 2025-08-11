import React, { useState } from 'react'

function Exam(prop) {
    const [count, setcount] = useState(0);


    return (

        <>
        <div>
            
        </div>
            <div>
                {count}
                <button onClick={() => setcount(count + 1)}>click</button>
            </div>
        </>
    )
}

export default Exam