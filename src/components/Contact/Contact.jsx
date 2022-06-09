import React from 'react'
import { BsFacebook, BsInstagram, BsSkype } from 'react-icons/bs'
import { FaTiktok } from 'react-icons/fa'
export const Contact = () => {
  return (
    <div className="h-auto bg-black w-auto md:w-[120%] md:mx-[-100px] mx-[-20px] text-white mt-[50px] ">
      <p className='text-center pt-3'> FOLLOW NERDCARD</p>
      <div className=" justify-center mt-1 gap-2 flex">
        <BsFacebook size={"24px"}/>
        <BsInstagram size={"24px"}/>
        <BsSkype size={"24px"} />
        <FaTiktok size={"24px"}/>
      </div>
      <div className=' py-5 ml-10 mr-10 flex-col'>
          <p className='text-[20px]' >Liên Hệ</p>
          <span>Số 51 Hẻm 215 Đường Nguyễn Xí, Phường 13, Bình Thạnh, Thành phố Hồ Chí Minh 700000</span>
          <br/>
          <span>Hotline: 0906.895.305</span>
      </div>
    </div>
  )
}
export default Contact;