import React from 'react'
import { motion } from 'framer-motion'
export default function AboutPage() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .5 }}

        >

            <div className="flex-center" style={{ minHeight: '60vh' }}>
                <div className="about">
                    <span>built with React, scss, framer-motion, swiper js</span>
                    <h1>Developer Website</h1>
                    <a href="https://ahmadsoran.com" rel='noreferrer' target={'_blank'}>ahmadsoran.com</a>
                </div>
            </div>
        </motion.div >
    )
}
