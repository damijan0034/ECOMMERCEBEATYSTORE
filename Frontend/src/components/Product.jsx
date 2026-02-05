import StarRatings from 'react-star-ratings';

const Product = () => {
  return (
     <div className="flex flex-col items-center
        justify-center m-[20px] h-[500px] cursor-pointer
        ">
        <img src="serum.jpg" alt="serum"
          className="bg-cover w-[300px] h-[400px]"
        />
        <h2 className='font-semibold text-[18px]'>Rosehip seed,oil argan</h2>
        <span className='font-semibold text-[18px]'>$100</span>
        <div className="flex items-center">
        <StarRatings
        rating={2.403}
        starDimension="25px"
        starSpacing="5px"
        starRatedColor="gold"
      />
       <span className='font-semibold text-[18px]'>(1)</span>
       </div>
      </div>
  )
}

export default Product