import React from 'react'
import IASPhoto from '../assets/IASPhoto.jpeg'
import DSOsir from '../assets/DSOsir.jpg'

const About = () => {
  return (
    // <div className='flex items-center gap-10 justify-center sm:flex-col '>
    //   <div className=' mt-10 m-20'>
    //     <a
    //       href='#'
    //       class='block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex     flex-col justify-center items-center'
    //     >
    //       <img className=' border-2 border-black  w-64' src={IASPhoto} alt='' />
    //       <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
    //         Noteworthy technology acquisitions 2021
    //       </h5>
    //       {/* <p class='font-normal text-gray-700 dark:text-gray-400'>
    //         Here are the biggest enterprise technology acquisitions of 2021 so
    //         far, in reverse chronological order.
    //       </p> */}
    //     </a>
    //   </div>

    //   <div className='mt-10 m-20'>
    //     <a
    //       href='#'
    //       class='block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex   flex-col justify-center items-center'
    //     >
    //       <img className=' border-2  border-black w-64' src={IASPhoto} alt='' />
    //       <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
    //         Noteworthy technology acquisitions 2021
    //       </h5>
    //       {/* <p class='font-normal text-gray-700 dark:text-gray-400'>
    //         Here are the biggest enterprise technology acquisitions of 2021 so
    //         far, in reverse chronological order.
    //       </p> */}
    //     </a>
    //   </div>
    // </div>
    <div class='flex flex-wrap justify-center xl:flex-10  '>
      <div class='p-4 max-w-sm m-10'>
        <div class='flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-8 flex-col'>
          <div class='flex items-center mb-3'></div>
          <img
            className=' border-2 border-black  w-64x'
            src={IASPhoto}
            alt=''
          />
          <p className='  text-center font-semibold'>
            Dr. Pankaj Aashiya (IAS)
          </p>
          <h5 class=' text-center capitalize font-semibold tracking-tight text-gray-900 dark:text-white'>
            District Collector
          </h5>

        </div>
      </div>

      <div class='p-4 max-w-sm m-10'>
        <div class='flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-8 flex-col'>
          <div class='flex items-center mb-3'></div>
          <img className=' border-2 border-black  w-64 h-96' src={DSOsir} alt='' />
          <p className='  text-center font-semibold'>
            Mr. Ghanshyam Rathod
          </p>
          <h5 class=' text-center capitalize  tracking-tight text-gray-900 dark:text-white'>
            District sport officer
          </h5>
        </div>
      </div>
    </div>
  )
}

export default About
