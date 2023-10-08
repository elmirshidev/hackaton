import React from 'react'
import data1 from '../assets/data1.jpeg'
import data2 from '../assets/data2.jpeg'
import data3 from '../assets/data3.jpeg'
import data4 from '../assets/data4.jpeg'
import data5 from '../assets/data5.jpeg'
import data6 from '../assets/data6.jpeg'
import data7 from '../assets/data7.jpeg'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import '../zoom.css'
function Statistics() {
    return (
        <main className='pt-[5%]'>
            <section className='flex flex-col  items-center justify-center'>
                <center className='mb-6'>
                    <h1 className='text-4xl font-bold'>Some wildfire data visualisations around world</h1>
                </center>

                <div className='flex flex-col gap-x-4 justify-center items-center'>
                    <div className='flex justify-center items-center'>
                        <Zoom >
                            <img className='w-[60%]' src={data1} alt='data1' />
                        </Zoom>
                    </div>
                    <div className='flex justify-center items-center'>
                        <Zoom>
                            <img className='w-[60%]' src={data2} alt='data2' />
                        </Zoom>
                    </div>
                    <div className='flex justify-center items-center'>
                        <Zoom>
                            <img className='w-[60%]' src={data3} alt='data3' />
                        </Zoom>
                    </div>
                </div>
            </section>
            <section className='flex flex-col  items-center justify-center'>
                <center className='mb-6'>
                    <h1 className='text-4xl font-bold'>Some wildfire data visualisations from Azerbaijan</h1>
                </center>

                <div className='flex flex-col gap-x-4 justify-center items-center'>
                    <div className='flex justify-center items-center'>
                        <Zoom>
                            <img className='w-[60%]' src={data4} alt='data4' />
                        </Zoom>
                    </div>
                    <div className='flex justify-center items-center'>
                        <Zoom>
                            <img className='w-[60%]' src={data5} alt='data5' />
                        </Zoom>
                    </div>
                    <div className='flex justify-center items-center'>
                        <Zoom>
                            <img className='w-[60%]' src={data6} alt='data6' />
                        </Zoom>
                    </div>
                    <div className='flex justify-center items-center'>
                        <Zoom>
                            <img className='w-[60%]' src={data7} alt='data7' />
                        </Zoom>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Statistics
