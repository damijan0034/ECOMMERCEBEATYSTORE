import Product from "./Product"


const Products = () => {


  return (
    <div className='flex  mx-[40px]'>
      <Product img="lotion.jpg" />
      <Product img="serum.jpg" />
      <Product img="serum1.jpg" />
      <Product img="lotion1.jpg" />
    </div>
  )
}

export default Products