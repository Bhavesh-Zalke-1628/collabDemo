import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaArrowRightArrowLeft } from 'react-icons/fa6'
import sports from '../assets/sports.png'
import smjt from '../assets/smjt.png'
import sevenyfiveears from '../assets/sevenyfiveears.jpg'
import About from './About'
import { useSelector } from 'react-redux'

const Home = () => {
  const { isLoggedIn } = useSelector(state => state?.auth)

  return (
    <>
      <nav class=' mt-20  bg-red-500'>
        <div class='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
          <div class='relative flex h-16 items-center justify-between'>
            <div class='absolute inset-y-0 left-0 flex items-center sm:hidden'>

            </div>
            <div class='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
              <div class='flex flex-shrink-0 items-center'>
                <img
                  class='h-8 w-auto'
                  src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500'
                  alt='Your Company'
                />
              </div>
              <div class='hidden sm:ml-6 sm:block'>
                <div class='flex space-x-4'>
                  <a
                    href='#'
                    class='bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium'
                    aria-current='page'
                  >
                    Swimming
                  </a>
                  <a
                    href='#'
                    class='text-gray-100 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
                  >
                    hostel
                  </a>
                  <a
                    href='#'
                    class='text-gray-100 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
                  >
                    Projects
                  </a>
                </div>
              </div>
            </div>
            <div class='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
              <button
                type='button'
                class='relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
              >
                <span class='absolute -inset-1.5'></span>
                <span class='sr-only'>View notifications</span>
                <svg
                  class='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0'
                  />
                </svg>
              </button>

              <div class='relative ml-3'>
                <div>
                  <button
                    type='button'
                    class='relative flex rounded-full  text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
                    id='user-menu-button'
                    aria-expanded='false'
                    aria-haspopup='true'
                  >
                    {/* <span class='absolute -inset-1.5'></span> */}
                    {/* <span class='sr-only'>Open user menu</span> */}
                    <img class='h-10 w-10 rounded-full' src={sports} alt='' />
                    <img
                      class='h-10 w-10 rounded-full'
                      src={sevenyfiveears}
                      alt=''
                    />
                  </button>
                </div>

                {isLoggedIn && (
                  <div
                    class='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
                    role='menu'
                    aria-orientation='vertical'
                    aria-labelledby='user-menu-button'
                    tabindex='-1'
                  >
                    <Link to='/user/profile'>
                      <a
                        href='#'
                        class='block px-4 py-2 text-sm text-gray-700'
                        role='menuitem'
                        tabindex='-1'
                        id='user-menu-item-0'
                      >
                        Your Profile
                      </a>
                    </Link>

                    <a
                      href='#'
                      class='block px-4 py-2 text-sm text-gray-700'
                      role='menuitem'
                      tabindex='-1'
                      id='user-menu-item-1'
                    >
                      Your batch
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div class='sm:hidden' id='mobile-menu'>
          <div class='space-y-1 px-2 pb-3 pt-2'>
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
            <a
              href='#'
              class='bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium'
              aria-current='page'
            >
              Swimming
            </a>
            <a
              href='#'
              class='text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'
            >
              hostel
            </a>
            <a
              href='#'
              class='text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'
            >
              Projects
            </a>
          </div>
        </div>
      </nav>

      <section className='  w-full     bg-gray-200 '>
        <div
          className='bg-slate-900
 bg-natural-200 px-6 py-12 text-center dark:bg-neutral-900 md:px-12 lg:text-left   shadow-2xl'
        >
          <div className='w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl'>
            <div className='grid items-center gap-12 lg:grid-cols-2 '>
              <div className=' lg:mt-0'>
                <h1
                  className='mt-2 text-white mb-16 text-2xl font-bold tracking-tight md:text-6xl xl:text-4xl leading-7  
'
                >
                  जिल्हा क्रीडा संकुल समिती अंतर्गत
                  <div className=' text-2xl text-blue-500 md:text-6xl xl:text-6xl'>
                    जलतरण तलाव ,
                  </div>
                  यवतमाळ <br />
                  {/* <span className='text-white  text-sm'>for your business</span> */}
                </h1>
                {/* <a
                  className='mb-2 inline-block rounded bg-primary px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0'
                  data-te-ripple-init
                  data-te-ripple-color='light'
                  href='#!'
                  role='button'
                >
                  Get started
                </a> */}
                <Link to='/batches'>
                  <a
                    className='mb-2 inline-block rounded bg-primary px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0'
                    data-te-ripple-init
                    data-te-ripple-color='light'
                    href='#!'
                    role='button'
                  >
                    <button
                      type='button'
                      className='text-white flex gap-2 items-center w-full bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'
                    >
                      सभासद व्हा <FaArrowRight />
                    </button>
                  </a>
                </Link>
                <a
                  className='inline-block rounded px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:hover:bg-neutral-800 dark:hover:bg-opacity-60 text-gray-500'
                  data-te-ripple-init
                  data-te-ripple-color='light'
                  href='#!'
                  role='button'
                >
                  Learn more
                </a>{' '}
              </div>
              <div className='mb-12 lg:mb-0'>
                <img
                  src='https://images.pexels.com/photos/870170/pexels-photo-870170.jpeg?cs=srgb&dl=pexels-marctutorials-298692-870170.jpg&fm=jpg'
                  className='w-full h-[100%] rounded-lg shadow-lg dark:shadow-black/20'
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className=' h-[90vh] bg-lime-200'>
        <About />
      </div>
    </>
  )
}

export default Home
