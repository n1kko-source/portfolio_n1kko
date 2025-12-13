import { motion } from 'framer-motion';
import viewImg from '../assets/view.jpeg';
import { ABOUT_TEXT } from '../constants';

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, delay: delay },
  },
});

export const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      {/* Title Section */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.8 }}
        className='my-20 text-center text-4xl'
      >
        About <span className='text-amber-600'>Me</span>
      </motion.h2>

      {/* Content Section */}
      <div className='flex flex-wrap'>
        {/* Image Column */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className='w-full lg:w-1/2 lg:p-8'
        >
          <div className='flex items-center justify-center'>
            <img 
              className='rounded-2xl mb-4 w-2/3 lg:w-3/4' 
              src={viewImg} 
              alt='about' 
            />
          </div>
        </motion.div>

        {/* Text Column */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className='w-full lg:w-1/2'
        >
          {/* About Text */}
          <div className='flex justify-center lg:justify-start'>
            <p className='my-3 max-w-xl py-6  text-justify'>
              {ABOUT_TEXT}
            </p>
          </div>

          {/* Visualize Text - Centered and Larger */}
          <div className='w-full  mt-6 mb-6'>
            <motion.span
              variants={container(0.5)}
              initial='hidden'
              animate='visible'
              className='bg-gradient-to-r from-amber-400 via-orange-500 to-pink-500 
              bg-clip-text text-4xl lg:text-3xl tracking-tight text-transparent'
            >
              Visualize
            </motion.span>
                      <div className='flex justify-center lg:justify-start'>
            <p className='my-3 max-w-xl py-6  text-justify'>
              "No permitas que tu memoria se enajene de las cosas que tienes, sino de las que te hagan falta."
            </p>
          </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;