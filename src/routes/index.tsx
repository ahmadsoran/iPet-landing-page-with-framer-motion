import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Footer from '../components/root/footer'
import MobileNavbar from '../components/root/MobileNavbar'
import Navbar from '../components/root/Navbar'
import NotFound404 from '../components/root/NotFound404'
import Home from './home'
import { AnimatePresence } from 'framer-motion'
import AboutPage from './about'
import Services from '../components/Home/services'
import Client from '../components/Home/client'
import ContactForm from '../components/contact/contact-form'
export default function IndexRoutes() {
    const locations = useLocation()
    return (
        <>
            <Navbar />
            <MobileNavbar />
            <AnimatePresence exitBeforeEnter initial={false}>
                <Routes location={locations} key={locations.pathname}>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<AboutPage />} />
                    <Route path='/service' element={<Services />} />
                    <Route path='/review' element={<Client />} />
                    <Route path='/contact' element={<ContactForm />} />
                    <Route path='*' element={<NotFound404 />} />
                </Routes>
            </AnimatePresence>
            <Footer />
        </>
    )
}
