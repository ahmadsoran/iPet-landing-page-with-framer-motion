import React, { useState } from 'react'
import HamburgerMenu from 'react-hamburger-menu'
import SideBar from './SideBAr'
function MobileNavbar() {
    const [IsNavOpen, setIsNavOpen] = useState(false)
    const navOpenHandelr = () => {
        setIsNavOpen(!IsNavOpen)
    }

    return (
        <>
            <div className="my-container" id='mobile-nav'>
                <div className="mobile-navbar">
                    <div className='w-100 flex-btween'>

                        <HamburgerMenu
                            isOpen={IsNavOpen}
                            menuClicked={navOpenHandelr}
                            width={20}
                            height={12}
                            strokeWidth={2}
                            rotate={0}
                            color='black'
                            borderRadius={10}
                            animationDuration={0.5}

                        />

                        <div className="ipet">
                            <i className="fa-solid fa-paw"></i>
                            <h3><span>i</span>Pet</h3>
                        </div>
                        <div className='header-location'>
                            <a href="tel:+7700000000">

                                <i className="fa-solid fa-phone"></i>
                            </a>
                        </div>


                    </div>
                </div>
            </div>

            <SideBar classes={IsNavOpen ? 'active' : ''} link1Function={() => setIsNavOpen(false)} link2Function={() => setIsNavOpen(false)} link3Function={() => setIsNavOpen(false)} link4Function={() => setIsNavOpen(false)} link5Function={() => setIsNavOpen(false)} />
            <div className={`sidebar-backdrop ${IsNavOpen ? 'active' : ''}`} onTouchStart={() => setIsNavOpen(false)}></div>

        </>
    )
}

export default MobileNavbar