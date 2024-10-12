import React, { FC } from 'react'
import { Button } from '../../button';
import { FaPlus } from "react-icons/fa";
interface HeaderProps {
  
}

const Header: FC<HeaderProps> = ({  }) => {
  return (
    <div className='pb-3 mb-8 border-b border-border flex flex-row items-center justify-between'>
        <div>
                <div>Company</div>
                <div className='font-semibold'>Twitter</div>
        </div>
        <div>
                <Button className='rounded-none py-3 px-6'>
                <FaPlus className='mr-2 w-4 h-4' />
                    Post a Job
                    </Button>
        </div>
    </div>
  )
}

export default Header;