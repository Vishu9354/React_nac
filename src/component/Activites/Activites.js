    import React from 'react'
    import Carousel from './carousel.js'
    import Aboutactivites from './AboutActivites.js'
    import '../css/activity.css'
    import nac from '../images/NAC.jpg'
    export default function Activites() {
        const activites=[
        {
            name:"name of activies",
            des:"description of activites",
            image:nac,
        },
        {
            name:"name of activies",
            des:"description of activites",
            image:nac,
        },
        {
            name:"name of activies",
            des:"description of activites",
            image:nac,
        },
        {
            name:"name of activies",
            des:"description of activites",
            image:nac,
        },
        ]

    return (
        <>
        <Carousel/>
        <Aboutactivites activites={activites}/>
        </>
        
    )
    }
