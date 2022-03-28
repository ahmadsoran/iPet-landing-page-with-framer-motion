import React from 'react'
import dogWithHeadSet from '../assets/img/dogWithHeadset.png'
export default function OnlineConsultation() {
    return (
        <section className='my-container' id='section--3'>
            <div className="row">
                <div className="col-md-6 online-consultation-img-side">
                    <img src={dogWithHeadSet} alt="" />
                    <i className="fa-solid fa-headphones-simple"></i>
                </div>
                <div className="col-md-6">
                    <div className="online-consultation-text-side">
                        <h1>Online <br /> Consultation</h1>
                        <p>peompt verterinary care whatever you are, book an online video chat with one of our emergency vets and talk through youe concerns from the comfort of your own home</p>
                        <button className='my-c-btn'>Make an apointments <span><i className="fa-solid fa-phone"></i></span></button>
                        <i className="fa-solid fa-headphones-simple headphones"></i>

                    </div>

                </div>
            </div>
        </section>
    )
}
