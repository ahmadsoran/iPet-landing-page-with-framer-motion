import React from 'react'

export default function Map() {
    return (
        <section id="section--6">
            <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d25963.777256711044!2d45.3915819951855!3d35.566736290721295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d35.5665967!2d45.3790507!5e0!3m2!1sen!2siq!4v1648204559641!5m2!1sen!2siq" className='googleMap' loading="lazy" ></iframe>
            <div className="contactsMapInfo">
                <h1>verterinar clinic iPet</h1>
                <p>24 hour emergency</p>
                <strong>location:</strong>
                <h4>suly 124/kurdistan</h4>
                <h4>ervil 14/kurdistan</h4>
                <strong>phone:</strong> <br />
                <a href="tel:+96407700000000">07700000000</a>
                <div>

                    <button className='my-c-btn'>Make an apointments <span><i className="fa-solid fa-phone"></i></span></button>
                </div>

            </div>
        </section>
    )
}
