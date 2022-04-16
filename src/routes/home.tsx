import React from 'react'
import Client from '../components/Home/client'
import Doctors from '../components/Home/doctors'
import Header from '../components/Home/header'
import Map from '../components/Home/map'
import OnlineConsultation from '../components/Home/onlineConsultation'
import Services from '../components/Home/services'
import { motion } from 'framer-motion'
export default function Home() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: .5 }}
            >
                <Header /><Services /><OnlineConsultation /><Doctors /><Client /><Map />
            </motion.div>
        </>
    )
}
