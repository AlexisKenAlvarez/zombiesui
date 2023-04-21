import React from 'react'
import AnimateScale from '../components/AnimateScale'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const Tokenomics = () => {

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5
    })

    const list = [
        {
            title: 'Ecosystem',
            amount: 9,
            color: '#957002'
        },
        {
            title: 'Private Sale',
            amount: 10,
            color: '#4283f3'
        },
        {
            title: 'IDO',
            amount: 12,
            color: '#e94234'
        },
        {
            title: 'Marketing',
            amount: 6,
            color: '#f9bb04'
        },
        {
            title: 'Advisor',
            amount: 3,
            color: '#34a752'
        },
        {
            title: 'Reward Pool',
            amount: 45,
            color: '#ff6c00'
        },
        {
            title: 'SuiZombie Team',
            amount: 6,
            color: '#46bbc5'
        },
        {
            title: 'Airdrop',
            amount: 1,
            color: '#0a48af'
        },
        {
            title: 'Liquidity',
            amount: 8,
            color: '#9b1a10'
        },

    ]

    const container = {
        hidden: { opacity: 0, y: 100 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.07,
            }
        }
    }

    const item = {
        hidden: { opacity: 0, y: 100 },
        show: { opacity: 1, y: 0, duration: 2 }
    }

    return (
        <div className="w-full h-auto bg-newbg text-white py-20 px-10 overflow-hidden relative" id="tokenomics">

            <div className="lg:block hidden">
                <img src="/webspider.png" alt="WebSpider" className="absolute left-0 top-0" />
                <img src="/web.png" alt="WebSpider" className="absolute right-0 top-0" />
            </div>

            <AnimateScale>
                <div className="relative flex items-center w-fit mx-auto">
                    <img src="/pot.webp" alt="pot" className=" sm:block hidden w-[14rem] -mr-14" />
                    <h1 className='md:text-8xl text-6xl font-zombie glow text-center'>TOKENOMICS</h1>
                </div>
            </AnimateScale>

            <div className="max-w-[1500px] w-full mx-auto flex items-center justify-center gap-x-20 gap-y-12 mt-20 md:flex-row flex-col ">
                <div className="w-full flex items-center justify-center">
                    <motion.img initial={{ opacity: 0, rotate: -180 }} whileInView={{ opacity: 1, x: [-200, 0], rotate: 0 }} transition={{ duration: 1.2 }} src="/tokenomics.webp" alt="Tokenomics" className="w-[28rem]" />
                </div>
                <motion.div variants={container} initial="hidden" animate={inView ? "show" : ""} className="flex flex-col md:w-full font-poppins gap-y-3 w-fit" ref={ref}>
                    {list.map((items, i) => {
                        return (
                            <motion.div variants={item} className="flex items-center w-[19rem] gap-x-3" key={i}>
                                <div className="w-10 h-2" style={{ backgroundColor: `${items.color}`, boxShadow: `0px 0px 32px 0px ${items.color}` }} ></div>
                                <div className="flex w-[17rem] justify-between">
                                    <h1>{items.title}: </h1>
                                    <h3>{items.amount}.00 %</h3>
                                </div>
                            </motion.div>
                        )
                    })}
                </motion.div>


            </div>
        </div>
    )
}

export default Tokenomics