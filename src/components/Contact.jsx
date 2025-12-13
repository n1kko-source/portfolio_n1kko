
import { CONTACT } from '../constants';

import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
        <motion.h2 
            whileInView={{opacity: 1, y:0}}
            initial={{opacity: 0, y: -100}}
            transition={{ duration: 0.8 }}  
            className='my-10 text-center text-4xl'> Contact 
            <span className='text-amber-600'> Me </span>
        </motion.h2>
            <motion.div 
                        whileInView={{opacity: 1, y:0}}
                        initial={{opacity: 0, y: 100}}
                        transition={{ duration: 0.8 }} 
              className="text-center tracking-tighter text-neutral-400">
                <motion.p  className='my-4'>{CONTACT.address}</motion.p>
                <motion.p  className='my-4'>{CONTACT.phoneNu}</motion.p>
                <motion.a  href='#' className='border-b'>{CONTACT.email}</motion.a>
            </motion.div>
    </div>
  )
}

export default Contact