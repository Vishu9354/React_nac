    import React from 'react'
    import Carousel from './carousel.js'
    import Aboutactivites from './AboutActivites.js'
    import '../css/activity.css'
    import nac from '../images/NAC.jpg'
    export default function Activites() {
        const activites=[
        {
            name:"TREKKING",
            des:"‘Somewhere between the bottom of the climb and the summit is the answer to the mystery of why we climb.’ We at NAC and IIT Jammu provide you with the ideal opportunity to canvass by trekking deep into the wilderness. Trekking is a recreational activity that involves covering a specified journey on foot. Like all physical activities, trekking is beneficial for your health because it helps develop your bones. It usually takes place on trails in areas of relatively unspoiled wilderness. We are excited to welcome you as a new member to explore uncharted paths and create your own memory lane.",
            image:nac,
        },
        {
            name:"RAFTING",
            des:"‘Riding the waves and living for the rush’ It is extraordinary to see the river from the starting level and to descend through the hills. The fresh air, the wide-open space, the perfect opportunity to disconnect from everything and live in the moment Rafting is a recreational outdoor activity that uses an inflatable raft to navigate a river or other body of water. We at NAC and IIT Jammu give you the opportunity to deal with risk, be a part of the experience, and create your own memories. We hope you will find the ride quite congenial, inspiring, and interesting.",
            image:nac,
        },
        {
            name:"CYCLING",
            des:"Cycling is packed with adventure, skill, speed, daring, and quick thinking that make it one of the best recreational sports in the modern world. It creates a pace that is fast enough to give teens the sense of activity and forward movement they need, yet slow enough for them to absorb what they’re seeing and experiencing. It’s an ideal sport that allows one to spread their wings. in an atmosphere that stresses responsibility and consideration, keeping them safe while they are experimenting with freedom. Moreover, amidst the growing rate of pollution in the world, cycling offers a greener way to commute. The Nature Adventure Club at IIT Jammu provides fun, outdoor entertainment, education, and opportunities for emotional and social growth in one of the safest way available.",
            image:nac,
        },
        {
            name:"PARAGLIDING",
            des:"Paragliding is an exciting sport that allows you to glide through the air while wearing a wide canopy, which is a fabric wing made up of many interconnected units. Paragliding is generally more accessible than other extreme sports since it does not require a special takeoff or landing track or any other sophisticated equipment. A very significant factor for paragliding is the air pressure; therefore, it is mainly practised in windy regions. Though filled with many risks and a lot of fear, this sport should be tried by everyone at least once. One can have a heart-warming heavenly view of green forests, lakes, and rivers and a much closer view of the ever-glowing mountains. NAC provides the opportunity to have this indelible life-changing experience.",
            image:nac,
        },
        {
            name:"PLANTING",
            des:"Planting simply means to plant seedlings in the ground for growing more trees in an area. With tree plantation, the problems that may arise due to deforestation can be restricted. One of which being the pollution, can be reduced to some extent through the increased rate of tree plantation. Tree planting is cost-effective, thus making it simpler to achieve the goal of making the earth a safer place. However, to reap the benefits of the trees, they should be properly maintained and taken good care of. It not only adds to the visual beauty of the place, but also allows people to dwell a bit amidst nature. As the name of the club specifies, we focus not only on adventures but also on nature and its prosperity. And therefore, the Nature and Adventure Club at IIT JAMMU, bring forth the opportunity to contribute to the beauty and welfare of the nature, by planting on various events and make earth a secure place to live in.",
            image:nac,
        },
        {
            name:"ROCK CLIMBING",
            des:"Rock climbing is an activity in which participants climb up, down, or across natural rock formations or artificial rock walls. The goal is to reach the summit of a formation or the endpoint of a pre-defined route without falling.Rock climbing is a physically and mentally demanding sport, one that often tests a climber’s strength, endurance, agility, and balance, along with mental control.Rock climbing is like traditional climbing, but it is practised on routes previously equipped with bolts and anchors.This allows the sport to be practised with greater safety and with a smaller investment in equipment.This type of climbing can be practised both on natural rocks and on artificial walls.Climbing walls are generally built of concrete or wood panels, to which footholds are bolted, similar to the ones found on the rock.The wall’s height and form depend largely on the purpose for which it was constructed, such as training or competition. The Nature and Adventure Club of IIT Jammu is providing many facilities to students to do adventure activities, like arranging different trips on a regular basis and also making a facility for wall climbing in the college so that interested students can come forward to take our college to new heights.",
            image:nac,
        },
        {
            name:"BUNGEE JUMPING",
            des:"Bungee jumping, an adrenaline-fueled adventure, is an exhilarating activity that involves leaping off a platform or bridge with a securely attached elastic cord. This daring sport combines the thrill of free-fall with the rush of rebounding, creating a heart-pounding experience for enthusiasts. The momentary suspension mid-air provides an unparalleled feeling of weightlessness, followed by a breathtaking rebound. Bungee jumping locations vary from scenic natural landscapes to urban environments, offering diverse experiences for thrill-seekers worldwide. With strict safety measures in place, this extreme sport continues to attract daring individuals seeking an unforgettable, gravity-defying adventure that pushes personal boundaries and delivers an unmatched adrenaline surge.",
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
