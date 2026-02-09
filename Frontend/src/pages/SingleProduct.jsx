import StarRatings from 'react-star-ratings';
import { FaMinus, FaPlus } from 'react-icons/fa';

const SingleProduct = () => {
    return (
        <div className='h-auto flex justify-stretch p-[30px]'>
            {/* LEFT */}
            <div className="flex-1 h-[500px] w-[600px]">
                <img className='w-[100%] h-[100%]' src="/lotion2.jpg" alt="lotion" />
            </div>

            {/* RIGHT */}
            <div className='flex-1 flex flex-col m-10'>
                <h2 className='text-[25px] mb-[20px] font-semibold'>
                    Bajaj almond drops hair oil 300ml
                </h2>
                <span>
                    The new and better almond drops hair oil
                    is enriched with the goodness of almond
                    oil and 10 other natural oils.
                    It nourishes your hair from root to tip,
                    making it stronger, healthier and shinier.
                    It also helps in reducing hair fall
                    and split ends, giving you long and luscious
                    locks.
                </span>
                <h2 className='font-semibold mt-2 text-[20px]'>$90</h2>

                <div className="flex items-center">
                    <StarRatings
                        rating={2.403}
                        starDimension="25px"
                        starSpacing="5px"
                        starRatedColor="gold"
                    />
                    <span className='font-semibold text-[18px]'>(1)</span>
                </div>

                <div className="w-96 h-52 border-2 border-gray-300 
       rounded-lg shadow-md my-4 p-6">
                    <h2 className="flex items-center justify-center font-semibold
            text-lg text-gray-700 mb-4
            ">
                        WHAT IS IN THE BOX
                    </h2>
                    <hr className="mb-2" />
                    <span className='block text-gray-400 text-base text-[14px]'>
                        1 x Bajaj Almond Drops Hair Oil 300ml
                        1 x Bajaj Almond Drops Hair Oil 300ml
                    </span>
                </div>
                <div className="inline-flex bg-[#ef93db]
       text-white font-semibold text-sm p-3 rounded-full shadow-md
       ">
                    Wholedale available
                </div>

                <div className="flex items-center my-5 p-4">
                    <FaMinus className='bg-[#ef93db] text-white p-3 rounded-full
         mr-4 cursor-pointer text-4xl' />
                    <span className="text-lg font-semibold">1</span>
                    <FaPlus className='bg-[#ef93db] text-white p-3 rounded-full
         ml-4 cursor-pointer text-4xl'  />
                </div>
                <button className="text-white bg-[#1e1e1e] p-[10px] 
       w-[200px] cursor-pointer
       ">
                    Add To Card
                </button>
                <hr className="my-4" />
                <div className="flex flex-col">
                    <h2 className="font-semibold text-[18px]">Reviews</h2>
                    <div className="flex items-center">
                        <StarRatings
                            rating={2.403}
                            starDimension="25px"
                            starSpacing="5px"
                            starRatedColor="gold"
                        />
                        <span className="font-semibold mx-[20px]">John K.</span>
                    </div>
                    <div className="flex items-center">
                        <StarRatings
                            rating={3.403}
                            starDimension="25px"
                            starSpacing="5px"
                            starRatedColor="gold"
                        />
                        <span className="font-semibold mx-[20px]">Jane K.</span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SingleProduct