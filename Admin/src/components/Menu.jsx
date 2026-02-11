import{FaBook, FaBox, FaChartBar, FaClipboard, FaClipboardList, FaCog, FaElementor, FaHdd, FaHome, FaSignOutAlt, FaUser, FaUsers} from 'react-icons/fa'

const Menu = () => {
  return (
    <div className="h-[100vh] shadow-lg bg-gray-100 w-[350px]  p-[10px] justify-start">
      <ul className="flex flex-col items-start mt-[10px] pl-[20px]">
        <li className='flex cursor-pointer mt-[12px] transition-colors duration-300 hover:text-[#ef93db]
         items-center text-[20px]'>
          <FaHome className='text-[#ef93db] mr-[15px]' />
          Home
        </li>
        <li className='flex cursor-pointer mt-[12px] transition-colors duration-300 hover:text-[#ef93db]
        items-center text-[20px]'>
          <FaUser className='text-[#ef93db] mr-[15px]' />
         Profile
        </li>

        <hr className="w-full border-gray-300 my-[20px]" />

        <li className='flex cursor-pointer mt-[12px] transition-colors duration-300 hover:text-[#ef93db]
        items-center text-[20px]'>
          <FaUsers className='text-[#ef93db] mr-[15px]' />
        Users
        </li>
         <li className='flex cursor-pointer mt-[12px] transition-colors duration-300 hover:text-[#ef93db]
        items-center text-[20px]'>
          <FaBox className='text-[#ef93db] mr-[15px]' />
       Products
        </li>
         <li className='flex cursor-pointer mt-[12px] transition-colors duration-300 hover:text-[#ef93db]
        items-center text-[20px]'>
          <FaClipboardList className='text-[#ef93db] mr-[15px]' />
        Orders
        </li>

        <hr className="w-full border-gray-300 my-[20px]" />
         <li className='flex cursor-pointer mt-[12px] transition-colors duration-300 hover:text-[#ef93db]
        items-center text-[20px]'>
          <FaElementor className='text-[#ef93db] mr-[15px]' />
        Banners
        </li>
         <li className='flex cursor-pointer mt-[12px] transition-colors duration-300 hover:text-[#ef93db]
        items-center text-[20px]'>
          <FaCog className='text-[#ef93db] mr-[15px]' />
        Settings
        </li>
         <li className='flex cursor-pointer mt-[12px] transition-colors duration-300 hover:text-[#ef93db]
        items-center text-[20px]'>
          <FaHdd className='text-[#ef93db] mr-[15px]' />
        Backups
        </li>

        <hr className="w-full border-gray-300 my-[20px]" />
        <li className='flex cursor-pointer mt-[12px] transition-colors duration-300 hover:text-[#ef93db]
        items-center text-[20px]'>
          <FaChartBar className='text-[#ef93db] mr-[15px]' />
        Charts
        </li>
        <li className='flex cursor-pointer mt-[12px] transition-colors duration-300 hover:text-[#ef93db]
        items-center text-[20px]'>
          <FaClipboard className='text-[#ef93db] mr-[15px]' />
       All logs
        </li>
        <li className='flex cursor-pointer mt-[12px] transition-colors duration-300 hover:text-[#ef93db]
        items-center text-[20px]'>
          <FaSignOutAlt className='text-[#ef93db] mr-[15px]' />
        Logout
        </li>
      </ul>
    </div>
  )
}

export default Menu