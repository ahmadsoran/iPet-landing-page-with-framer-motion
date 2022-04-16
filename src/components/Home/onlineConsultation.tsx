import React from 'react'
import dogWithHeadSet from '../../assets/img/dogWithHeadset.png'
import { motion } from 'framer-motion'
import { InView } from 'react-intersection-observer'
export default function OnlineConsultation() {
    return (

        <InView threshold={.5} triggerOnce={true}>
            {({ ref, inView }) => (

                <section ref={ref} className='my-container' id='section--3'>

                    <div className="row">
                        <div className="col-md-6 online-consultation-img-side">
                            <motion.div initial={{ opacity: 0, translateX: -50 }} animate={{ opacity: inView ? 1 : 0, translateX: inView ? 0 : -50 }} transition={{ duration: 1, ease: 'backInOut' }}>
                                <img src={dogWithHeadSet} alt="" />
                                <i className="fa-solid fa-headphones-simple"></i>
                            </motion.div>
                        </div>
                        <div className="col-md-6">
                            <motion.div initial={{ opacity: 0, translateX: 50 }} animate={{ opacity: inView ? 1 : 0, translateX: inView ? 0 : 50 }} transition={{ duration: 1, ease: 'backInOut' }}>

                                <div className="online-consultation-text-side">
                                    <h1>Online <br /> Consultation</h1>
                                    <p>peompt veterinary care whatever you are, book an online video chat with one of our emergency vets and talk through youe concerns from the comfort of your own home</p>
                                    <button className='my-c-btn'>Make an apointments <span><i className="fa-solid fa-phone"></i></span></button>
                                    <i className="fa-solid fa-headphones-simple headphones"></i>

                                </div>

                            </motion.div>
                        </div>
                    </div>
                </section>
            )}
        </InView>
    )
}
