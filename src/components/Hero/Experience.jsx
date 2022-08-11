import React from 'react'
import Path from '../../img/Path 318.png' 
import Feature from './Feature'

import Group2 from '../../img/Group 2.png'
import MusicIcon from '../../img/music icon.png'
import Group4 from '../../img/Group 4.png'

const Experience = () => {
  return (
    <div className="experience flex flex-col items-center justify-start px-[5rem] bg-[#020917] h-[60rem] pt-[18rem] mt-[-10rem] relative z-[2] rounded-b-[5rem]">
        <img src={Path} alt="img" className="w-[5rem]" />

        <div className="headline mt-7 flex flex-col items-center text-[2rem]">
            <span>An Amazing App Can Change Your Daily Life</span>
            <span>
                <b>Music Experience</b>
            </span>
        </div>

        <div className="feature flex items-center justify-around mt-[6rem] w-[100%]">
            <Feature img={Group2} title="For Live Music"/>
            <Feature img={MusicIcon} title="For Daily Music" />
            <Feature img={Group4} title="For Artists" />
        </div>
    </div>
  )
}

export default Experience