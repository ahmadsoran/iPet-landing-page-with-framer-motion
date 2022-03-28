import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import TopContact from './top-contact';

function Navbar() {

    const locationPath = useLocation().pathname;
    useEffect(() => {

        document.querySelector('nav')?.setAttribute('data-selected-link', locationPath);
        document.querySelector('#footer')?.setAttribute('data-selected-link', locationPath);

    }, [locationPath]);



    return (
        <>
            <section id='desktop-nav'>

                <TopContact />
                <nav data-selected-link=''>
                    <div className="my-container navbar flex-evenly">
                        <Link to='/' id='home' >Home</Link>
                        <Link to='/service' id='service'>Services</Link>
                        <Link to='/about' id='about'>About US</Link>
                        <Link to='/review' id='review'>Review</Link>
                        <Link to='/contact' id='contact'>Contact</Link>
                        <i className="fa fa-paw"></i>
                    </div>

                </nav>

            </section>
        </>
    )
}

export default Navbar