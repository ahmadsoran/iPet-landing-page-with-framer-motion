import React from 'react'
import { motion } from 'framer-motion'
export default function NotFound404() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .5 }}
        >
            <div className="flex-center not-found">
                <h1>404</h1>
                <p>Not Found</p>
            </div>
        </motion.div>
    )
}
