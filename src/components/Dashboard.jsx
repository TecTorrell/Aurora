import React from 'react';
import DashboardHeader from './subComponents/DashboardHeader';
import ViewAllBtn from './subComponents/ViewAllBtn';
import LineChart from '../assets/icons/lineChart.svg';
import TfDetails from './subComponents/TfDetails';
import { FaCheckCircle } from 'react-icons/fa';
import SavesColumn from './subComponents/SavesColumn';
import EarningsIcon from '../assets/icons/earnings.svg';
import ClientsIcon from '../assets/icons/client-Avatar.svg';
import ClientChart from '../assets/icons/Graph.svg';
import AuroraPlusImage from '../assets/img/Image.jpg';
import Transaction from './subComponents/Transaction';
import BusIcon from '../assets/icons/directions_bus.svg';
import GroceryIcon from '../assets/icons/shopping_basket.svg';
import SubscriptionIcon from '../assets/icons/subscriptions.svg';

// User images
import user_one from '../assets/avatars/Avatar.png';
import user_two from '../assets/avatars/Avatar (1).png';
import user_three from '../assets/avatars/Avatar (2).png'

const Dashboard = () => {
  return (
    <div className='w-full bg-secondary p-6 px-20'>
      <DashboardHeader />

      <section className='mt-12'>
        <div className="flex items-center justify-between">
          {/* line chart */}
          <div className='bg-tertiary w-[27rem] px-7 pt-7 pb-1 rounded-3xl font-Inter relative'>
            <h2 className='text-white text-sm'>Profit and loss</h2>
            <h3 className='text-white text-4xl font-extrabold my-3'>$682.5</h3>
            <h4 className='text-orange-500 flex items-center gap-2 absolute'> <FaCheckCircle className='bg-white rounded-full border border-orange-500'/> On track</h4>
          
            <div className='w-full '>
              <img className="w-full h-full" src={LineChart} alt="line chart" />
            </div>
          
          </div>


          {/* your transfers */}
          <div className='w-[25rem]'>
            <h2 className='text-3xl text-tertiary font-bold mb-10 font-DM Sans'>Your Transfers</h2>
            <TfDetails
              image_source = {user_one}
              tf_destination = 'From Alex Mande'
              time = '16:36'
              amount = '+$50'
            />
            <TfDetails
              image_source = {user_two}
              tf_destination = 'To Laura Santos'
              time = '08:49'
              amount = '-$27'
            />
            <ViewAllBtn ml={'ml-[19.55rem]'}/>
          </div>


          {/* total saves */}
          <div className='bg-primary p-7 rounded-3xl font-Inter h-[17.5rem] flex flex-col justify-between w-[25rem]'>
            <div className="flex items-center w-full justify-between">
              <div>
                <h2 className='text-gray-500'>Total saves</h2>
                <h3 className='text-2xl font-bold text-tertiary'>$6.682</h3>
              </div>
              <div className='h-[3rem] w-[3rem]'>
                <img className='w-full h-full' src={user_three} alt="user image" />
              </div>
            </div>

            {/* savings column chart */}
            <div className="flex gap-3 w-full h-fit justify-around px-2">
              <SavesColumn day={'S'} height_one='7rem' height_two='1.5rem'/>
              <SavesColumn day={'M'} height_one='2rem' height_two='3rem'/>
              <SavesColumn day={'T'} height_one='4rem' height_two='2rem'/>
              <SavesColumn day={'W'} height_one='3rem' height_two='2rem'/>
              <SavesColumn day={'T'} height_one='4rem' height_two='5rem'/>
              <SavesColumn day={'F'} height_one='4rem' height_two='3rem'/>
              <SavesColumn day={'S'} height_one='3rem' height_two='2rem'/>
            </div>
          </div>
        </div>
        

        <div className="flex justify-between">
          <div className='w-[63.25rem] mt-8'>
            {/* earnings & new clients */}
            <div className='flex items-center w-full justify-between pr-28 font-Inter'>
              <div className='flex items-center bg-primary rounded-3xl p-5 justify-between w-[25rem]'>
                {/* earnings icon */}
                <div className='w-14 h-14 ml-3'>
                  <img className='w-full h-full' src={EarningsIcon} alt="bar chart" />
                </div>
                <p className='mr-40'>
                  <h2 className='font-semibold'>Earnings</h2>
                  <h3 className='text-2xl text-tertiary font-extrabold'>$350.40</h3>
                </p>
              </div>
              <div className='flex items-center bg-primary rounded-3xl p-5 justify-between w-[25rem]'>
                {/* new clients icon */}
                <div className='w-14 h-14 ml-3'>
                  <img className='w-full h-full' src={ClientsIcon} alt="clients" />
                </div>
                <p className='mr-12'>
                  <h2 className='font-semibold'>New clients</h2>
                  <h3 className='text-2xl text-tertiary font-extrabold'>321</h3>
                </p>
                <div className='w-16 h-16 mr-5'>
                  <img className='w-full h-full' src={ClientChart} alt="line chart" />
                </div>
              </div>
            </div>
            {/* try aurora plus now */}
            <div className='font-DM Sans bg-primary rounded-3xl flex items-center p-7 mt-8 px-10'>
              <div className='w-full'>
                <h2 className='text-tertiary text-5xl font-semibold'>Try Aurora Plus now!</h2>
                <p className='text-gray-500 py-6 font-semibold leading-7 w-[30rem]'>
                  Enter in this creative world. Aurora Plus is the best product for your business.
                </p>
                <div className="flex w-full items-center">
                  <button className='bg-tertiary text-primary rounded-full p-4 px-10 font-semibold'>Try for free</button>
                  <button className='text-gray-500 ml-16 font-semibold'>Skip</button>
                </div>
              </div>
              {/* image plus */}
              <div className='w-[35rem] h-[18rem] rounded-3xl overflow-hidden'>
                <img className='w-full h-full' src={AuroraPlusImage} alt="Image" />
              </div>
            </div>
          </div>

          <div className='bg-primary rounded-3xl p-10 mt-8 w-[25rem]'>
            <h1 className='font-semibold text-2xl text-tertiary font-Inter'>Your transactions</h1>

            <div className="flex flex-col gap-10 my-12">
              <Transaction icon={BusIcon} title={'Public Transport'} date={'20 September 2022'} alt={'Bus image'}/>
              <Transaction icon={GroceryIcon} title={'Grocery Store'} date={'18 September 2022'} alt={'Bus image'}/>
              <Transaction icon={SubscriptionIcon} title={'Subscription'} date={'23 September 2022'} alt={'Bus image'}/>
            </div>

            <ViewAllBtn ml={'ml-[14.5rem]'}/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Dashboard