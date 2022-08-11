import React from 'react'
import Path318 from '../../img/Path 318.png'
import DownloadAds from './DownloadAds'

const DownloadSection = () => {
  return (
    <div className="flex flex-col items-center justify-start px-[5rem] 
    bg-[#020917] h-[48rem] pt-[18rem] mt-[-10rem] relative z-[0] rounded-b-[5rem]">
        <img src={Path318} alt="path" className="w-[5rem]"/>

        <div className="heading mt-7 flex flex-col items-center text-[2rem]">
            <span>
                Download The Best Music
            </span>
            <span><b>App Now!</b></span>
            <span className="text-[1rem] text-gray-400 px-[15rem] text-center mt-[1rem">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi mollitia perferendis 
                architecto quidem, ipsam accusamus reprehenderit quaerat animi harum. 
                Eum doloremque voluptatibus illo, tempore delectus neque itaque unde a quibusdam?
            </span>
        </div>
        <div className="mt-14">
            <DownloadAds/>
        </div>
    </div>
  )
}

export default DownloadSection