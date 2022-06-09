import React, { useState } from 'react'
import { GiSun } from 'react-icons/gi';
import {WiMoonAltWaningCrescent6} from 'react-icons/wi'
import { HiOutlineMenu } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import useDarkMode from '../../useDarkMode';

const Narbar = (props) => {
  const [onpenMenu, setOpenMenu] = useState(false)
  const [isDarkMode,toggleDarkMode] = useDarkMode()
  const {isMobile} = props
  const handleMenu = () => {
    setOpenMenu(!onpenMenu);
  }

  return (
    <nav className='flex items-center'>
      <div className='flex items-center' >
        <div className='text-24 font-bold mr-[10px]'>
          NerdCard
        </div>
        {isDarkMode ? (
          <GiSun size={"30px"} color="#F3FF0F" className='cursor-pointer' onClick={()=>toggleDarkMode(!isDarkMode)} />
        ) : (
          <WiMoonAltWaningCrescent6 size={"30px"} color="#F3FF0F" className='cursor-pointer' onClick={()=>toggleDarkMode(!isDarkMode)} />
        )
        }
      </div>
      <ul className=" md:flex md:gap-5 ml-auto text-20 font-semibold  ">
        {
        onpenMenu && isMobile ? (<AiOutlineClose size={"30px"}
          className='cursor-pointer'
          onClick={handleMenu} />)
          : !onpenMenu && isMobile ?
            (<HiOutlineMenu size={"30px"}
              className='cursor-pointer'
              onClick={handleMenu} />) :
            (
              <>
                <li className='btn-hover' >Feture </li>
                <li className='btn-hover' >Menu</li>
                <li className='btn-hover' >Our Story</li>
                <li className='btn-hover ml-[28px]' >Contact </li>
              </>
            )
        } 
        { onpenMenu && isMobile &&
          (
            <div className="absolute right-8 z-10 bg-white rounded-md p-7 text-center text-14 text-gray-700">
              <li className='menu-narbar' >Feture </li>
              <li className='menu-narbar' >Menu</li>
              <li className='menu-narbar' >Our Story</li>
              <li className='menu-narbar' >Contact </li>
            </div>
          )
        }
      </ul>
    </nav>
  )
}

export default Narbar