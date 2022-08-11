import React from 'react'
import CenterMenu from './CenterMenu'
import Logo from '../../img/MuzicLogo.png'

const Header = () => {

    const buttonStyle = 'border-[2px] rounded-[10px] border-[#232A4E] px-[25px]'
  return (
    <div className="header bg-[#081730] flex items-center justify-between px-[5rem] pt-[2.4rem] text-[0.8rem]">
        <img src={Logo} alt="" className="logo w-[42px] h-[42px]"/>
        <CenterMenu/>
        <div className="button flex">
            <button className={`mr-[34px] hover:bg-[#232A4E]` +buttonStyle}>Sign Up</button>
            <button className={buttonStyle }>Log In</button>
        </div>
    </div>
  )
}

export default Header