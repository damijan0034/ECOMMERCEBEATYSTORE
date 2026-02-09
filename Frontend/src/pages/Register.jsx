import React from 'react'
import {Link} from "react-router"

const Register = () => {
  return (
    <div className='flex items-center justify-center mt-[5%]'>
        {/* IMAGE */}
        <div className="flex bg-white shadow-lg rounded-lg overflow-hidden">
          <div className='w-[500px] h-[500px] transition-transform
          
          duration-300 ease-in-out transform hover:scale-105'>
             <img src="/lotion1.jpg" alt="lotion" 
             className='object-cover w-full h-full' 
        />
          </div>
        
        </div>
       
         {/* FORM */}
         <div className="p-10 w-[500px]">
            <h2 className="text-xl mb-5 font-bold text-gray-700">Register</h2>
            <form className="space-y-5">
              <div className='mb-5'>
                  <label htmlFor="name" className="block mb-1 text-gray-600">Name</label>
                  <input type="text" id="name"  placeholder='Enter your name'
                  className="w-full p-3  border border-gray-300 rounded-md
                   focus:outline-none
                   focus:ring-2 focus:ring-[#d55fbb]" />
                  
                </div>
                <div className='mb-5'>
                  <label htmlFor="email" className="block mb-1 text-gray-600">Email</label>
                  <input type="email" id="email"  placeholder='example@gcom'
                  className="w-full p-3  border border-gray-300 rounded-md
                   focus:outline-none
                   focus:ring-2 focus:ring-[#d55fbb]" />
                  
                </div>

                <div className='mb-5'>
                  <label htmlFor="password" className="block mb-1 text-gray-600">Password</label>
                  <input type="password" id="password"  placeholder='Enter your password'
                  className="w-full p-3  border border-gray-300 rounded-md
                   focus:outline-none
                   focus:ring-2 focus:ring-[#d55fbb]" />
                  
                </div>
                <button className='py-2 w-full bg-[#d55fbb] text-white rounded-md hover:bg-[#c04a9f] transition-colors duration-300'>
                  Register</button>
                  <div className="mt-4 text-sm text-gray-600">
                    <span>Already have an account?</span>
                    <Link to="/login" className="text-[#d55fbb] ml-2 hover:underline">Login</Link>
                  </div>
            </form>
         </div>
    </div>
  )
}

export default Register