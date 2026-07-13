import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

function WorkspaceHeader() {
  return (
    <div className='flex w-full justify-between p-4'>
        {/* Logo */}
        <Image src={'/logodark2.png'} alt='logo' width={200} height={200} />

        {/* Menu Options */}
        <ul className='flex gap-5'>
            <li className='hover:text-blue-600 cursor-pointer'>Không gian làm việc</li>
            <li className='hover:text-blue-600 cursor-pointer'>Gói dịch vụ</li>
            <li className='hover:text-blue-600 cursor-pointer'>Hỗ trợ kỹ thuật</li>
        </ul>

        {/* User Button */}

        <UserButton />
    </div>
  )
}

export default WorkspaceHeader