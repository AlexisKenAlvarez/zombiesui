import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const AnimateScale = (props) => {

    const [ref, inView] = useInView({
        threshold: 0.5,
        triggerOnce: true
    })

    return (
        <motion.div initial={{ scale: 0 }} animate={inView ? { scale: 1 } : {}} transition={{ duration: 2, type: "spring" }} ref={ref}>
            {props.children}
        </motion.div>
    )
}

export default AnimateScale