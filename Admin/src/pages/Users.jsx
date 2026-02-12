import { DataGrid } from '@mui/x-data-grid';

const rows = [
  
  { id: 1, name: 'Mila', email: 'milan@gmail',phone:'12345' },
  { id: 2, name: 'Jovan', email: 'jovan@gmail',phone:'76545' },
  { id: 3, name: 'Sanja', email: 'sanja@gmail',phone:'46345' },
];

const columns = [
  { field: 'name', headerName: 'Name', width: 200 },
  { field: 'email', headerName: 'Email', width: 300 },
  { field: 'phone', headerName: 'Phone', width: 300 },
];

const Users = () => {
  return (
    <div className="p-5 w-[70vw]">
       <div className="flex m-[30px] items-center justify-between">
         <h1 className="m-[20px] text-[20px]">All Users</h1>
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

export default Users