import React from 'react'

function TopContact() {
    return (
        <section className='my-container'>
            <div className=" flex-btween ">
                <div className="header-location flex">
                    <i className="fa-solid fa-location-dot"></i>
                    <div>
                        <h3>12-2 sulymaniah/kurdistan</h3>
                        <h3>12-2 erbil/kurdistan</h3>
                    </div>
                </div>
                <div className="header-location flex align-item-center ipet">
                    <i className="fa-solid fa-paw"></i>
                    <h3><span>i</span>Pet</h3>

                </div>
                <div className="header-location flex justify-end">
                    <i className="fa-solid fa-phone"></i>
                    <div>
                        <a href="tel:+9647700000000">+964 770 000 00 00</a>
                        <h3>24 HOUR EMERGENCY</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TopContact