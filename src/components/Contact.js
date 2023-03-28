import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full lg:h-screen bg-[#0a192f] text-gray-300 flex justify-center items-center p-4 mt-20 max-h-max'>
        <form action="https://getform.io/f/ca1342b8-5f61-4392-ac33-efbc9cd32575" method="POST" className='flex flex-col max-w-[1000px] w-full'>
            <div className='text-left mt-20'>
                <p className='text-4xl font-bold border-b-4 inline border-pink-600 '>Get In Touch</p>
                <p className='py-4 w-full flex'>Submit the form below or shoot me an email  -   <p className='text-pink-600 ml-2'  >  asifshahzaib79@gmail.com </p> </p>
            </div>
            <div className='grid '>
            <input type="text" placeholder='Name' className='p-2 bg-[#ccd6f6] 'name='name' />
            <input type="email" placeholder='Email' className='p-2 my-4 bg-[#ccd6f6] 'name='email' />
            <textarea name="message" id="" cols="30" rows="10" placeholder='Message' className='p-2 bg-[#ccd6f6] text-gray-700'></textarea>
            <button className='text-white border-2 px-4 py-3 my-8 mx-auto flex items-center hover:bg-pink-600 hover:border-pink-600'>Let's Collaborate</button>
            </div>
        </form>
    </div>
  )
}

export default Contact