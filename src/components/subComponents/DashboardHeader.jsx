import React from 'react'
import SearchIcon from '../../assets/icons/search.svg';
import ImportIcon from '../../assets/icons/import.svg';
import NotificationIcon from '../../assets/icons/notification.svg'
import AvatarOne from '../../assets/avatars/image.png'

const DashboardHeader = () => {
  return (
    <div>
        <div className='flex justify-between relative items-center mb-5'>
            <h1 className='text-5xl font-bold text-tertiary'>Dashboard</h1>
            <div className='w-[269px] bg-secondary-two rounded-full flex h-[42px]'>
                <img className='scale-[0.4] ml-1' src={SearchIcon} alt="search" />
                <input className='focus:outline-none bg-transparent h-full pr-7 placeholder:text-sm placeholder:text-text-color w-full rounded-e-full' type="text" placeholder='Search Dashboard' />
            </div>
            <div className='flex items-center justify-between w-60'>
                <img src={NotificationIcon} alt="notifcation" />
                <button className='w-fit flex items-center justify-between bg-tertiary rounded-full p-3 px-7 gap-3 text-primary h-full'>
                    Import
                    <img src={ImportIcon} alt="import" />
                </button>
                <img src={AvatarOne} alt="user" />
                {/* Active icon */}
                <div className="bg-green-500 w-5 h-5 rounded-full absolute left-[99.25%] top-7   border-4 border-white"></div>
            </div>
        </div>

        <h2 className='text-text-color'>Dashboard/Overview</h2>
    </div>
  )
}

export default DashboardHeader