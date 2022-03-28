import React from 'react'
import { Link } from 'react-router-dom'
interface Props {
    classes: string,
    link1Function: () => void,
    link2Function: () => void,
    link3Function: () => void,
    link4Function: () => void,
    link5Function: () => void,
}
export default function SideBar(props: Props) {
    return (
        <>
            <div className={`side-bar-links ${props.classes}`}>
                <Link onClick={props.link1Function} to='/' id='home' >Home</Link>
                <Link onClick={props.link2Function} to='/service' id='service'>Services</Link>
                <Link onClick={props.link3Function} to='/about' id='about'>About US</Link>
                <Link onClick={props.link4Function} to='/review' id='review'>Review</Link>
                <Link onClick={props.link5Function} to='/contact' id='contact'>Contact</Link>
            </div>

        </>
    )
}
