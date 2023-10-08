import React from 'react'
import bg from '../assets/forest.jpg'
import { useSelector } from 'react-redux'
import Map from '../components/Map';
function Home({data}) {
  const user = useSelector((state) => state.user.user);
  return (
    <main className='h-[100vh] '>
      {/* <div className='relative h-[70%]'>
        <div className='absolute w-full h-full'>
          <img src={bg} alt='Background' className='object-cover w-full h-full' />
        </div>

        <div className='absolute inset-0 flex flex-col gap-y-6 items-center justify-center text-center z-50'>
          <h1 className='text-white text-4xl font-extrabold'>
            {user ?`Welcome, ${user.fullName}` : 'Find next camping area!'}
          </h1>
          <input placeholder='Search by city' className='outline-none w-4/5 md:w-[60%] lg:w-[50%] font-[500] rounded-3xl p-4' />
        </div>
      </div> */}
      <Map data={data}/>
    </main>
  )
}

export default Home
