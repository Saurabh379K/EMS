import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16'>
        <div className='flex-shrink-0 h-full w-[300px] bg-red-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>21 July 2025</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'> Make a YT video</h2>
            <p className='text-sm mt-2'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis a mollitia nobis sequi? Ut, quisquam?
            </p>
        </div>

        <div className='flex-shrink-0 h-full w-[300px] bg-green-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>21 July 2025</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'> Make a YT video</h2>
            <p className='text-sm mt-2'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis a mollitia nobis sequi? Ut, quisquam?
            </p>
        </div>

        <div className='flex-shrink-0 h-full w-[300px] bg-blue-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>21 July 2025</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'> Make a YT video</h2>
            <p className='text-sm mt-2'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis a mollitia nobis sequi? Ut, quisquam?
            </p>
        </div>

        <div className='flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>21 July 2025</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'> Make a YT video</h2>
            <p className='text-sm mt-2'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis a mollitia nobis sequi? Ut, quisquam?
            </p>
        </div>
    </div>
  )
}

export default TaskList