import React from 'react'

const Table = ({tableData,handleEdit,handleDelete}) => {
  return (
    <div>
      <table className=' w-full m-8 max-w-5xl mx-auto'>
        <thead>
          <tr className='bg-gray-100'>
            <th className='text-2xl font-semibold p-2 border'>Name</th>
            <th className='text-2xl font-semibold p-2 border'>Email</th>
            <th className='text-2xl font-semibold p-2 border'>Actions</th>
          </tr>
        </thead>
        <tbody className='text-center'>
          {tableData.map((data,idx)=>{
            return(
              <tr key={idx} className=''>
                <td className='border p-3'>{data.name}</td>
                <td className='border p-3'>{data.email}</td>
                <td className='border p-3 '>
                  <button className=' bg-purple-500 text-white rounded-sm p-2 mr-3' onClick={(e)=>{handleEdit(idx)}}>Edit</button>
                  <button className=' bg-red-500 text-white rounded-sm p-2' onClick={(e)=>{handleDelete(idx)}}>Delete</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Table