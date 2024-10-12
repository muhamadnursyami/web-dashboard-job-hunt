import React, { FC } from 'react'
import { Button } from '../../button';
import { FiHome } from "react-icons/fi";
import { AiOutlineMessage } from "react-icons/ai";
import { FaRegBuilding } from "react-icons/fa";
import { HiOutlineUsers } from "react-icons/hi2";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { IoCalendarOutline } from "react-icons/io5";
import { GoGear } from "react-icons/go";
import { RiLogoutCircleRLine } from "react-icons/ri";
interface SidebarProps {
  
}

const Sidebar: FC<SidebarProps> = ({  }) => {
  return (
    <div className='pb-12 min-h-screen'>
        <div className='space-y-4 py-4'>
            <div className='px-3 py-2'>
                <h2 className='mb-2 px-4  text-lg font-semibold'> 
                    Dashboard
                </h2>
                <div className='space-y-3'>
                    <Button variant={"ghost"} className='w-full justify-start rounded-none  hover:text-primary'>
                        <FiHome  className='mr-2 text-lg'/>
                        Home
                    </Button>
                    <Button variant={"ghost"} className='w-full justify-start rounded-none hover:text-primary'>
                        <AiOutlineMessage   className='mr-2 text-lg'/>
                        Messages
                    </Button>
                    <Button variant={"ghost"} className='w-full justify-start rounded-none hover:text-primary'>
                        <FaRegBuilding   className='mr-2 text-lg'/>
                        Company Profiles
                    </Button>
                    <Button variant={"ghost"} className='w-full justify-start rounded-none  hover:text-primary'>
                        <HiOutlineUsers   className='mr-2 text-lg'/>
                        All Applicants
                    </Button>
                    <Button variant={"ghost"} className='w-full justify-start rounded-none hover:text-primary'>
                        <HiOutlineClipboardDocumentList   className='mr-2 text-lg'/>
                        Job Listing
                    </Button>
                    <Button variant={"ghost"} className='w-full justify-start rounded-none  hover:text-primary'>
                        <IoCalendarOutline   className='mr-2 text-lg'/>
                       My Schedule
                    </Button>
                </div>
            </div>
        </div>
        <div className='space-y-4 py-4'>
            <div className='px-3 py-2'>
                <h2 className='mb-2 px-4  text-lg font-semibold'> 
                    Settings
                </h2>
                <div className='space-y-3'>
                    <Button variant={"ghost"} className='w-full justify-start rounded-none  hover:text-primary'>
                        <GoGear   className='mr-2 text-lg'/>
                        Settings
                    </Button>
                    <Button variant={"ghost"} className='w-full justify-start rounded-none hover:text-red-500 hover:bg-red-200 text-red-500'>
                        <RiLogoutCircleRLine    className='mr-2 text-lg'/>
                        Logout
                    </Button>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar;