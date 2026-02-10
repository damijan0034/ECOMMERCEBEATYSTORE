import React from 'react'
import Products from '../components/Products'

const ProductList = () => {
  return (
    <div className='min-h-screen p-8 bg-gray-50'>
        
        <div className="flex m-4 justify-between">
            {/* LEFT */}
            <div className="flex flex-col sm:flex-row sm:items-center">
                <span className="text-lg font-semibold ">
                    Filter Products:
                </span>
                <select name="concern" id="" 
                className="p-2 mb-4 sm:mb-0 sm:mr-4">
                     <option disabled selected>
              Concern
            </option>
            <option>Dry Skin</option>
            <option>Pigmentation</option>
            <option>Oil Control</option>
            <option>Anti Acne</option>
            <option>Sunburn</option>
            <option>Skin Brightening</option>
            <option>Tan Removal</option>
            <option>Night Routine</option>
            <option>UV Protection</option>
            <option>Damaged Hair</option>
            <option>Frizzy Hair</option>
            <option>Stretch Marks</option>
            <option>Color Protection</option>
            <option>Dry Hair</option>
            <option>Soothing</option>
            <option>Dandruff</option>
            <option>Greying</option>
            <option>Hairfall</option>
            <option>Hair Color</option>
            <option>Well Being</option>
            <option>Acne</option>
                </select>

                <select name='brand' className="p-2 mb-4 mr-4 sm:mb-0">
                   <option disabled selected>
              Popular Brands
            </option>
            <option>Garnier</option>
            <option>Kylie</option>
            <option>Kiss Beauty</option>
            <option>Dr Rashel</option>
            <option>Luron</option>
            <option>Nivea</option>
            <option>Heaven Dove</option>
            <option>Disaar</option>
            <option>Johnsons Baby</option>
            <option>Rexona</option>
            <option>Kylie</option>
                </select>

                 <select
            name="skintype"
            className="p-2 mb-4 sm:mb-0"
            
          >
            <option disabled selected>
              Skin type
            </option>
            <option>All</option>
            <option>Oily</option>
            <option>Dry</option>
            <option>Sensitive</option>
            <option>Normal</option>
          </select>
            </div>

            {/*RIGHT */}
        <div className="flex flex-col sm:flex-row sm:items-center">
             <span className="text-lg font-semibold mr-4">Sort Products:</span>
          <select className="p-2" onChange={(e) => setSort(e.target.value)}>
            <option value="newest">Newest</option>
            <option value="asc">Price (asc)</option>
            <option value="desc">Price (desc)</option>
          </select>
        </div>

        </div>
        <Products />
    </div>
  )
}

export default ProductList