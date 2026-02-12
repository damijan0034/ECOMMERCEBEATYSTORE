import { DataGrid } from '@mui/x-data-grid';

const rows = [
  { id: 1, name: 'Data Grid', description: 'the Community version' },
  { id: 2, name: 'Data Grid Pro', description: 'the Pro version' },
  { id: 3, name: 'Data Grid Premium', description: 'the Premium version' },
];

const columns = [
  { field: 'name', headerName: 'Product Name', width: 200 },
  { field: 'description', headerName: 'Description', width: 300 },
  
];

const Products = () => {
  return (
    <div className="p-5 w-[70vw]">
       <div className="flex m-[30px] items-center justify-between">
         <h1 className="m-[20px] text-[20px]">All Products</h1>
         <button className="bg-[#1e1e1e] p-[10px] font-semibold
          text-white cursor-pointer
         ">
          Create</button>
       </div>
       <div className='m-[30px]'>
         <DataGrid rows={rows} columns={columns} />
       </div>
    </div>
  )
}

export default Products