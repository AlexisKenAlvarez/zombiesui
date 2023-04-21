import React from 'react'
import AnimateLeft from '../components/AnimateLeft'
import AnimateRight from '../components/AnimateRight'

const About = () => {
    return (
        <section className="w-full h-auto bg-[#181c23] text-white px-10 relative z-0 pt-28" id="about">

            <div className="lg:block hidden">
                <img src="/webspider.png" alt="WebSpider" className="absolute left-0 top-0" />
                <img src="/web.png" alt="WebSpider" className="absolute right-0 top-0" />
            </div>



            <div className="max-w-[1500px] w-full mx-auto flex items-center justify-center py-20 gap-x-20 relative lg:flex-row flex-col gap-y-20 text-center lg:text-left">

                <div className="relative z-10">
                    <AnimateLeft>
                        <h1 className='font-zombie lg:text-8xl sm:text-6xl text-5xl glow'>ABOUT ZOMBIE SUI</h1>
                    </AnimateLeft>

                    <AnimateLeft>
                        <p className="max-w-[30rem] mt-5 font-poppins">
                            Suizombie is an innovative project that combines the exciting world of gaming and the popular trend of NFTs &#40;non-fungible tokens&#41; with the unique concept of zombies. With its token ZBS running on the SUI Chain, Suizombie has created a one-of-a-kind ecosystem of games and lotteries that revolve around NFT zombies.
                        </p>
                    </AnimateLeft>


                </div>
                <AnimateRight>
                    <img src="/about.webp" alt="About" className="w-[24rem]" />
                </AnimateRight>
                <div className="bg-white/10 w-[15rem] h-[15rem] blur-[6rem] rounded-full absolute left-0 top-[15rem]"></div>
            </div>

        </section>
    )
}

export default About