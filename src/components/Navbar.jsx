
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'


export const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className='flex flex-shrink-0 items-center'>
        <h2 className='bg-gradient-to-r from-neutral-500 via-neutral-100 to-neutral-600 
                       bg-clip-text text-4xl font-medium tracking-wide text-transparent'>N1kko</h2>
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>

        <a className='nav-link' href="https://www.linkedin.com/in/juan-nicolas-mu%C3%B1oz-tavera-446a15316/">
        <FaLinkedin/>
        </a>

        <a className='nav-link' href="https://github.com/n1kko-source">
        <FaGithub/>
        </a>

        <a className='nav-link' href="">
        <FaSquareXTwitter/>
        </a>

        <a className='nav-link' href="">
        <FaInstagram/>
        </a>

      </div>
    </nav>
    
  )
}

export default Navbar