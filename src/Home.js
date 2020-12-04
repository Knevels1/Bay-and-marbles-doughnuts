import React from 'react'
import { TakeNum } from './TakeNum'
import { FAQ } from './Faq'

export const Home = (props) => {

const bakers = ["Ginger", "BlackOps", "Wild West"]



    

    return( 
    <>
    <h1>Welcome to the AMAZING BAY and MARBLE Doughnust, {props.user.name}</h1>
    <p>We have the most lovely Doughnust known to man</p>
    <h2>Our Bakers</h2>
    <ul>
    {bakers.map((baker, i) => <li key={i}>{baker}</li>)}
    </ul>
    <TakeNum />
    <FAQ />
    </>
    )
}