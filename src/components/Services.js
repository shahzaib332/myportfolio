import React from 'react'
import{FaDesktop,}from 'react-icons/fa'
import{AiOutlineMobile} from 'react-icons/ai'

export const Services = () => {
  return (
    <div name='services' className='w-full   text-gray-300 bg-[#0a192f]  mt-20 max-h-fit 	'>
        <div className=''>
        <div className='max-w-[1000px] mx-auto  w-full  flex flex-col  justify-center p-4 '>
        <div className='text-left my-10 mt-40'>
            <h2 className='text-4xl border-b-2 border-pink-600 inline'>WHAT I DO ?</h2>
        </div>

<div className='grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 '>

    <div className='border-2 bg-[#0b0b13] border-[#0b0b13] shadow-lg shadow-[#0b0b13] py-10 hover:bg-[#0a192f] hover:border-[#0a192f] hover:duration-300'>
        <div className='grid grid-cols-4 px-4'>
            <div className=' flex justify-center '><FaDesktop className='w-[150px] h-[60px] my-5 '/></div>
            <div className='col-span-3  '>
                <h1 className='text-2xl  text-left w-full py-4 ' >
                    Web Development
                </h1>
                <p className='text-left  '>I have extensive experience building responsive and user-friendly web applications using technologies such as React.Js, HTML/CSS/JS, TailwindCSS, MaterialUI and more. I can help you develop web applications that meets your unique needs.</p>
            </div>
        </div>
    </div>
    <div className='border-2 bg-[#0b0b13] border-[#0b0b13] shadow-lg shadow-[#0b0b13] py-10 hover:bg-[#0a192f] hover:border-[#0a192f] hover:duration-300'>
        <div className='grid grid-cols-4 px-4'>
            <div className=' flex justify-center '><AiOutlineMobile className='w-[150px] h-[90px] my-5 '/></div>
            <div className='col-span-3  '>
                <h1 className='text-2xl  text-left w-full py-4 ' >
                Mobile App
                <br /> Development
                </h1>
                <p className='text-left  '>I am proficient in developing high-quality mobile apps  using technology like React Native. I can help you create a mobile app that delivers a seamless user experience and provides real value to your customers..</p>
            </div>
        </div>
        
    </div>
    
</div>

<div className='grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 '>

    <div className='border-2 bg-[#0b0b13] border-[#0b0b13] shadow-lg shadow-[#0b0b13] py-10 hover:bg-[#0a192f] hover:border-[#0a192f] hover:duration-300'>
        <div className='grid grid-cols-4 px-4'>
            <div className=' flex justify-center '><FaDesktop className='w-[150px] h-[60px] my-5 '/></div>
            <div className='col-span-3  '>
                <h1 className='text-2xl  text-left w-full py-4 ' >
                    Database <br /> Management
                </h1>
                <p className='text-left  '>I have the skills to design, implement, and manage databases using technologies like MySQL, Firebase, and others. I can help you create a database that is efficient, secure, and scalable, ensuring that your data is always  accessible.</p>
            </div>
        </div>
    </div>
    <div className='border-2 bg-[#0b0b13] border-[#0b0b13] shadow-lg shadow-[#0b0b13] py-10 hover:bg-[#0a192f] hover:border-[#0a192f] hover:duration-300'>
        <div className='grid grid-cols-4 px-4'>
            <div className=' flex justify-center '><AiOutlineMobile className='w-[150px] h-[90px] my-5 '/></div>
            <div className='col-span-3  '>
                <h1 className='text-2xl  text-left w-full py-4 ' >
               Project <br /> Methodlogy
                
                </h1>
                <p className='text-left text-[20px] '>I take a proactive approach to project management to ensure that each project is delivered on time, within budget, and to the highest quality standards. I ensure the successful delivery of each project.</p>
            </div>
        </div>
        
    </div>
    
</div>



        </div>
    </div>
    </div>
  )
}
