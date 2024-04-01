import React from 'react'

function page() {
  return (
    <div className='flex flex-col gap-4 p-4 rounded-lg shadow-md md:w-3/5 mt-6 text-nowrap'>
        <h1 className='w-full text-center text-xl font-oswald font-bold'>Add Admin <span className='text-red-600'>Access</span> </h1>
        <div className='flex flex-row w-full justify-center items-center'>
            
            <input type='text' className='border-2 border-gray-300 rounded-md p-1 w-full ' placeholder='Name' />
        </div>
        <div className='flex flex-row w-full justify-center items-center'>
            
            <input type='email' className='border-2 border-gray-300 rounded-md p-1 w-full' placeholder='Email' />
        </div>
        <div className='flex flex-row w-full justify-center items-center'>
            
            <input type='password' className='border-2 border-gray-300 rounded-md p-1 w-full' placeholder='Password'/>
        </div>
        <div className='flex flex-row w-full justify-center items-center gap-2'>
            <p>Role : </p>
            <select className='border-2 border-gray-300 rounded-md p-1 w-full'>
                <option value='admin'>Admin</option>
                <option value='user'>User</option>
            </select>
        </div>
        <div className='px-3 py-2 rounded-md hover:bg-red-600 bg-red-500 w-fit text-white cursor-pointer'>Add Role</div>
    </div>
  )
}

export default page
