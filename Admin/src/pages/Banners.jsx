import React from 'react'
import { FaPlus } from 'react-icons/fa'

const Banners = () => {
  return (
    <div className='flex justify-evenly m-[10%]'>
      {/* LEFT */}
      <div className='mr-[50px]'>
        <h2 className="text-xl font-semibold ">Active Banners</h2>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center justify-between
              border-b border-gray-200 pb-4
            ">
            <img src="/lotion2.jpg" alt="lotion"
              className='w-32 h-32 object-cover rounded-md'
            />

            <div className="flex-1 ml-4">
              <h2 className="text-xl font-semibold mb-2">
                Active Banners Active Banners Active Banners
              </h2>
              <p className="text-gray-600 mb-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit
                . Architecto pariatur molestiae minus eius quam nisi vel

              </p>

            </div>

            <button className="bg-red-500 p-2 text-white font-semibold cursor-pointer">
              Delete</button>
          </div>

          <div className="flex items-center justify-between
              border-b border-gray-200 pb-4
            ">
            <img src="/lotion2.jpg" alt="lotion"
              className='w-32 h-32 object-cover rounded-md'
            />

            <div className="flex-1 ml-4">
              <h2 className="text-xl font-semibold mb-2">
                Active Banners Active Banners Active Banners
              </h2>
              <p className="text-gray-600 mb-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit
                . Architecto pariatur molestiae minus eius quam nisi vel

              </p>

            </div>

            <button className="bg-red-500 p-2 text-white font-semibold cursor-pointer">
              Delete</button>
          </div>
        </div>
      </div>
      {/* RIGHT */}
      <div className='flex flex-col'>
        <div className="flex-1 bg-white p-5">
          <div className="flex flex-col ">
            <span  className='font-semibold'>Image:</span>
            {/* SQUARE */}
            <div className="border-2 w-[100px] h-[100px] border-[#444] rounded-md">
              <div className="flex items-center justify-center mt-[40px]">
                <label htmlFor="" className="cursor-pointer flex ">
                  <FaPlus className='text-[20px]' />
                </label>
              </div>
            </div>
          </div>
 
          {/* INPUT */}
          <div className="flex flex-col my-3">
            <span className="semi-bold">Title</span>
            <input type="text" className="w-[250px] outline-none border-b-2 border-[#444]" />
          </div>

          <div className="flex flex-col my-3">
            <span className="semi-bold">Subtitle</span>
            <input type="text" className="w-[250px] outline-none border-b-2 border-[#444]" />
          </div>

          <button className="bg-[#1e1e1e] w-[250px] p-2 text-white font-semibold cursor-pointer">
              Upload</button>
        </div>
      </div>
    </div>
  )
}

export default Banners