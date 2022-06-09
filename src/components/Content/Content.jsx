import React from 'react'
import { FaUsers } from 'react-icons/fa'
import { BsFillCreditCardFill } from 'react-icons/bs'
import checkPoint from '../../acsets/mobile/checkpoint.svg'
import { useSpring, animated } from 'react-spring'

export const Content = () => {
  const customer = useSpring({ customers: 806, from: { customers: 0 } });
  const carduser = useSpring({ cardusers: 806, from: { cardusers: 0 } });
  return (
    <section className='md:flex md:flex-row'>
      <div className="ml-[70px] mr-[54px] mb-6  flex flex-col items-center 
      bg-gradient-to-b shadow-md dark:from-slate-400 from-red-400 rounded-[20px] to-transparent
      md:w-[20%]  ">
        <div className="mt-16 gap-8 flex items-start">
          <FaUsers size={"22px"} className="mt-[12px]" />
          <div className='text-24'>
            <animated.div>
              {customer.customers.to((val) => Math.floor(val))}
            </animated.div>
            <p className='text-13 font-semibold mb-[32px] md:text-16 '>
              Customer
            </p>
          </div>
        </div>
        <div className="flex gap-8 mb-16 items-start ml-[20px] ">
          <BsFillCreditCardFill size={"22px"} className="mt-[12px]" />
          <div className="text-24">
            <animated.div>
              {carduser.cardusers.to((val) => Math.floor(val))}
            </animated.div>
            <p className="text-13 font-semibold md:text-16">
              Cards Issued
            </p>
          </div>
        </div>
      </div>
      <div className="text-13 flex flex-col w-[100%] mt-[90px] mb-9 font-semibold
      md:w-[30%] md:text-[10px] md:ml-[20%] md:mt-[0] ">
        <div className="checkpoint-content ">
          <img src={checkPoint} alt="checkpoint" />
          <p>Card repport send to your phone every weeks</p>
        </div>
        <div className="checkpoint-content">
          <img src={checkPoint} alt="checkpoint" />
          <p>No external feels</p>
        </div>
        <div className="checkpoint-content pb-5">
          <img src={checkPoint} alt="checkpoint" />
          <p>Set spending limits and restrictions</p>
        </div>
      </div>
    </section>
  )
}

export default Content;