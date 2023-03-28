import React,{useState} from 'react'
import Logo from '../assets/logo1.png'
import { FaBars,FaTimes, IconName,FaLinkedin,FaFacebook,FaGithub, } from "react-icons/fa";
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { Link } from 'react-scroll';



function NavBar() {
  const[nav,setNav]=useState(false)
  const handleClick=()=>{
    setNav(!nav)
  }
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>

    <div>
         {/* <img src={Logo} alt="SA" style={{width:'50px'}}/> */}
         <h1 className='text-4xl font-bold text-pink-600 tracking-wide '> SA</h1>
    </div>
{/* Menu */}
{/* md is used for responsive md is above 760px */}
  <ul className='hidden md:flex '> 
  <li>
  <Link className='hover:text-pink-600' to="home"  smooth={true} offset={50} duration={500} >
         Home
        </Link>
  </li>
  <li>
  <Link className='hover:text-pink-600' to="about"  smooth={true} offset={50} duration={500} >
        About
        </Link>
  </li>
  
  <li>
  <Link className='hover:text-pink-600' to="skills"  smooth={true} offset={50} duration={500} >
       Skills
        </Link>
  </li>

  <li>
  <Link className='hover:text-pink-600' to="services"  smooth={true} offset={50} duration={500} >
         Services
        </Link>
  </li>

  <li>
  <Link className='hover:text-pink-600' to="work"  smooth={true} offset={50} duration={500} >
        Work
        </Link>
  </li>
  <li>
  <Link className='hover:text-pink-600' to="contact"  smooth={true} offset={50} duration={500} >
         Contact
        </Link>
  </li>
  
  </ul>
  {/* ham burger */}
  <div onClick={handleClick} className='md:hidden z-10'>
    {!nav ?<FaBars/>: <FaTimes/>}
  </div>

  {/* Mobile menu */}
  
  <ul className={!nav ? "hidden":" absolute top-0 left-0 w-full h-screen justify-center align-center flex flex-col bg-[#0a192f]"}>
    <li className="py-6 text-4xl">
       <Link onClick={handleClick} to="home"  smooth={true} offset={50} duration={500} >
         Home
        </Link></li>
    <li className="py-6 text-4xl">
    <Link onClick={handleClick} to="about"  smooth={true} offset={50} duration={500} >
        About
        </Link>
    </li>
    <li className="py-6 text-4xl">
    <Link onClick={handleClick} to="skills"  smooth={true} offset={50} duration={500} >
       Skills
        </Link>
    </li>

    <li className="py-6 text-4xl">
    <Link onClick={handleClick} to="services" smooth={true} offset={50} duration={500} >
        Services
        </Link>
        </li>
    <li className="py-6 text-4xl">
    <Link onClick={handleClick} to="work"  smooth={true} offset={50} duration={500} >
        Work
        </Link>
    </li>
    <li className="py-6 text-4xl">
    <Link onClick={handleClick} to="contact"  smooth={true} offset={50} duration={500} >
         Contact
        </Link>
    </li>
  
  </ul>
  {/* Social Icons */}
  <div className='hidden lg:flex fixed flex-col top-[35%] left-0 '>
    <ul >
      <li className='w-[160px] h-[60px] flex justify-between text-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'> 
        <a href="https://www.linkedin.com/in/shahzaib-asif-8aa8551a0/" target="_blank" className='flex justify-between items-center w-full text-gray-300 '>
          LinkedIn <FaLinkedin size={30}/>
        </a>
      </li>
      <li className='w-[160px] h-[60px] flex justify-between text-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#000000]'> 
        <a href="https://github.com/shahzaib332" target="_blank" className='flex justify-between items-center w-full text-gray-300 '>
          GitHub <FaGithub size={30}/>
        </a>
      </li>
      <li className='w-[160px] h-[60px] flex justify-between text-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-600'> 
        <a href="mailto:asifshahzaib79@gmail.com"  className='flex justify-between items-center w-full text-gray-300 '>
          Mail <HiOutlineMail size={30}/>
        </a>
      </li> <li className='w-[160px] h-[60px] flex justify-between text-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-600'> 
        <a href="https://drive.google.com/file/d/1Cs6w7DmYm4yT7FWIcCa9-nB4eJwI-3Eb/view?usp=share_link" target="_blank" className='flex justify-between items-center w-full text-gray-300 '>
          Resume <BsFillPersonLinesFill size={30}/>
        </a>
      </li>
    </ul>
  </div>
  </div>


 
  ) 
}

export default NavBar