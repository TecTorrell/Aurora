import React from 'react';
import Logo from '../assets/logo/logo 1.png'
import DashboardIcon from '../assets/icons/dashboard.svg';
import OrganizationIcon from '../assets/icons/organization.svg';
import ReportsIcon from '../assets/icons/reports.svg';
import DocumentIcon from '../assets/icons/documents.svg';
import SalesIcon from '../assets/icons/sales.svg';
import PurchasesIcon from '../assets/icons/wallet.svg';
import AccountingIcon from '../assets/icons/view.svg';
import BankIcon from '../assets/icons/bank.svg';

const Navbar = () => {
  return (
    <div className=' w-[264px] h-[100vh] py-5'>
      {/* logo */}
      <a href="#">
        <img className='scale-[0.7]' src={Logo} alt="logo" />
      </a>

      {/* general navigation */}
      <div className='w-fit m-auto mt-10'>
        <h1 className='font-Inter text-xs text-text-color font-semibold mb-8'>GENERAL</h1>
        <ul className='h-fit'>
            <li className='flex items-center bg-secondary text-black text-base rounded-full w-[177px] h-[47px] mb-4 font-semibold'>
                <img className='h-[36px] w[36px] m-[10px] text-[16px]' src={DashboardIcon} alt="icon" />
                <span className='ml-[5%]'>Dashboard</span>
            </li>
            <li className='flex items-center text-black text-base rounded-full w-[177px] h-[47px] mb-4 font-semibold hover:bg-secondary'>
                <img className='h-[36px] w[36px] m-[10px] text-[16px]' src={OrganizationIcon} alt="icon" />
                <span className="ml-[5%]">Organizations</span>
            </li>
            <li className='flex items-center text-black text-base rounded-full w-[177px] h-[47px] mb-4 font-semibold hover:bg-secondary'>
                <img className='h-[36px] w[36px] m-[10px] text-[16px]' src={ReportsIcon} alt="icon" />
                <span className="ml-[5%]">Reports</span>
            </li>
            <li className='flex items-center text-black text-base rounded-full w-[177px] h-[47px] mb-4 font-semibold hover:bg-secondary'>
                <img className='h-[36px] w[36px] m-[10px] text-[16px]' src={DocumentIcon} alt="icon" />
                <span className="ml-[5%]">Documents</span>
            </li>
        </ul>
      </div>

      {/* management navigation */}
      <div className='w-fit m-auto mt-10'>
        <h1 className='font-Inter text-xs text-text-color font-semibold mb-4'>MANAGEMENT</h1>
        <ul className='h-fit'>
            <li className='flex items-center text-text-color text-xs w-[177px] h-[47px] mb-4 font-semibold'>
                <img className='h-[20px] w[20px] ml-5 text-[16px]' src={SalesIcon} alt="icon" />
                <span className='ml-[13%]'>Sales</span>
            </li>
            <li className='flex items-center text-text-color text-xs w-[177px] h-[47px] mb-4 font-semibold'>
                <img className='h-[20px] w[20px] ml-5 text-[16px]' src={PurchasesIcon} alt="icon" />
                <span className="ml-[12%]">Purchases</span>
            </li>
            <li className='flex items-center text-text-color text-xs w-[177px] h-[47px] mb-4 font-semibold'>
                <img className='h-[18px] w[17px] ml-5 text-[16px]' src={AccountingIcon} alt="icon" />
                <span className="ml-[10%]">Reports</span>
            </li>
            <li className='flex items-center text-text-color text-xs w-[177px] h-[47px] mb-4 font-semibold'>
                <img className='h-[20px] w[20px] ml-5 text-[16px]' src={BankIcon} alt="icon" />
                <span className="ml-[13%]">Documents</span>
            </li>
        </ul>
      </div>

      <p className='text-text-color text-xs font-sm ml-14 w-fit mt-16'>
        <h2>2023 © Lucas Maques</h2>
        <h2>Expire in 09/2023</h2>
      </p>
    </div>
  )
}

export default Navbar