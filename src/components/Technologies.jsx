import { motion } from "framer-motion";
import { BiLogoPostgresql } from 'react-icons/bi';
import { FaCss3Alt, FaHtml5, FaNodeJs } from 'react-icons/fa';
import { IoLogoPython, IoLogoTableau } from "react-icons/io5";
import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    }
  }
})

const TechnologyIcon = ({ icon: Icon, name, duration, color }) => {
  return (
    <motion.div 
      variants={iconVariants(duration)}
      initial="initial"
      animate="animate"
      className="group relative rounded-2xl border-4 border-neutral-800 p-4"
    >
      <Icon className={`text-7xl ${color}`} />
      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-neutral-800 text-white px-2 py-1 rounded text-sm whitespace-nowrap">
        {name}
      </div>
    </motion.div>
  )
}

export const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h2
        whileInView={{opacity: 1, y:0}}
        initial={{opacity: 0, y: -100}}
        transition={{ duration: 0.5 }} 
        className='my-20 text-center text-4xl'>
        Technologies
      </motion.h2>

      <motion.div             
        whileInView={{opacity: 1, x:0}}
        initial={{opacity: 0, x: -100}}
        transition={{ duration: 0.8 }}
        className='flex flex-wrap items-center justify-center gap-4'>

        <TechnologyIcon 
          icon={RiReactjsLine} 
          name="React" 
          duration={2} 
          color="text-cyan-400" 
        />

        <TechnologyIcon 
          icon={FaHtml5} 
          name="HTML5" 
          duration={3} 
          color="text-orange-600" 
        />

        <TechnologyIcon 
          icon={FaCss3Alt} 
          name="CSS3" 
          duration={1} 
          color="text-blue-700" 
        />

        <TechnologyIcon 
          icon={TbBrandNextjs} 
          name="Node.js" 
          duration={2} 
          color="" 
        />

        <TechnologyIcon 
          icon={FaNodeJs} 
          name="Node.js" 
          duration={3} 
          color="text-green-500" 
        />

        <TechnologyIcon 
          icon={BiLogoPostgresql} 
          name="PostgreSQL" 
          duration={1} 
          color="text-sky-700" 
        />

        <TechnologyIcon 
          icon={IoLogoPython} 
          name="Python" 
          duration={2.5} 
          color="text-yellow-400" 
        />

        <TechnologyIcon 
          icon={IoLogoTableau} 
          name="Tableau" 
          duration={1} 
          color="text-white" 
        />

      </motion.div>
    </div>
  )
}

export default Technologies
