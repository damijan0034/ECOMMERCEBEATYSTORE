import { LineChart } from '@mui/x-charts/LineChart';




const Home = () => {
  return (
    <div className="flex justify-between p-2 bg-gray-200 
    h-screen w-[74vw] ">
      {/* LEFT */}
      <div className='flex flex-col  w-2/3 '>
        <div className="flex ">
          <div className="bg-white w-52 shadow-xl 
          h-52 m-5 rounded-lg flex flex-col items-center justify-center">
          
            <div className="w-32 m-5 h-32 border-[10px] border-blue-400 rounded-full flex items-center justify-center">
              <h2 className="bold text-2xl">699</h2>
            </div>
            <h2 className="font-semibold text-xl">Orders</h2>
          </div>
      
          <div className="bg-white w-52 shadow-xl 
          h-52 m-5 rounded-lg flex flex-col items-center justify-center">
          
            <div className="w-32 m-5 h-32 border-[10px] border-red-400 rounded-full flex items-center justify-center">
              <h2 className="bold text-2xl">100</h2>
            </div>
            <h2 className="font-semibold text-xl">Products</h2>
          </div>
    
          <div className="bg-white w-52 shadow-xl 
          h-52 m-5 rounded-lg flex flex-col items-center justify-center">
          
            <div className="w-32 m-5 h-32 border-[10px] border-gray-400 rounded-full flex items-center justify-center">
              <h2 className="bold text-2xl">200</h2>
            </div>
            <h2 className="font-semibold text-xl">Orders</h2>
          </div>
        </div>
        {/* TABLE */}
        <div className="m-5 p-5 bg-white rounded-lg">
          <div className="p-6 rounded-md bg-white">
            <h3 className="text-lg font-bold mb-4">Latest Transactions</h3>
            <table className="min-w-full table-auto">
              <thead>
                <tr className='bg-gray-100'>
                  <th className="px-4 py-2">Customer</th>
                  <th className="px-4 py-2">Amount</th>
                  <th className="px-4 py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                   <td className="px-4 py-2">John Doe</td>
                   <td className="px-4 py-2">$100</td>
                   <td className="px-4 py-2 text-green-500">Approved</td>
                </tr>
                 <tr className="border-b">
                   <td className="px-4 py-2">James Doe</td>
                   <td className="px-4 py-2">$200</td>
                   <td className="px-4 py-2 text-red-500">Decline</td>
                </tr>
                 <tr className="border-b">
                   <td className="px-4 py-2">Jane Doe</td>
                   <td className="px-4 py-2">$300</td>
                   <td className="px-4 py-2 text-green-500">Approved</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>

       {/* RIGHT */}
      <div className="bg-white w-1/3  flex flex-col p-5 shadow-xl rounded-lg">
        <div className="bg-gray-50 p-5 mb-5 shadow-xl rounded-lg flex flex-col items-center">
          <h2 className="font-bold text-xl">Total Revenue:$200.00</h2>
        </div>

        <div className="bg-gray-50 p-5 mb-5 shadow-xl rounded-lg flex flex-col items-center">
          <h2 className="font-bold text-xl">Total Losses:$0</h2>
        </div>
        <LineChart
          
          xAxis={[{data:[1,2,3,4,5,6,7,8,9,10]}]}
          
          series={[
            {
              data: [10, 20, 15, 30, 25, 35, 40, 45, 50, 55],
              label: 'Revenue',
              color: 'blue',
            },
          ]}
          
          height={300}
          grid={{ vertical: true, horizontal: true }}
/>
      </div>
    </div>
  )
}

export default Home