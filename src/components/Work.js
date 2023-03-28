import React from 'react'
import Workimg from "../assets/workImg.png"
import RealSate from "../assets/realestate.jpg"
import { Data } from '../Data/Data'

import Logo from '../assets/logo1.png'
import { FaBars,FaTimes, IconName,FaLinkedin,FaFacebook,FaGithub, } from "react-icons/fa";
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { Link } from 'react-scroll';


const Work = () => {
    // data
    const data=Data;
  return (
    <div name='work' className='bg-[#0a192f] text-gray-300 w-full   max-h-fit lg:h-screen	'>
        <div className='max-w-[1000px] mx-auto h-full w-full flex flex-col justify-center p-4'>
<div className='pb-8 text-left mt-40'>
    <p className='text-4xl inline border-b-4 border-pink-600 font-bold  '>Work</p>
    <p className='py-6'>Check out some of my work</p>
</div>

{/* cart div */}
<div 
 className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-center px-4'>
    {/* grid item */}
    {data.map((item,index)=>(
        
  

    <div key={index}
    style={{backgroundImage:`url(${item.image})` }}
     className='shadow-lg shadow-[#040c161] group container rounded-md flex justify-center items-center mx-auto content-div '>
        {/* hover effects */}
    <div className='opacity-0 group-hover:opacity-100'>
        <span className='text-2xl font-bold text-white tracking-wider'>
        {item.name}

        </span>
        {/* button */}
        <div className='pt-8'>
            <a href={item.live} target="_blank">
                <button className='text-center rounded-lg bg-white text-gray-700 px-4 py-3 m-2 font-bold text-lg'>Demo</button>
            </a>
            <a href={item.github} target="_blank">
                <button className='text-center rounded-lg bg-white text-gray-700 px-4 py-3 m-2 font-bold text-lg'>Code</button>
            </a>
        </div>
    </div>

</div>
  ))}

{/* grid item 2 */}

    </div>
    </div>
    </div>
  )
}

export default Work