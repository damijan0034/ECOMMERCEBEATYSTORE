import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



const Footer = () => {
  return (
    <div className='bg-gray-100 px-[200px] h-[60vh] mt-[40px] py-[5%]'>
      {/* UPPER PART */}
      <div className='flex justify-between'>
        <div>
          <img src="/blisslogo1.png" alt="logo" width={200} height={200} />
          <p className='mt-2 text-gray-600'>LET MAKE YOUR SKIN FLOURISH WITH OUR PRODUCTS</p>
        </div>
        <div>
          <h3 className='text-xl font-bold'>Quick Links</h3>
          <ul className='mt-2 space-y-2 text-gray-600'>
            <li >
              <a className='hover:underline' href="">Home</a>
            </li>
            <li >
              <a className='hover:underline' href="">About Us</a>
            </li>
            <li >
              <a className='hover:underline' href="">Shop</a>
            </li>
            <li >
              <a className='hover:underline' href="">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className=' md:w-auto'>
          <h2 className='text-xl font-bold'>Contact Us</h2>
          <p className='mt-2 text-gray-600'>123 Beauty Street, Skincare City</p>
          <p className='text-gray-600'>Email: info@blissbeauty.com</p>
          <p className='text-gray-600'>Phone: (123) 456-7890</p>
        </div>
      </div>

      {/* LOWER PART */}
      <div>
        <div className="border-t border-gray-300 mt-8">
          <p className="text-center text-gray-600 py-4">© 2024 Bliss Beauty. All rights reserved.</p>
        </div>
        {/* SOCIAL ICONS */}
        <div className="flex justify-center space-x-6 mt-4 text-gray-600">
          <a className="hover:text-red-300" href="https://www.facebook.com"><FaFacebook /></a>
          <a className="hover:text-red-300" href="https://www.twitter.com"><FaTwitter /></a>
          <a className="hover:text-red-300" href="https://www.instagram.com"><FaInstagram /></a>
        </div>
      </div>
    </div>
  )
}

export default Footer