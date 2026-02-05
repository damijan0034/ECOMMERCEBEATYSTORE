import {FaRegIdBadge, FaSearch, FaShoppingBasket, FaUser} from "react-icons/fa"


const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-6 h-[100px]  shadow-md">
      <div className='m-2 cursor-pointer'>
         <img src="blisslogo1.png" alt="Bliss Logo" height={150} width={150} />
      </div>
    <div className='flex items-center m-2'>
        <input type="text" placeholder='search'
        className="p-[15px] border-2 border-[#f096dd]
        w-[500px] outline-none border-solid rounded-lg mr-[-30px]
        "
        
        />
        <FaSearch className="text-[20px] cursor-pointer" />
    </div>

    <div className="flex items-center space-x-6">
      <div className="cursor-pointer">
        <div className="absolute top-[60px] right-32 bg-pink-700 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
          2

        </div>
        <FaShoppingBasket className="text-pink-500" />
      </div>
      <div className="flex items-center space-x-2 border border-pink-300
        rounded-lg hover:bg-pink-100 duration-300 p-2 cursor-pointer
      ">
        <FaUser  className="text-[#e455c5] hover:text-pink-600
         transition duration-300" />
        <span className="text-[#e455c5] font-semibold hover:text-pink-600" >Login</span>
      </div>
    </div>
      </div>
  )
}

export default Navbar