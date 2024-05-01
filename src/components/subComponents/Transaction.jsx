import React from 'react'

const Transaction = ({icon, title, date, alt}) => {
  return (
    <div className='font-DM Sans'>
        <div className='flex justify-between px-5'>
            <img src={icon} alt={alt} />

            <p className='w-[10rem] mr-14'>
                <h3 className='text-tertiary font-semibold text-xl'>{title}</h3>
                <h4 className='text-gray-400'>{date}</h4>
            </p>
        </div>
    </div>
  )
}

export default Transaction