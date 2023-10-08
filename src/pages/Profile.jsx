import React from 'react'
import {BiPencil as Pencil} from 'react-icons/bi'
import pp from '../assets/pp.jpg';
import { useSelector } from 'react-redux';
function Profile() {
    const user = useSelector((state) => state.user.user);
return (
    <main className='h-[100vh] flex justify-between px-[10%]'>
        <div className='w-[40%] flex flex-col gap-y-3'>
            <div className='flex justify-between'>
                <img className='w-[80px] hover:grayscale-[40%] cursor-pointer h-[80px] rounded-full' src={pp}/>

                <Pencil className=' p-1 rounded-full hover:bg-mainGray' cursor={'pointer'} size={25}/>
            </div>
            
            <div>
                {user?.fullName}
            </div>
        </div>

        <div className='w-[60%]'>
            {/* 1 */}
        </div>
    </main>
  )
}

export default Profile
