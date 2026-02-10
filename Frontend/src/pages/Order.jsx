import { FaCheckCircle } from 'react-icons/fa';
import StarRatings from 'react-star-ratings';

const Order = () => {
  return (
    <div className='min-h-screen p-8 bg-gray-50'>
       <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <div className="text-center mb-8">
          <FaCheckCircle
            className="text-green-500 text-6xl mb-4 mx-auto"
          />
          <h1 className="text-2xl font-bold">Thank you for your order!</h1>
          <p className="text-gray-600 mt-2">Your order has been placed successfully.</p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl mb-4 font-semibold">Order #1</h2>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Items Ordered</h3>
              <div className="flex flex-col">
                <div className="flex pb-4 items-center justify-between
                 border-b border-gray-200">
                  <img src="/lotion.jpg" alt="lotion" 
                  className="w-24 object-cover h-24 rounded-md" />
                  <div className="flex-1 ml-4">
                    <h4 className="text-lg font-semibold">
                      Makis Lotion - 200ml 
                    </h4>
                    <p className='text-gray-500'>2</p>
                  </div>

                  <div className="text-right">
                    <p className="text-lg font-semibold">$20.00</p>
                  </div>

                  </div>
                  <div className="flex flex-col">
                <h3 className="my-3">Rate this product</h3>
                <StarRatings
                        rating={2.403}
                        starDimension="25px"
                        starSpacing="5px"
                        starRatedColor="#aaa"
                      />
                      <textarea 
                      placeholder='Leave message'
                      className='mt-2 p-[10px] w-[300px]'
                      >

                      </textarea>
                      <button className="bg-gray-800 text-white mt-2 p-[5px] w-[200px]" >
                        
                        Submit</button>
                  </div>
              </div>
            </div>
          </div>
        </div>
         <div className="mb-8">
          <h2 className="text-2xl mb-4 font-semibold">Order #2</h2>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Items Ordered</h3>
              <div className="flex flex-col">
                <div className="flex pb-4 items-center justify-between
                 border-b border-gray-200">
                  <img src="/lotion1.jpg" alt="lotion" 
                  className="w-24 object-cover h-24 rounded-md" />
                  <div className="flex-1 ml-4">
                    <h4 className="text-lg font-semibold">
                      Makis Lotion - 200ml 
                    </h4>
                    <p className='text-gray-500'>2</p>
                  </div>

                  <div className="text-right">
                    <p className="text-lg font-semibold">$20.00</p>
                  </div>

                  </div>
                  <div className="flex flex-col">
                <h3 className="my-3">Rate this product</h3>
                <StarRatings
                        rating={2.403}
                        starDimension="25px"
                        starSpacing="5px"
                        starRatedColor="#aaa"
                      />
                      <textarea 
                      placeholder='Leave message'
                      className='mt-2 p-[10px] w-[300px]'
                      >

                      </textarea>
                      <button className="bg-gray-800 text-white mt-2 p-[5px] w-[200px]" >
                        
                        Submit</button>
                  </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-xl font-semibold">Shipping Information</h3>
          <p className="text-gray-600 mt-2">johndoe@gmail.com</p>
          <p className="text-gray-600 mt-2">+381123456789</p>
          <p className="text-gray-600 mt-2">John Doe</p>
        </div>

        <div className="bg-gray-50 p-4 my-2 rounded-lg">
          <h3 className="text-xl font-semibold">Payment Method</h3>
          <p className="text-gray-600 mt-2">VISA</p>
          
        </div>

         <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-xl font-semibold">Order Summary</h3>
          <div className="flex justify-between mb-2">
              <span className="text-lg font-medium">Subtotal</span>
              <span  className="text-lg font-semibold">$720</span>
          </div>
          <div className="flex justify-between mb-2">
              <span className="text-lg font-medium">Shipping</span>
              <span  className="text-lg font-semibold">$20</span>
          </div>
          <div className="flex justify-between mb-2">
              <span className="text-lg font-medium">Total</span>
              <span  className="text-lg font-semibold">$740</span>
          </div>
          
        </div>
        <div className="mt-6 text-center">
          <button className="text-white bg-[#ef93db] p-3 rounded-lg font-semibold">
            Continue Shopping</button>
        </div>
       </div>
    </div>
  )
}

export default Order