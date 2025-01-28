import { IconContext } from 'react-icons';
import './Controls.css'
import { IoPlay, IoPause, IoPlaySkipBack, IoPlaySkipForward } from "react-icons/io5";

export default function Controls({setIsPlaying, isPlaying}: {setIsPlaying: any, isPlaying: boolean}) {
  return (
    <>
        <IconContext.Provider value={{size: "30px"}}>
            <div className='controls-container'>
                <div className="prev-btn">
                    <IoPlaySkipBack />
                </div>
                <div className="play-pause-btn" onClick={() => setIsPlaying((prev: boolean) => !prev)}>
                    {
                        isPlaying ? <IoPause /> : <IoPlay />
                    }
                </div>
                <div className="next-btn">
                    <IoPlaySkipForward />
                </div>
            </div>
        </IconContext.Provider>
    </>
  )
}
