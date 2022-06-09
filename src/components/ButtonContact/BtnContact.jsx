import React from 'react'
import { BsMessenger , BsPhone } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'

export const BtnContact = () => {
  return (
    <div className=" pl-[80%] py-5 fixed z-[99] md:right-[30px] bottom-0 right-[10px]  ">
    <button className='btn-pulse'>
      <AiOutlineMail size={"30px"} className="btn-contact " />
    </button>
    <button className='btn-pulse'>
      <BsMessenger size={"30px"} className="btn-contact " />
    </button>
    <button className='btn-pulse'>
      <BsPhone size={"30px"} className="btn-contact " />
    </button>
  </div>
  )
}
export default BtnContact;
