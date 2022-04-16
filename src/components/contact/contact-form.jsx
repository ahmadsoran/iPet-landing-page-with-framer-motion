import React from 'react'
import { motion } from 'framer-motion'
export default function ContactForm() {
      return (
            <motion.section
            tial={{ opacity: 0 }}
            te={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .5 }}
            id="section--form">
            <form action="#">
                <h3>make an appointment</h3>
                <input type="email" name="" placeholder='email' id="" />

                <input type="number" name="" placeholder='Phone' id="" />
                <div className="flex align-item-center">
                    <input style={{ width: 'fit-content' }} type="checkbox" title='agree' name="chk" id="" />
                    <strong>agree to procees personal data</strong>
                </div>
                <button>Confirm</button>

            </form>
        </motion.section>
    )
}
