import React from 'react'
import AnimateScale from '../components/AnimateScale'
import Slider from 'react-slick'
import RoadmapTemplate from '../components/RoadmapTemplate'

const Roadmap = () => {

    const q1 = [
        "Research and analysis: Conduct market research and analyze user preferences to identify the key features and requirements for the SuiZombie game and Zombie Lottery.",
        "Design and development: Based on the research findings, design and develop the initial version of the SuiZombie game, including the game mechanics, graphics, and user interface. Develop the smart contracts and platform for the Zombie Lottery.",
        "Build website and community: Develop a website for the Suizombie project, including a whitepaper, team introduction, and roadmap. Create social media accounts and build a community around the project.",
        "Testing and monitoring: Test the SuiZombie game and Zombie Lottery to ensure their stability, security, and user-friendliness. Set up a monitoring system to detect and prevent potential issues."
    ]

    const q2 =
        [
            "Fundraising and IDO: Launch an Initial DEX Offering \(IDO\) to raise funds for the project. Allocate the funds to further develop the platform and expand the team.",
            "Launch SuiZombie game and Zombie Lottery: Release the SuiZombie game and Zombie Lottery to the public simultaneously, allowing users to play the game and participate in the lottery. Implement a referral program and marketing campaigns to attract new users.",
            "Enhancements and bug fixes: Continuously improve the SuiZombie game and Zombie Lottery based on user feedback and performance data. Fix any bugs or issues that arise."
        ]


    const q3 = [

        "Full launch of Zombie Lottery: Release the final version of the Zombie Lottery, allowing users to participate in daily, weekly, and monthly draws. Implement a reward system for users who hold NFTs of the Suizombie project.",
        "Integration with other platforms: Integrate the SuiZombie game and Zombie Lottery with other blockchain-based platforms to expand their reach and user base.",
        "Security audit: Conduct a security audit of the entire platform to ensure its safety and reliability."

    ]

    const q4 = [
        "Expansion of SuiZombie game: Add new features and game modes to the SuiZombie game, such as tournaments and leaderboards. Develop a mobile app version for Android and iOS.",
        "Partnership and collaboration: Establish partnerships and collaborations with other blockchain-based gaming platforms to share resources and expand the ecosystem.",
        "Community engagement: Engage with the SUIchain community through social media, forums, and events to gather feedback and build a strong community around the Suizombie project."
    ]

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    };

    return (
        <div className="w-full h-auto bg-newbg text-white py-20 pb-36 px-10 relative" id="roadmap">

            <img src="/roadmapbg.webp" alt="roadmap" className="w-full h-full object-cover absolute bottom-0 left-0" />

            <AnimateScale>
                <div className="relative flex items-center w-fit mx-auto">
                    <img src="/book.webp" alt="book" className=" sm:block hidden w-[14rem] -mr-14" />
                    <h1 className='md:text-8xl text-6xl font-zombie glow text-center'>ROADMAP</h1>
                </div>
            </AnimateScale>

            <div className="max-w-[1500px] mx-auto w-full mt-32">

                <div className="xl:max-w-[88rem] lg:max-w-[60rem] sm:max-w-[26.5rem] max-w-[19.5rem] mx-auto">
                    <Slider {...settings}>

                        <RoadmapTemplate list={q1} q="1" />
                        <RoadmapTemplate list={q2} q="2" />
                        <RoadmapTemplate list={q3} q="3" />
                        <RoadmapTemplate list={q4} q="4" />


                    </Slider>
                </div>

            </div>
        </div>
    )
}

export default Roadmap