import { FaMinus, FaPlus } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';

const Cart = () => {
  return (
    <div className="min-h-screen p-8">
        <h2 className='text-[18px] font-bold mb-6'>
          Shopping Cart</h2>
        <div className='flex gap-8'>
          {/* LEFT */}
          <div className='flex-1 p-6 shadow-md rounded-lg bg-white'>
            <h3 className="text-xl mb-4 font-semibold">Your Items</h3>
            <div className="flex flex-col space-y-4">
              {/* Cart Item */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-200 ">
                <img 
                src="/lotion1.jpg" alt="lotion" className="w-32 h-32 object-cover rounded-md" />
                <div className="flex-1 ml-4">
                  <h3 className="text-xl mb-2 font-semibold">
                    Hydrating Body Lotion
                  </h3>
                  <p className="mb-2 text-gray-600">
                    A luxurious body lotion that deeply hydrates and nourishes your skin, leaving it soft and radiant.
                  </p>
                  <div className="flex items-center my-5 p-4">
                                      <FaMinus className='bg-[#ef93db] text-white p-3 rounded-full
                           mr-4 cursor-pointer text-4xl' />
                                      <span className="text-lg font-semibold">1</span>
                                      <FaPlus className='bg-[#ef93db] text-white p-3 rounded-full
                           ml-4 cursor-pointer text-4xl'  />
                                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold mb-6">$90</p>
                  <FaTrashAlt className="text-red-600 cursor-pointer" />
                </div>
              </div>

              {/* Cart Item */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-200 ">
                <img 
                src="/lotion.jpg" alt="lotion" className="w-32 h-32 object-cover rounded-md" />
                <div className="flex-1 ml-4">
                  <h3 className="text-xl mb-2 font-semibold">
                    Hydrating Body Lotion
                  </h3>
                  <p className="mb-2 text-gray-600">
                    A luxurious body lotion that deeply hydrates and nourishes your skin, leaving it soft and radiant.
                  </p>
                  <div className="flex items-center my-5 p-4">
                                      <FaMinus className='bg-[#ef93db] text-white p-3 rounded-full
                           mr-4 cursor-pointer text-4xl' />
                                      <span className="text-lg font-semibold">1</span>
                                      <FaPlus className='bg-[#ef93db] text-white p-3 rounded-full
                           ml-4 cursor-pointer text-4xl'  />
                                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold mb-6">$90</p>
                  <FaTrashAlt className="text-red-600 cursor-pointer" />
                </div>
              </div>
            </div>
            <button className=" bg-red-400 w-[200px] text-white 
            p-3 mt-4 rounded-md font-semibold
            ">
              Clear All
              </button>
          </div>

          {/* RIGHT */}
          <div className='w-80 bg-white shadow-md rounded-lg p-6'>
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="flex flex-col space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$180</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>$10</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>$18</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>$208</span>
              </div>
              <button className="bg-[#ef93db] text-white py-3 rounded-md font-semibold hover:bg-[#e07abf] transition duration-300 w-full">
                Proceed to Checkout
              </button>
            </div>
          </div>
          </div>  
    </div>
  )
}

export default Cart