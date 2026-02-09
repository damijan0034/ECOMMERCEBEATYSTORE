

const Banner = () => {
  return (
    <div className="relative bg-[url('/beautybanner2.jpg')] 
    bg-cover  h-[80vh] bg-repeat-none
    
    ">
        <div className="absolute inset-0 bg-black opacity-40 ">

        </div>
        <div className="relative flex flex-col text-white w-[50%] items-center justify-center h-full">
          <h1 className="text-4xl font-bold mb-4">Welcome to Bliss Beauty</h1>
          <p className="text-lg mb-6">Discover the perfect blend of luxury and wellness</p>
          <div className="flex gap-4">
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2  transition duration-300">
            Shop Now
            
          </button>
          <button className="bg-gray-500 p-[10px] w-[200px] text-white cursor-pointer">CALL:(176) 678 890</button>
          </div>
        </div>

    </div>
  )
}

export default Banner