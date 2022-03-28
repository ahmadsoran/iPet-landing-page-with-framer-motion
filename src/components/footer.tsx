import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer id='footer'>
            <div className="my-container">
                <div className='row'>
                    <div className="col-md-3 col-6">

                        <div className="header-location flex-center align-item-center ipet">
                            <i className="fa-solid fa-paw"></i>
                            <h3>
                                <span>i</span>Pet</h3>
                        </div>
                        <div className="social flex-center">
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-github"></i>
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                        <div className="link" style={{ paddingBottom: '10%' }}>

                            <div className="footer-link">
                                <Link className='homeLink' to='/'>Home</Link>
                                <br />
                                <Link className='servicesLink' to='/service'>Services</Link>
                                <br />

                                <Link className='aboutLink' to='/about'>About US</Link>
                            </div>
                            <div className="footer-link">
                                <Link className='reviewLink' to='/review'>Review</Link>
                                <br />

                                <Link className='contactLink' to='/contact'>Contact</Link>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-3 col-6">
                        <div className="flex-center d-col" style={{ margin: '5% 0' }}>

                            <div className="header-location flex">
                                <i className="fa-solid fa-location-dot"></i>
                                <div>
                                    <h3>12-2 sulymaniah/kurdistan</h3>
                                    <h3>12-2 erbil/kurdistan</h3>
                                </div>
                            </div>
                            <br />
                            <div className="header-location flex" style={{ textAlign: 'left' }}>
                                <i className="fa-solid fa-calendar"></i>
                                <div>
                                    <h3>Monday - Friday</h3>
                                    <h3>730: AM - 8:00 PM</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-6" >
                        <div className="header-location flex-center" style={{ margin: '5% 0' }}>
                            <i className="fa-solid fa-phone"></i>
                            <div>
                                <a href="tel:+9647700000000">+964 770 000 00 00</a>
                                <h3>24 HOUR EMERGENCY</h3>
                            </div>
                        </div>
                        <br />
                        <div className="header-location flex-center">
                            <i className="fa-solid fa-envelope"></i>
                            <div>
                                <a href="mailto:unkonwn@mail.mail">iPet@gmail.xom</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="prv-police flex-btween">
                <p>privce police</p>
                <p>&copy; {new Date(Date.now()).getFullYear()} iPet veterinary </p>
            </div>
            <div className="alert">
                <p>this website made only for training purposes designed by  <strong>
                    Ann Ivanovskaya
                </strong> see the project <a href="https://www.behance.net/gallery/137444749/Veterinary-Clinic-Landing-Page?tracking_source=search_projects%7Cwebsite%20web%20design" rel='noreferrer' target={'_blank'}>here</a>, built with react js by <a href="https://www.ahmadsoran.com" rel='noreferrer' target={'_blank'}>Ahmed Soran</a></p>
            </div>
        </footer>
    )
}
