import React from 'react'
import Cards from '../../acsets/desktop/isocard (1).svg'

export const Slogan = () => {
  return (
    <section className='text-36 relative my-14 font-extrabold md:my-28 md:grid md:grid-cols-3 md:items-start md:text-[40px]'>
      <div className="text-center md:col-span-1 md:col-start-2  ">
        <p className=''>
          Earn <span className='dark:text-gray-600 text-red-500'>More</span>
        </p>
        <p className="">
          Pay Less
        </p>
        <button className='text-20 px-6 py-[6px] font-bold text-white hover:text-black
        mr-[27px] dark:bg-gray-500 bg-red-500 hover:bg-gray-200 dark:hover:bg-gray-300 rounded-xl 
        transition-all duration-300 md:text-24 md:py-[8px] '>
          Start
        </button>
      </div>
      <div className="mt-[0px]  md:absolute md:right-[-7rem] md:top-[-2rem] ">
        <img src={Cards} alt="credit card" />
      </div>
    </section>
  )
}
