import { FacebookLogo, LinkedinLogo, TwitchLogo, TwitterLogo, YoutubeLogo } from 'phosphor-react'
import React from 'react'
import CenterMenu from '../Header/CenterMenu'

const Footer = () => {
    const SocialMidiaStyle = "rounded-full border-2 border-whit p-2 mr-[5rem]"
  return (
    <div className="footer flex flex-col items-center justify-start px-[5rem] bg-[#081730] h-[45rem] pt-[18rem] mt-[-10rem] relative z-[-1]">
        <CenterMenu/>
        <div className="flex w-[100%] justify-center mt-14">
            <div className={SocialMidiaStyle}>
                <FacebookLogo size={50}/>
            </div>
            <div className={SocialMidiaStyle}>
                <TwitterLogo size={50}/>
            </div>
            <div className={SocialMidiaStyle}>
                <YoutubeLogo size={50}/>
            </div>
            <div className={SocialMidiaStyle}>
                <LinkedinLogo size={50}/>
            </div>
        </div>
            <span className="text-[1rem] text-gray-400 px-[15rem] text-center mt-[4rem]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt ea est 
                magnam ducimus expedita, facere maiores repellat, vitae explicabo 
                officiis provident aspernatur error ratione corrupti labore adipisci. Dicta, eaque facere.
            </span>
</div>
  )
}

export default Footer