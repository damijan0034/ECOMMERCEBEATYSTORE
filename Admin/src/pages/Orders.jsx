import { DataGrid } from '@mui/x-data-grid';
import {FaTrash} from "react-icons/fa"

const rows = [
  
  { id: 1, name: 'Mila', email: 'milan@gmail',phone:'12345' },
  { id: 2, name: 'Jovan', email: 'jovan@gmail',phone:'76545' },
  { id: 3, name: 'Sanja', email: 'sanja@gmail',phone:'46345' },
];

const columns = [
  { field: 'name', headerName: 'Customer Name', width: 200 },
  { field: 'email', headerName: ' Customer Email', width: 300 },
  { field: 'phone', headerName: 'Customer Phone', width: 300 },
  {
      field: "delete",
      headerName: "Delete",
      width: 100,
      renderCell: () => {
        return (
          <>
            <FaTrash className="text-red-500 cursor-pointer m-2" />
          </>
        );
      },
    },
];

const Orders = () => {
  return (
    <div className="p-5 w-[70vw]">
       <div className="flex m-[30px] items-center justify-between">
         <h1 className="m-[20px] text-[20px]">All Orders</h1>
         
       </div>
       <div className='m-[30px]'>
         <DataGrid rows={rows} columns={columns} />
       </div>
    </div>
  )
}

export default Orders