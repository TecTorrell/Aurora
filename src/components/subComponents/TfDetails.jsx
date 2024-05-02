import React from 'react'

const TfDetails = ({image_source, tf_destination, time, amount}) => {
  return (
    <div className='flex items-center mb-5 justify-between'>
      <div className='rounded-full h-[3rem] w-[3rem]'>
        <img className='w-full h-full ' src={image_source} alt="user-image" />
      </div>

      <p className='w-[10rem] -ml-20'>
        <h2 className='text-tertiary text-lg font-bold mb-1'>{tf_destination}</h2>
        <h3 className='text-gray-500 text-sm'>Today, {time}</h3>
      </p>

      <div className='bg-orange-100 p-1 rounded-lg w-fit h-fit'>
        <h2 className='font-bold text-orange-500 mx-1 text-lg'>{amount}</h2>
      </div>
    </div>
  )
}

export default TfDetails