import React from 'react'
import Javascript from "../assets/javascript.png"
import html from "../assets/html.png"
import css from "../assets/css.png"

import firebase from "../assets/firebase.png"
import react from "../assets/react.png"
import github from "../assets/github.png"
import tailwind from "../assets/tailwind.png"
import mysql from "../assets/mysql2.png"




const Skills = () => {
  return (
    
    <div name='skills' className='bg-[#0a192f] w-full max-h-fit	lg:h-screen  text-gray-300 '>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full text-left'>
            <div className='mt-40'>
                <p className='text-4xl  font-bold border-b-2 inline border-pink-600 '>Skills</p>
                <p className='py-4'>These are the technologies I've Worked with</p>
            </div>
            {/* container for icons */}
            <div className='w-full  grid  grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 max-w-[1000px] '>
                <div className='shadow-md shadow-[#040c16]  hover:scale-110 duration-500' >
                    <img className='w-20 mx-auto ' src={html} alt="html icon" />
                    <p className='my-4'>HTML</p>
                </div>

                <div className='shadow-md shadow-[#040c16]  hover:scale-110 duration-500' >
                    <img className='w-20 mx-auto' src={css} alt="css icon" />
                    <p className='my-4'>CSS</p>
                    
                </div>

                <div className='shadow-md shadow-[#040c16]  hover:scale-110 duration-500' >
                    <img className='w-20 mx-auto' src={Javascript} alt="javascript icon" />
                    <p className='my-4'>JavaScript</p>

                </div>

                <div className='shadow-md shadow-[#040c16]  hover:scale-110 duration-500' >
                    <img className='w-20 mx-auto' src={react} alt="react icon" />
                    <p className='my-4'>React JS</p>
                    
                </div>

                <div className='shadow-md shadow-[#040c16]  hover:scale-110 duration-500' >
                    <img className='w-20 mx-auto' src={react} alt="reactnative icon" />
                    <p className='my-4'>React Native</p>

                </div>

                <div className='shadow-md shadow-[#040c16]  hover:scale-110 duration-500' >
                    <img className='w-20 mx-auto' src={firebase} alt="htmlicon" />
                    <p className='my-4'>Firebase</p>

                </div>

                <div className='shadow-md shadow-[#040c16]  hover:scale-110 duration-500' >
                    <img className='w-20 mx-auto' src={mysql} alt="mysql icon" />
                    <p className='my-4'>MySql</p>

                </div>

                <div className='shadow-md shadow-[#040c16]  hover:scale-110 duration-500' >
                    <img className='w-20 mx-auto' src={github} alt="github icon" />
                    <p className='my-4'>GitHub</p>

                </div>

                <div className='shadow-md shadow-[#040c16]  hover:scale-110 duration-500' >
                    <img className='w-20 mx-auto' src={tailwind} alt="tailwind icon" />
                    <p className='my-4'>Tailwind CSS</p>

                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Skills