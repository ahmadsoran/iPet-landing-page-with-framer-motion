import React from 'react'
import { motion } from 'framer-motion'
import img from '../assets/img/women-doc-2.jpg'
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
                    <div className="row">
                        <div className="col-sm-4">
                            <img src={img} alt="" />
                        </div>
                        <div className="col-sm-8">

                            <h1>Lorem ipsum dolor sit amet.</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia dicta sint distinctio, enim voluptatum deserunt voluptate. Commodi animi, sed dolor officiis laboriosam eum tempora voluptatem assumenda odio ipsam aspernatur ab a possimus eos? Odit, vero soluta ut repudiandae doloribus dolorum officiis excepturi sed, nesciunt eius perspiciatis rem quaerat? Quibusdam, perspiciatis fugiat. Ipsum quas ipsa ad voluptatibus dolorum aperiam, suscipit laboriosam omnis nobis tempora officia officiis vel odit quasi dolore libero ea numquam saepe. Error iure vitae sunt ut voluptatum sapiente ex harum modi repudiandae autem doloribus id beatae quae cum blanditiis cumque, eius, unde, perferendis laboriosam architecto tenetur voluptatibus. Doloremque.</p>
                            <button className="my-c-btn">
                                make an apointments
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </motion.div >
    )
}
