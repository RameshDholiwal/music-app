import { useEffect, useRef, useState } from 'react'
import Animation from './Animation'
import Controls from './Controls'
import './PlayCard.css'
import imageCDVector from '../../assets/images/cd-vector-image.jpg'

export default function PlayCard({currentTrack, tracks, currentIndex, setCurrentIndex}: {currentTrack: any, tracks: any[], currentIndex: any, setCurrentIndex: any}) {
  var audioSrc = currentTrack?.url
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(new Audio(tracks[0]?.url))
  const isReady = useRef(false)
  console.log(setCurrentIndex)

  console.log("1", currentTrack)
  
  useEffect(() => {
    if (audioSrc){
      console.log("isplaying: ", isPlaying, audioRef.current)
      if (isPlaying && audioRef.current) {
        audioRef.current = new Audio(audioSrc)
        audioRef.current.play()
      } else {
        audioRef.current.pause()
      }
    }
  }, [isPlaying])

  useEffect(() => {
    console.log("currentindex: ", currentIndex)
    audioRef.current.pause();
    audioRef.current = new Audio(audioSrc);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true)
    } else {
      isReady.current = true
    }
  }, [currentIndex])

  useEffect(() => {
    return () => {
      console.log("close")
      audioRef.current.pause();
    }
  }, [])
  
  
  return (
    <>
      <div className="playcard-container">
        <div className="playcard-left">
          <div className={`icon ${isPlaying ? "active" : ""}`}>
            <div className='svg-circle'>
              {/* <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="207px" height="207px" viewBox="-30.04 -30.04 489.23 489.23" xml:space="preserve" stroke="#000000" transform="matrix(-1, 0, 0, 1, 0, 0)rotate(0)" stroke-width="13.303681000000001"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M214.575,197.917c9.208,0,16.665,7.464,16.665,16.665c0,9.201-7.457,16.667-16.665,16.667 c-9.203,0-16.667-7.466-16.667-16.667C197.908,205.381,205.372,197.917,214.575,197.917z"></path> <path d="M214.575,0C96.067,0,0.001,96.072,0.001,214.582c0,118.508,96.066,214.569,214.574,214.569 c118.514,0,214.576-96.062,214.576-214.569C429.15,96.072,333.089,0,214.575,0z M63.034,135.922c-1.753,0-3.513-0.487-5.092-1.499 c-4.346-2.817-5.58-8.636-2.767-12.968c24.532-37.826,61.48-66.563,104.041-80.9c4.907-1.671,10.227,0.982,11.874,5.889 c1.649,4.907-0.988,10.231-5.895,11.872c-38.549,12.998-72.047,39.037-94.289,73.336C69.117,134.423,66.107,135.922,63.034,135.922 z M92.212,160.918c-1.703,0-3.424-0.463-4.967-1.431c-4.391-2.747-5.725-8.524-2.988-12.92 c21.827-34.941,55.463-60.761,94.726-72.679c4.915-1.499,10.189,1.288,11.688,6.241c1.499,4.951-1.294,10.195-6.248,11.694 c-34.913,10.6-64.846,33.564-84.258,64.674C98.392,159.347,95.328,160.918,92.212,160.918z M132.513,171.728 c-1.812,2.683-4.763,4.12-7.769,4.12c-1.813,0-3.635-0.501-5.244-1.593c-4.294-2.909-5.416-8.736-2.522-13.014 c16.464-24.367,40.815-42.921,68.561-52.271c4.937-1.639,10.227,0.998,11.874,5.905c1.649,4.905-0.988,10.229-5.895,11.886 C167.638,134.768,146.685,150.753,132.513,171.728z M152.079,214.582c0-34.508,27.978-62.496,62.496-62.496 c34.522,0,62.498,27.98,62.498,62.496c0,34.517-27.991,62.496-62.498,62.496C180.065,277.078,152.079,249.098,152.079,214.582z M214.731,318.522c-0.95-5.089,2.397-9.994,7.488-10.943c29.659-5.607,56.545-23.14,73.757-48.154 c2.93-4.264,8.765-5.346,13.032-2.416c4.271,2.945,5.346,8.772,2.408,13.048c-19.993,29.042-51.234,49.432-85.738,55.937 c-0.585,0.111-1.158,0.152-1.76,0.152C219.518,326.153,215.579,323.031,214.731,318.522z M221.514,353.291 c-0.966-5.069,2.376-9.975,7.458-10.956c37.942-7.205,71.384-28.488,94.15-59.951c3.029-4.184,8.885-5.134,13.096-2.1 c4.185,3.037,5.122,8.893,2.101,13.096c-25.6,35.357-63.186,59.29-105.849,67.369c-0.593,0.124-1.174,0.168-1.759,0.168 C226.299,360.933,222.363,357.807,221.514,353.291z M369.275,309.89c-30.116,47.104-78.81,79.672-133.611,89.346 c-0.545,0.093-1.103,0.137-1.64,0.137c-4.464,0-8.419-3.202-9.229-7.743c-0.89-5.089,2.505-9.966,7.602-10.855 c49.648-8.769,93.778-38.283,121.085-80.986c2.789-4.372,8.6-5.626,12.939-2.854C370.794,299.727,372.064,305.514,369.275,309.89z"></path> </g> </g></svg> */}
              <img src={imageCDVector} alt="cd vector image"  width="207px" height="207px" />
            </div>
          </div>
        </div>
        <div className="playcard-right">
          <div className="playcard-detail">
            <p className='playcard-title'>
              {currentTrack?.title}
            </p>
            <p className='playcard-artist'>
              {currentTrack?.artists}
            </p>
            <div className="playcard-icons">
              <div className='song-duration'>
                <p className='duration'>00:03</p>
                <Animation isPlaying={isPlaying} />
                <p className='duration'>{currentTrack?.duration}</p>
              </div>
              <div className='controls'>
                <Controls setIsPlaying = {setIsPlaying} isPlaying = {isPlaying} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
