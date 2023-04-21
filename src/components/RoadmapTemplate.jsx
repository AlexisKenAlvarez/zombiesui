import React from 'react'
import { GiRaiseZombie } from 'react-icons/gi'
import { motion } from 'framer-motion'

const RoadmapTemplate = ({ list, q }) => {

    return (
        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1, scale: [0.5, 1]}} transition={{duration: 2, type: "spring"}} className="sm:w-[26rem] w-[19rem] sm:h-[34rem] h-[36rem] bg-gradient-to-b from-[#1F242E] to-black/60  rounded-tr-xl rounded-tl-xl relative p-8 my-24 mb-32">
            <h1 className='absolute left-0 right-0 -top-5 mx-auto -translate-y-full font-zombie text-center text-6xl glow'>
                Q{q} 2023
            </h1>
            <div className="flex flex-col gap-y-6 font-poppins">
                {list.map((items, i) => {
                    return (
                        <div className="flex gap-x-3" key={i}>
                            <div className="w-10">
                                <GiRaiseZombie className='text-white text-2xl' />

                            </div>
                            <p className='sm:text-sm text-[11px]'>{items}</p>
                        </div>
                    )
                })}
            </div>


            <img src="/drip.webp" alt="drip" className="bottom-0 left-0 absolute translate-y-[100%] opacity-70" />
        </motion.div>
    )
}

export default RoadmapTemplate