import React, { useState } from 'react'


export const TakeNum = () => {
    const [num ,setNum] = useState(1)

    const takeNumber = () => {
        setNum(num + 1)
        console.log(num)
    }
    
    return (
        <>
        <h2>Take A Ticket</h2>
            <button onClick={takeNumber}>grab a number</button>
        <h2>Current Number: {num}</h2>
        </>
    )
}