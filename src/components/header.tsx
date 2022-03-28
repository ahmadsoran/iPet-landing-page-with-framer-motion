import React from 'react'
import img1 from '../assets/img/njat.png'

function Header() {
    return (
        <section className='section--1'>
            <div className="my-container">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="header-text-side ">
                            <main>
                                <h1><span>i</span>Pet &nbsp; <span>for <br />love</span> </h1>
                                <p><strong>iPet's</strong> here for love, health , happiness -and with a free frist vist for you and yout pet , Can't wait to meet you both</p>
                                <button onClick={() => alert('test')}>Make an apointments <span><i className="fa-solid fa-phone"></i></span></button>
                            </main>
                        </div>
                    </div>
                    <div className="col-sm-6 ">
                        <div className="header-image-side ">
                            <main>
                                <img src={img1} alt="" />
                                <i className="fa-thin fa-plus aim1"></i>
                                <i className="fa-thin fa-plus aim2"></i>

                            </main>
                        </div>
                    </div>
                </div>
            </div>
            <div className="left-foot-dog">
                <div className="flex justify-center w-100">
                    <i className="fa-solid fa-paw paw1"></i>
                </div>
                <div className="flex-evenly w-100">
                    <div>
                        <i className="fa-solid fa-paw paw3"></i>
                    </div>
                    <div>
                        <i className="fa-solid fa-paw paw2"></i>
                    </div>
                </div>
                <div className="flex justify-center w-100">
                    <i className="fa-solid fa-paw paw4"></i>
                </div>
            </div>
            <div className="right-foot-dog">
                <div className="flex justify-center w-100">
                    <i className="fa-solid fa-paw paw1"></i>
                </div>
                <div className="flex-evenly w-100">
                    <div>
                        <i className="fa-solid fa-paw paw3"></i>
                    </div>
                    <div>
                        <i className="fa-solid fa-paw paw2"></i>
                    </div>
                </div>
                <div className="flex justify-center w-100">
                    <i className="fa-solid fa-paw paw4"></i>
                </div>
            </div>
        </section>
    )
}

export default Header