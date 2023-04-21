import React, { useEffect } from 'react'
import HeroCanvas from '../canvas/HeroCanvas'
import Nav from '../components/Nav'
import { motion, useAnimation } from 'framer-motion';

const Hero = () => {

    const animation = useAnimation()

    useEffect(() => {
        sequence()
    }, [])

    async function sequence() {
        await animation.start({ opacity: 1, y: 20, x: 0, transition: { duration: 1.5 } })
        animation.start({
            y: [20, -20],
            transition: {
                repeat: Infinity,
                ease: 'easeInOut',
                repeatType: 'reverse',
                duration: 1.5
            }
        })
    }


    return (
        <section className="w-full h-screen bg-heroBg relative overflow-hidden">

            <div className="md:block hidden">
                <motion.img initial={{ y: 150, x: -150 }} animate={animation} src="/bats.webp" alt="bats1" className="absolute left-10 bottom-[10rem] z-10 w-[17rem] scale-x-[-1]" />
                <motion.img initial={{ y: 150, x: 150 }} animate={animation} src="/bats.webp" alt="bats1" className="absolute right-10 top-[10rem] z-10 w-[17rem]" />

            </div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.7 }} className="">
                <div className="w-[20rem] h-[20rem] bg-[#7db6b6] absolute rounded-full left-0 right-0 bottom-0 top-0 m-auto blur-[6rem]"></div>
                <img src="/moonaura.webp" alt="aura" className="w-[50rem] absolute top-0 bottom-0 left-0 right-0 m-auto" />
            </motion.div>

            <motion.img initial={{ y: 200 }} animate={{ y: 0 }} transition={{ duration: 3, ease: [0.16, 0.77, 0.47, .97] }} src="/moon.webp" alt="Moon" className="w-[25rem] z-0 absolute top-0 bottom-0 left-0 right-0 m-auto" />

            <img src="/herobg.webp" alt="bg" className="w-full h-full object-cover absolute" />

            <div className="w-full h-full">
                <HeroCanvas />
            </div>

            <div className="absolute left-0 top-0 w-full h-full z-10 px-8">
                <Nav />
                <motion.h1 initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 2, type: "spring", delay: 1.5 }} className='font-zombie 2xl:text-[13rem] md:text-[10rem] sm:text-8xl text-6xl text-center mt-24 2xl:mt-32 text-white text-stroke glow origin-center '>ZOMBIE SUI</motion.h1>
            </div>
        </section>
    )
}

export default Hero