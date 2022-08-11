import React, {useState} from 'react'
import ReactVisibilitySensor from 'react-visibility-sensor'
import { motion } from 'framer-motion'
import DownloadAds from './DownloadAds'
import BackGraphics from '../../img/backgraphics.png'
import P1 from '../../img/p 1.png'
import P2 from '../../img/p 2.png'
import P3 from '../../img/p 3.png'
import P4 from '../../img/p 4.png'

const Hero = () => {
    const [elementIsVisible, setElementIsVisible] = useState(false);
    const bg = {
        true: {
          left: "7rem",
        },
        false: {
          left: "19rem",
        },
      };
      const musicPlayer = {
        true: {
          left: "295px",
        },
        false: {
          left: "235px",
        },
      };
      const rect = {
        true: {
          left: "11rem",
        },
        false: {
          left: "13rem",
        },
      }
      const heart = {
        true: {
          left: "9rem",
        },
        false: {
          left: "12.5rem",
        },
      };

  return (
    <ReactVisibilitySensor
    onChange = {(isVisible) => setElementIsVisible(isVisible)} minTopValue={300}>
    <div className="wrapper bg-[#081730] flex items-center justify-between px-[5rem]
     rounded-b-[5rem] w-[100%] h-[35rem] relative z-[4]">
        <div className="headings flex flex-col items-start justify-center h-[100%] text-[3rem]">
            <span> Experience The</span>
            <span>
                <b>best Quality Music</b>
            </span>
            <span className="text-[15px] text-[#525d6E]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                <br />
                 Vel fugiat repellat eum maxime iusto aliquid totam, nam et, optio.
            </span>
            <div>
                <span className="text-[13px]"> Download now on IOS and Android</span>
                <DownloadAds/>
            </div>
        </div>
        <div className="images relative w-[50%]">
            <motion.img transition={{duration:1, type: 'ease-out'}} variants={bg} animate={`${elementIsVisible}`}
            src={BackGraphics} alt="back graphics" className="absolute top-[-8rem] left-[19rem]" />

            <motion.img   src={P1} alt="" className="absolute top-[-15rem] h-[34rem] left-[13rem]"/>

            <motion.img transition={{duration:1, type: 'ease-out'}} variants={musicPlayer} animate={`${elementIsVisible}`} src={P2} alt="" className="absolute left-[235px] top-[94px] w-[175px]"/>

            <motion.img transition={{duration:1, type: 'ease-out'}} variants={rect} animate={`${elementIsVisible}`} src={P3} alt="" className="absolute w-[5rem] left-[13rem] top-[12rem]"/>

            <motion.img transition={{duration:1, type: 'ease-out'}} variants={heart} animate={`${elementIsVisible}`} src={P4} alt="" className="absolute w-[5rem] left-[12.5rem] top-[12rem]"/>

        </div>
    </div>
    </ReactVisibilitySensor>
  )
}

export default Hero