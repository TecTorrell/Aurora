import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

const ViewAllBtn = ({ml}) => {
  return (
    <button className={`text-tertiary font-bold flex items-center gap-3 ${ml}`}>
        View all
        <FaArrowRightLong />
    </button>
  )
}

export default ViewAllBtn