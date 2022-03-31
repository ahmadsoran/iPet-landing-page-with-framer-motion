import React from 'react'
import { Link } from 'react-router-dom'
import manDoc1 from '../assets/img/man-doc-1.jpg'
import manDoc2 from '../assets/img/man-doc-2.jpg'
import womenDoc1 from '../assets/img/women-doc-1.jpg'
import womenDoc2 from '../assets/img/women-doc-2.jpg'
import womenDoc3 from '../assets/img/women-doc-3.jpg'
import womenDoc4 from '../assets/img/women-doc-4.jpg'
import { motion } from 'framer-motion'
import { InView } from 'react-intersection-observer'

export default function Doctors() {
    return (
        <InView threshold={0.15} triggerOnce={true}>
            {({ ref, inView }) => (
                <section ref={ref} className='my-container' id='section--4'>
                    <motion.header initial={{ opacity: 0, y: 50 }} animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }} transition={{
                        duration: .7,

                    }}>
                        <h1>Caring professionals</h1>
                        <p>iPet Hospital offers the best in veterinary care for your pet, with state-of-the-art medical equipment, cutting-edge medicine and caring compassionnate team </p>
                    </motion.header>
                    <main>
                        <motion.div initial={{ opacity: 0, y: 50, }} animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50, }} transition={{
                            duration: 1,
                            delay: .5,
                        }}>
                            <div className='row'>

                                <div className='col-sm-6 col-md-4 cards'>
                                    <div className="doctors">
                                        <div>

                                            <header>
                                                <img src={manDoc1} alt="" />
                                            </header>
                                            <div className="cardBody">
                                                <h1>Ronald Harvey</h1>
                                                <p>Ronaz qualified from Glasgow
                                                    Vet School in 1992 and after a
                                                    year as a house Surgeon
                                                    specialising in small animal and
                                                    equine Surgery. entered a busy
                                                    m practice in Wales.</p>
                                            </div>
                                        </div>
                                        <footer>
                                            <Link rel='noreferrer' to='/'  >Read more <span><i className='fa-solid fa-arrow-right'></i></span></Link>
                                        </footer>
                                    </div>
                                </div>
                                <div className='col-sm-6 col-md-4 cards'>
                                    <div className="doctors">
                                        <div>

                                            <header>
                                                <img src={manDoc2} alt="" />
                                            </header>
                                            <div className="cardBody">
                                                <h1>William Norton
                                                </h1>
                                                <p>
                                                    William qualified from the Royal
                                                    Veterinary College. London in
                                                    2014 and started working shortly
                                                    after graduation. William enjoys
                                                    all aspects Of veterinary work.
                                                </p>
                                            </div>
                                        </div>
                                        <footer>
                                            <Link rel='noreferrer' to='/'  >Read more <span><i className='fa-solid fa-arrow-right'></i></span></Link>
                                        </footer>
                                    </div>
                                </div>
                                <div className='col-sm-6 col-md-4 cards'>
                                    <div className="doctors">
                                        <div>

                                            <header>
                                                <img src={womenDoc2} alt="" />
                                            </header>
                                            <div className="cardBody">
                                                <h1>Olivia Gibson
                                                </h1>
                                                <p>
                                                    Olivia qualifÉ•d in 2016 and has
                                                    worked in several first opinion
                                                    practices since. Her particular
                                                    interests are in
                                                </p>
                                            </div>
                                        </div>
                                        <footer>
                                            <Link rel='noreferrer' to='/'  >Read more <span><i className='fa-solid fa-arrow-right'></i></span></Link>
                                        </footer>
                                    </div>
                                </div>
                                <div className='col-sm-6 col-md-4 cards'>
                                    <div className="doctors">
                                        <div>

                                            <header>
                                                <img src={womenDoc1} alt="" />
                                            </header>
                                            <div className="cardBody">
                                                <h1>Emily Lawson
                                                </h1>
                                                <p>
                                                    Emily graduated from the Royal
                                                    Veterinary College. She has a
                                                    keen interest in internal medicine
                                                    and enjoys soft tissue Surgery
                                                    and u</p>
                                            </div>
                                        </div>
                                        <footer>
                                            <Link rel='noreferrer' to='/'  >Read more <span><i className='fa-solid fa-arrow-right'></i></span></Link>
                                        </footer>
                                    </div>
                                </div>
                                <div className='col-sm-6 col-md-4 cards'>
                                    <div className="doctors">
                                        <div>

                                            <header>
                                                <img src={womenDoc3} alt="" />
                                            </header>
                                            <div className="cardBody">
                                                <h1>                                        Frederica Morris
                                                </h1>
                                                <p>Frederica Morris
                                                    has been working in
                                                    small animal practice since 2006.
                                                    She has a degree in animal
                                                    behaviour and has a
                                                    certihcate in small animal</p>
                                            </div>
                                        </div>
                                        <footer>
                                            <Link rel='noreferrer' to='/'  >Read more <span><i className='fa-solid fa-arrow-right'></i></span></Link>
                                        </footer>
                                    </div>
                                </div>
                                <div className='col-sm-6 col-md-4 cards'>
                                    <div className="doctors">
                                        <div>

                                            <header>
                                                <img src={womenDoc4} alt="" />
                                            </header>
                                            <div className="cardBody">
                                                <h1>Isabel Berry
                                                </h1>
                                                <p>Isabel Berry
                                                    wanted to a Vet Since
                                                    she was seven years old and she
                                                    it when She graduated from
                                                    vet in 2012. She then
                                                    worked Warwickshire for two years</p>
                                            </div>
                                        </div>
                                        <footer>
                                            <Link rel='noreferrer' to='/'  >Read more <span><i className='fa-solid fa-arrow-right'></i></span></Link>
                                        </footer>
                                    </div>
                                </div>

                            </div>
                        </motion.div>

                    </main>
                </section>
            )}
        </InView>
    )
}
