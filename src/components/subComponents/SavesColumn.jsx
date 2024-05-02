import React from 'react'

const SavesColumn = ({height_one = '5rem', height_two='5rem'}) => {
  return (
    <div className='w-6 h-fit rounded-full m-auto text-center'>
        {/* <h2 className='text-gray-500 text-sm mb-2'>{day}</h2> */}
        <div style={{ height: height_one }} className='w-full bg-tertiary cursor-default text-transparent rounded-t-full'>.</div>
        <div style={{ height: height_two }} className='w-full bg-orange-400 cursor-default text-transparent rounded-b-full'>.</div>
    </div>
  )
}

export default SavesColumn