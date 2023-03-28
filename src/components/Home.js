import React from 'react'
import { HiArrowRight } from 'react-icons/hi'
import Logo from '../assets/logo1.png'
import { FaBars,FaTimes, IconName,FaLinkedin,FaFacebook,FaGithub, } from "react-icons/fa";
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { Link } from 'react-scroll';


function Home() {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col h-full justify-center text-left'>
        <p className='text-pink-600'>Hi, My name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'> Shahzaib Asif</h1>
        <h2 className='text-4xl sm:text-6xl font-bold text-[#8892b0]'> I am a Front End  Developer.</h2>

        <p className='text-[#8892b0] py-4 max-w-[700px]'>'I am a skilled front-end developer specializing in React JS. With a passion for creating visually appealing and user-friendly interfaces, I have experience delivering high-quality projects to clients across different industries. I have a strong understanding of HTML, CSS, and JavaScript, and I pride myself on my attention to detail and my ability to collaborate effectively with clients and team members. If you're looking for a reliable and talented React JS developer, I would be honored to work with you..'</p>

       {/* social icons */}
       <div className='lg:hidden flex flex-row  py-5 '>
    <ul className='flex '>
      <li className=' h-[40px] flex justify-between text-center  mx-2 rounded-[20%] hover:scale-125  bg-blue-600'> 
        <a href="https://www.linkedin.com/in/shahzaib-asif-8aa8551a0/" target="_blank" className='flex justify-between items-center w-full text-gray-300 '>
          <FaLinkedin size={20}/>
        </a>
      </li>
      <li className='h-[40px] flex justify-between text-center mx-2 rounded-[20%] hover:scale-125 bg-[#333333]'> 
        <a href="https://github.com/shahzaib332" target="_blank" className='flex justify-between items-center w-full text-gray-300 '>
           <FaGithub size={20}/>
           
        </a>
      </li>
      <li className='h-[40px] flex justify-between text-center mx-2 rounded-[20%] hover:scale-125 bg-[#6fc2b0]'> 
        <a href="mailto:asifshahzaib79@gmail.com"  className='flex justify-between items-center w-full text-gray-300 '>
           <HiOutlineMail size={20}/>
           
        </a>
       
      </li> <li className='h-[40px] flex justify-between text-center duration-300 bg-gray-600 mx-2 rounded-[20%] hover:scale-125'> 
        <a href="https://drive.google.com/file/d/1Cs6w7DmYm4yT7FWIcCa9-nB4eJwI-3Eb/view?usp=share_link" target="_blank" className='flex justify-between items-center w-full text-gray-300 '>
         {/* <BsFillPersonLinesFill size={20}/> */}
         <h2 size={20}> CV  </h2>
         
        </a>
      </li>
    </ul>
  </div>

             <div >
             <Link  to="work"  smooth={true} offset={50} duration={500}  className='flex w-fit' >
               <li className='text-white group border-2  py-3 my-2 flex items-center  hover:bg-pink-700 hover:border-pink-700'>   
    View Work     
    
               <span className='group-hover:rotate-90 duration-300'>
               <HiArrowRight className='mx-3'/>
               </span>
               </li> 
               </Link>
        
             </div>
        </div>
    </div>
  )
}

export default Home