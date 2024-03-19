    import React from 'react'
    import Carousel from './carousel.js'
    import Aboutactivites from './AboutActivites.js'
    import '../css/activity.css'
    import nac from '../images/NAC.jpg'
    export default function Activites() {
        const activites=[
        {
            name:"TREKKING",
            des:"Discover the mystery of why we climb with NAC! Trek through unspoiled wilderness, strengthen your bones, and create unforgettable memories. Join us on this journey!.",
            image:nac,
        },
        {
            name:"RAFTING",
            des:"Experience the rush of riding the waves with NAC and IIT Jammu! Raft through stunning landscapes, disconnect from the world, and live in the moment. Join us to embrace the thrill, conquer challenges, and make unforgettable memories on the water!",
            image:nac,
        },
        {
            name:"CYCLING",
            des:"Experience the thrill of cycling with NAC at IIT Jammu! Cycling combines adventure, skill, speed, and quick thinking, making it one of the best recreational sports. It's fast enough to satisfy the need for activity yet slow enough to appreciate the surroundings. Cycling allows you to spread your wings in a responsible and considerate atmosphere, promoting safety while embracing freedom. Plus, in a world plagued by pollution, cycling offers a greener way to commute. Join us for outdoor fun, education, and social growth in the safest way possible!",
            image:nac,
        },
        {
            name:"PARAGLIDING",
            des:"Embark on an exhilarating adventure with NAC! Paragliding offers a thrilling experience as you glide through the air with a wide canopy, taking in breathtaking views of forests, lakes, rivers, and majestic mountains. Unlike other extreme sports, paragliding is accessible and doesn't require specialized equipment or tracks. While it involves risks and fear, the experience is truly unforgettable and life-changing. Join us for this indelible journey into the skies!",
            image:nac,
        },
        {
            name:"PLANTING",
            des:"Join hands with NAC at IIT Jammu to make a difference in the world! Planting trees is a simple yet effective way to combat the challenges of deforestation and pollution. By increasing the tree population, we can mitigate environmental issues and create a safer planet. Tree planting is not only cost-effective but also enhances the aesthetic appeal of our surroundings, allowing us to reconnect with nature. At NAC, we prioritize both adventure and environmental stewardship, offering opportunities to contribute to the beauty and welfare of nature through tree planting events. Together, let's make the Earth a more secure and sustainable place to call home.",
            image:nac,
        },
        {
            name:"ROCK CLIMBING",
            des:"Embark on an exhilarating journey with the Nature and Adventure Club at IIT Jammu! Rock climbing, whether on natural formations or artificial walls, challenges both your physical strength and mental fortitude. It's a sport that demands endurance, agility, and balance, testing your limits while ensuring safety through bolts and anchors. At our club, we offer various adventure activities, including regular trips and access to a wall climbing facility within the college premises. Join us to elevate your college experience and reach new heights of adventure!",
            image:nac,
        },
        {
            name:"BUNGEE JUMPING",
            des:"Dive into adrenaline-pumping bungee jumping! Leap off platforms securely attached to an elastic cord, experiencing free-fall followed by a thrilling rebound. With strict safety measures, this extreme sport offers unforgettable experiences for thrill-seekers worldwide. Join us for an adventure that defies gravity and leaves you breathless!",
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
