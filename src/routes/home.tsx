import React from 'react'
import Client from '../components/client'
import Doctors from '../components/doctors'
import Header from '../components/header'
import Map from '../components/map'
import OnlineConsultation from '../components/onlineConsultation'
import Services from '../components/services'
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
