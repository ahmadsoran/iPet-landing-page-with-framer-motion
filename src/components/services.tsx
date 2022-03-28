import React from 'react'

function Services() {
    return (
        <section className="my-container" id='section--2'>
            <header>
                <h1>Check out our services</h1>
                <p>learn about our helpful services</p>
            </header>
            <main>
                <div className="services-body">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="services">
                                <i className="fa-solid fa-hands-holding">
                                    <i className="fa-solid fa-paw"></i>
                                </i>
                                <h1>Client Services</h1>
                                <p>when it comes to veterinary care , you want
                                    only the best for your pet, park animal hospital in sulymaniah is committed to providing your pet with cutting-edge veterinary services in a caring , compassionate environment.
                                </p>
                            </div>

                        </div>  <div className="col-sm-4">
                            <div className="services">
                                <i className="fa-solid fa-dog"></i>
                                <h1>Pet Wellness Services</h1>
                                <p>regular Wellness exams are the key to keeping your pet, healthy. we recommended all pets undergo an annual nose-to-tail weliness exam, though more frequnets exams are encouraged</p>
                            </div>

                        </div>  <div className="col-sm-4">
                            <div className="services">
                                <i className="fa-solid fa-stethoscope"></i>

                                <h1>diagnistic services</h1>
                                <p>
                                    x-rays are one of most useful techniques available for diagnosing your pet problem quickly and effciently.
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="services">
                                <i className="fa-solid fa-shield-dog"></i>

                                <h1>surgical care</h1>
                                <p>surgical care including spay and neuter, intestinal lumps, eye surgery. and gestronintestinal issue.</p>
                            </div>

                        </div>  <div className="col-sm-4">
                            <div className="services">
                                <i className="fa-solid fa-hospital-user"></i>
                                <h1>laser therapy</h1>
                                <p>whether your pet is rehabilitating from trauma or injury, healing from wounds, or simply aging, your companion can benefit from this innovative approach to treating pain </p>
                            </div>

                        </div>  <div className="col-sm-4">
                            <div className="services">
                                <i className="fa-solid fa-truck-medical"></i>
                                <h1>emergency care </h1>
                                <p>we have tools, training and experience to diagnose like-threatening illness and injuries, we are equipped and ready to help with your emergency or critical care situation.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </main>
            <footer className="flex-center">
                <button className='my-c-btn'>View our services
                </button>

            </footer>
        </section >
    )
}

export default Services