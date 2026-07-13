import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'lucide-react'

function EmptyWorkspace() {
  return (
    <div className='flex flex-col mt-10 items-center justify-center'>
        <Image src={'/folder.png'} alt='folder' width={70} height={70} />
        <h2 className='font-medium text-2xl mt-5 mb-4'>Chưa kết nối Repository</h2>
        <p className='text-center mx-10'>Kết nối tài khoản GitHub của bạn và thêm một Repository để tạo và chạy các trường hợp kiểm thử!</p>

        <Button className='mt-5'>
            <Link className='h-4 w-4 mr-2' /> Kết nối Github
        </Button>

    </div>
  )
}

export default EmptyWorkspace